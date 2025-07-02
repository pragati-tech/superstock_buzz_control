
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface WhatsAppRequest {
  message: string;
  recipientType: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, recipientType }: WhatsAppRequest = await req.json();
    
    console.log('WhatsApp request received:', { message, recipientType });

    const msg91ApiKey = Deno.env.get('MSG91_API_KEY');

    if (!msg91ApiKey) {
      console.error('MSG91_API_KEY environment variable is not set');
      throw new Error('Missing MSG91 API key');
    }

    console.log('Using MSG91 for WhatsApp messaging');

    // WhatsApp numbers for different client types (format: country code + number without +)
    const whatsappNumbers: { [key: string]: string[] } = {
      'all': ['918356845626', '919205757587', '919479590297'],
      // Brand categories
      'tanishq': ['918356845626'],
      'titan': ['919205757587'],
      'mia': ['919479590297'],
      // Business categories with detailed bifurcations
      'distributor': ['918356845626'], // NESTLE, REO, Havells, Nestle Profer
      'super-stockists': ['919205757587'], // Titan, Sonata, Fastrack, Dolycats
      'stockists': ['919479590297'] // Titan World, Helios, Fastrack Store, Nescafe Kiosks, Mia by Tanishq
    };

    const recipients = whatsappNumbers[recipientType] || whatsappNumbers['all'];
    
    console.log('Sending WhatsApp to recipients:', recipients);

    const whatsappPromises = recipients.map(async (whatsappNumber) => {
      console.log(`Preparing WhatsApp for ${whatsappNumber}`);
      
      // Updated MSG91 WhatsApp API endpoint and authentication
      const msg91Url = `https://control.msg91.com/api/v5/whatsapp/whatsapp-outbound-message/`;
      
      const requestBody = {
        integrated_number: "918882814007", // Your MSG91 WhatsApp Business number
        content_type: "text",
        payload: {
          messaging_product: "whatsapp",
          recipient_type: "individual",
          to: whatsappNumber,
          type: "text",
          text: {
            body: message
          }
        }
      };

      console.log('MSG91 WhatsApp API Request:', JSON.stringify(requestBody, null, 2));
      
      const response = await fetch(msg91Url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authkey': msg91ApiKey,
          'accept': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const responseText = await response.text();
      console.log(`MSG91 WhatsApp API Response Status: ${response.status}`);
      console.log(`MSG91 WhatsApp API Response: ${responseText}`);

      if (!response.ok) {
        console.error(`Failed to send WhatsApp to ${whatsappNumber}:`, {
          status: response.status,
          statusText: response.statusText,
          response: responseText
        });
        throw new Error(`Failed to send WhatsApp to ${whatsappNumber}: ${response.status} - ${responseText}`);
      }

      let result;
      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Failed to parse response as JSON:', parseError);
        result = { raw_response: responseText };
      }
      
      console.log(`WhatsApp sent successfully to ${whatsappNumber}:`, result);
      return result;
    });

    const results = await Promise.all(whatsappPromises);
    
    console.log('All WhatsApp messages sent successfully via MSG91, results:', results);

    return new Response(
      JSON.stringify({ 
        success: true, 
        messagesSent: results.length,
        recipients: recipients.length,
        service: 'MSG91 WhatsApp',
        results: results
      }),
      {
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error('Error sending WhatsApp via MSG91:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        service: 'MSG91 WhatsApp'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);


import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface SMSRequest {
  message: string;
  recipientType: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, recipientType }: SMSRequest = await req.json();
    
    console.log('SMS request received:', { message, recipientType });

    const msg91ApiKey = Deno.env.get('MSG91_API_KEY');
    const templateId = Deno.env.get('MSG91_TEMPLATE_ID');

    if (!msg91ApiKey) {
      console.error('MSG91_API_KEY environment variable is not set');
      throw new Error('Missing MSG91 API key');
    }

    if (!templateId) {
      console.error('MSG91_TEMPLATE_ID environment variable is not set');
      throw new Error('Missing MSG91 template ID');
    }

    console.log('Using MSG91 Template ID:', templateId);

    // Phone numbers for different client types
    const phoneNumbers: { [key: string]: string[] } = {
      'all': ['+918356845626', '+919205757587', '+919479590297'],
      // Brand categories
      'tanishq': ['+918356845626'],
      'titan': ['+919205757587'],
      'mia': ['+919479590297'],
      // Business categories with detailed bifurcations
      'distributor': ['+918356845626'], // NESTLE, REO, Havells, Nestle Profer
      'super-stockists': ['+919205757587'], // Titan, Sonata, Fastrack, Dolycats
      'stockists': ['+919479590297'] // Titan World, Helios, Fastrack Store, Nescafe Kiosks, Mia by Tanishq
    };

    const recipients = phoneNumbers[recipientType] || phoneNumbers['all'];
    
    console.log('Sending SMS to recipients:', recipients);

    const smsPromises = recipients.map(async (phoneNumber) => {
      // Remove the + from the phone number for MSG91
      const cleanPhoneNumber = phoneNumber.replace('+', '');
      
      console.log(`Preparing SMS for ${phoneNumber} (cleaned: ${cleanPhoneNumber})`);
      
      const msg91Url = `https://api.msg91.com/api/v5/flow/`;
      
      const requestBody = {
        template_id: templateId,
        short_url: "0",
        realTimeResponse: "1",
        recipients: [
          {
            mobiles: cleanPhoneNumber,
            message: message
          }
        ]
      };

      console.log('MSG91 API Request:', JSON.stringify(requestBody, null, 2));
      
      const response = await fetch(msg91Url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authkey': msg91ApiKey,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error(`Failed to send SMS to ${phoneNumber}:`, {
          status: response.status,
          statusText: response.statusText,
          error: error
        });
        throw new Error(`Failed to send SMS to ${phoneNumber}: ${response.status} - ${error}`);
      }

      const result = await response.json();
      console.log(`SMS sent successfully to ${phoneNumber}:`, result);
      return result;
    });

    const results = await Promise.all(smsPromises);
    
    console.log('All SMS messages sent successfully via MSG91, results:', results);

    return new Response(
      JSON.stringify({ 
        success: true, 
        messagesSent: results.length,
        recipients: recipients.length,
        service: 'MSG91',
        results: results
      }),
      {
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error('Error sending SMS via MSG91:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        service: 'MSG91'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);

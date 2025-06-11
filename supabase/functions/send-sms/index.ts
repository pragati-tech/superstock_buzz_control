
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

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

    const accountSid = Deno.env.get('TWILIO_ACCOUNT_SID');
    const authToken = Deno.env.get('TWILIO_AUTH_TOKEN');
    const twilioPhoneNumber = Deno.env.get('TWILIO_PHONE_NUMBER');

    if (!accountSid || !authToken || !twilioPhoneNumber) {
      throw new Error('Missing Twilio configuration');
    }

    // Updated phone numbers with the correct format
    const phoneNumbers: { [key: string]: string[] } = {
      'all': ['+918356845626'],
      'tanishq': ['+918356845626'],
      'titan': ['+918356845626'],
      'mia': ['+918356845626']
    };

    const recipients = phoneNumbers[recipientType] || phoneNumbers['all'];
    
    console.log('Sending SMS to recipients:', recipients);

    const smsPromises = recipients.map(async (phoneNumber) => {
      const auth = btoa(`${accountSid}:${authToken}`);
      
      const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          From: twilioPhoneNumber,
          To: phoneNumber,
          Body: message,
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error(`Failed to send SMS to ${phoneNumber}:`, error);
        throw new Error(`Failed to send SMS to ${phoneNumber}: ${error}`);
      }

      const result = await response.json();
      console.log(`SMS sent successfully to ${phoneNumber}:`, result.sid);
      return result;
    });

    const results = await Promise.all(smsPromises);
    
    console.log('All SMS messages sent successfully');

    return new Response(
      JSON.stringify({ 
        success: true, 
        messagesSent: results.length,
        recipients: recipients.length
      }),
      {
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error('Error sending SMS:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);

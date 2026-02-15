import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
const ACCESS_TOKEN =
  process.env.FB_CONVERSIONS_API_TOKEN || process.env.FB_CAPI_ACCESS_TOKEN;
const TEST_EVENT_CODE = process.env.FB_TEST_EVENT_CODE;

function hash(value: string) {
  return crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex');
}

export async function POST(req: NextRequest) {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    return NextResponse.json(
      { error: 'Meta Pixel ID or Conversions API token not configured' },
      { status: 500 }
    );
  }

  const { eventName, eventId, email, phone, customData, sourceUrl, fbc, fbp } = await req.json();

  const payload: Record<string, any> = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: sourceUrl || req.headers.get('referer') || '',
        action_source: 'website',
        user_data: {
          em: email ? [hash(email)] : undefined,
          ph: phone ? [hash(phone.replace(/\D/g, ''))] : undefined,
          client_ip_address: req.headers.get('x-forwarded-for')?.split(',')[0],
          client_user_agent: req.headers.get('user-agent') || undefined,
          fbp: req.cookies.get('_fbp')?.value || fbp || undefined,
          fbc: req.cookies.get('_fbc')?.value || fbc || undefined
        },
        custom_data: customData
      }
    ]
  };

  if (TEST_EVENT_CODE) {
    payload.test_event_code = TEST_EVENT_CODE;
  }

  const res = await fetch(
    `https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }
  );

  const json = await res.json();

  return NextResponse.json(json, { status: res.status });
}


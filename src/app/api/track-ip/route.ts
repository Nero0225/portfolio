import { NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

async function sendToTelegram(ip: string) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('Telegram credentials not configured');
    return;
  }

  const message = `🔍 New Resume View\nIP Address: ${ip}\nTime: ${new Date().toISOString()}`;
  
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to send message to Telegram');
    }
  } catch (error) {
    console.error('Error sending to Telegram:', error);
  }
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'Unknown IP';
    await sendToTelegram(ip);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error tracking IP:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
} 
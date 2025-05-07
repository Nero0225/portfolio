import { portfolioConfig } from '@/config/portfolio.config';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    console.log(message)

    // Create chat completion
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: portfolioConfig.prompt
        },
        {
          role: "user",
          content: message
        }
      ],
      model: "gpt-4o-mini",
    });

    return NextResponse.json({
      message: completion.choices[0].message.content
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
} 
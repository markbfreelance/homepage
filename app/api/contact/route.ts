import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      console.error('RESEND_API_KEY is not set in environment variables')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    const body = await req.json()
    const { name, email, phone, address, message } = body

    if (!name || !email || !address || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // must use this until you verify your domain
      to: 'markb.freelance@gmail.com',    // replace with your actual email
      replyTo: email,
      subject: `New Contact Form — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">

          <div style="background: #1a4f80; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; font-size: 20px; margin: 0; font-weight: 800;">New Contact Form Submission</h1>
            <p style="color: rgba(255,255,255,0.6); font-size: 13px; margin: 4px 0 0;">CanDonkeys — candonkeys.com</p>
          </div>

          <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; width: 140px;">
                  <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #9ca3af;">Name</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <span style="font-size: 14px; color: #111827; font-weight: 600;">${name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #9ca3af;">Email</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <a href="mailto:${email}" style="font-size: 14px; color: #1a4f80;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #9ca3af;">Phone</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <span style="font-size: 14px; color: #111827;">${phone || '—'}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #9ca3af;">Address</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                  <span style="font-size: 14px; color: #111827;">${address}</span>
                </td>
              </tr>
            </table>

            <div style="margin-top: 20px;">
              <p style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #9ca3af; margin: 0 0 8px;">Message</p>
              <div style="background: #f9fafb; border: 1px solid #f3f4f6; border-radius: 6px; padding: 14px;">
                <p style="font-size: 14px; color: #374151; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #f3f4f6;">
              <a href="mailto:${email}" style="display: inline-block; background: #6ab04c; color: white; font-size: 13px; font-weight: 700; padding: 10px 20px; border-radius: 6px; text-decoration: none;">
                Reply to ${name}
              </a>
            </div>
          </div>

        </div>
      `,
    })

    if (error) {
      console.error('Resend API error:', error)
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data?.id })

  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Unexpected server error' },
      { status: 500 }
    )
  }
}
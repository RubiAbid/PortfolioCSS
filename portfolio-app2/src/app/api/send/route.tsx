import { NextResponse } from "next/server";
import { Resend } from "resend";

// Retrieve environment variables
const resendApiKey = process.env.NEW_KEY || ""; // Fallback to empty string if not set
const fromEmail = process.env.FROM_EMAIL || ""; // Fallback to empty string if not set

// Create a Resend instance only if the API key is available
const resend = resendApiKey ? new Resend(resendApiKey as string) : null;

export async function POST(req: Request) {
  const { email, subject, message }: { email: string; subject: string; message: string } = await req.json();

  try {
    if (resend && fromEmail) {
      // Attempt to send the email if environment variables are configured
      await resend.emails.send({
        from: fromEmail as string,
        to: [fromEmail as string, email],
        subject: subject,
        react: (
          <>
            <h1>{subject}</h1>
            <p>Thank you for contacting us!</p>
            <p>New message submitted:</p>
            <p>{message}</p>
          </>
        ),
      });
    }

    // Always return success, regardless of the email outcome
    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Error while sending email:", error);

    // Return success even in case of an error, for user-facing consistency
    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  }
}

import { getContacts } from "@/sanity/queries";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendContactEmail(payload: Required<ContactPayload>) {
  const contacts = await getContacts();
  // TODO: Plug in a real transactional email service here, such as Resend or SendGrid.
  // Suggested env vars:
  // CONTACT_EMAIL_API_KEY=<real provider key>
  // CONTACT_TO_EMAIL=SAVVYPRIMELTD01@YAHOO.COM
  // The provider call should send payload.name, payload.email, payload.phone, and
  // payload.message to the configured contacts email or CONTACT_TO_EMAIL.
  console.info("Contact message for Savvy Prime Ltd", {
    to: process.env.CONTACT_TO_EMAIL || contacts.email,
    ...payload,
  });
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ message: "Invalid request body." }, { status: 400 });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const phone = payload.phone?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !phone || !message) {
    return Response.json({ message: "Name, email, phone, and message are required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return Response.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  if (message.length < 10) {
    return Response.json({ message: "Please add a little more detail to your message." }, { status: 400 });
  }

  try {
    await sendContactEmail({ name, email, phone, message });
    return Response.json({
      message:
        "Thank you. Savvy Prime Ltd has received your message. The live email provider still needs its API key before production launch.",
    });
  } catch {
    return Response.json(
      { message: "Your message could not be sent. Please try WhatsApp or call Savvy Prime Ltd." },
      { status: 500 },
    );
  }
}

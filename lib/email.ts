type Attachment = { filename: string; content: string };

type EmailPayload = {
  subject: string;
  text: string;
  replyTo: string;
  attachments?: Attachment[];
};

export async function sendStudioEmail({ subject, text, replyTo, attachments }: EmailPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = (process.env.CONTACT_TO_EMAIL ?? "sotriumphus@yahoo.fr").split(",").map((email) => email.trim()).filter(Boolean);
  if (!apiKey || !from || to.length === 0) throw new Error("Email service is not configured");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "Idempotency-Key": crypto.randomUUID() },
    body: JSON.stringify({ from, to, reply_to: replyTo, subject, text, attachments }),
  });
  if (!response.ok) throw new Error(`Email provider returned ${response.status}`);
}

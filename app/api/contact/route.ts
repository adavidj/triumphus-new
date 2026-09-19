import { NextResponse } from "next/server";
import { z } from "zod";
import { sendStudioEmail } from "@/lib/email";

const schema = z.object({ firstName: z.string().trim().min(2).max(80), lastName: z.string().trim().min(2).max(80), email: z.string().trim().email().max(200), message: z.string().trim().min(10).max(3000) });

export async function POST(request: Request) {
  try {
    const data = schema.parse(await request.json());
    await sendStudioEmail({ subject: `[Site TRIUMPHUS] Nouveau message de ${data.firstName} ${data.lastName}`, replyTo: data.email, text: `Nom : ${data.firstName} ${data.lastName}\nEmail : ${data.email}\n\nMessage :\n${data.message}` });
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ ok: false, error: "Invalid form" }, { status: 400 });
    console.error("Contact delivery failed", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 503 });
  }
}

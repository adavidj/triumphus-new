import { NextResponse } from "next/server";
import { z } from "zod";
import { sendStudioEmail } from "@/lib/email";
export const runtime = "nodejs";

const schema = z.object({ firstName: z.string().trim().min(2).max(80), lastName: z.string().trim().min(2).max(80), email: z.string().trim().email().max(200), phone: z.string().trim().min(5).max(40), source: z.string().trim().min(2).max(300), about: z.string().trim().min(10).max(3000) });

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const cv = form.get("cv");
    if (!(cv instanceof File)) return NextResponse.json({ ok: false, error: "CV required" }, { status: 400 });
    const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    const extensionOk = /\.(pdf|doc|docx)$/i.test(cv.name);
    if (cv.size > 3 * 1024 * 1024 || (!allowed.includes(cv.type) && !extensionOk)) return NextResponse.json({ ok: false, error: "Invalid CV" }, { status: 400 });
    const data = schema.parse(Object.fromEntries(["firstName", "lastName", "email", "phone", "source", "about"].map((key) => [key, form.get(key)])));
    const content = Buffer.from(await cv.arrayBuffer()).toString("base64");
    await sendStudioEmail({ subject: `[Site TRIUMPHUS] Candidature de ${data.firstName} ${data.lastName}`, replyTo: data.email, text: `Nom : ${data.firstName} ${data.lastName}\nEmail : ${data.email}\nTéléphone : ${data.phone}\nSource : ${data.source}\n\nPrésentation :\n${data.about}`, attachments: [{ filename: cv.name, content }] });
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ ok: false, error: "Invalid form" }, { status: 400 });
    console.error("Career delivery failed", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 503 });
  }
}

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Locale } from "@/lib/site";

const schema = z.object({ firstName: z.string().min(2), lastName: z.string().min(2), email: z.string().email(), message: z.string().min(10).max(3000) });
type Values = z.infer<typeof schema>;

export function ContactForm({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<Values>({ resolver: zodResolver(schema) });
  const onSubmit = async (values: Values) => {
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("sent");
      reset();
    } catch { setStatus("error"); }
  };

  const labelClass = "label text-black/40";
  const errorClass = "mt-2 block text-xs text-[#e1693f]";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8" noValidate>
      <div className="grid gap-8 sm:grid-cols-2">
        <label><span className={labelClass}>{locale === "fr" ? "Prénom" : "First name"}</span><Input {...register("firstName")} placeholder={locale === "fr" ? "Votre prénom" : "Your first name"} />{errors.firstName && <small className={errorClass}>{locale === "fr" ? "Prénom requis" : "First name required"}</small>}</label>
        <label><span className={labelClass}>{locale === "fr" ? "Nom" : "Last name"}</span><Input {...register("lastName")} placeholder={locale === "fr" ? "Votre nom" : "Your last name"} />{errors.lastName && <small className={errorClass}>{locale === "fr" ? "Nom requis" : "Last name required"}</small>}</label>
      </div>
      <label><span className={labelClass}>Email</span><Input type="email" {...register("email")} placeholder="name@email.com" />{errors.email && <small className={errorClass}>{locale === "fr" ? "Email invalide" : "Invalid email"}</small>}</label>
      <label><span className={labelClass}>Message</span><Textarea {...register("message")} placeholder={locale === "fr" ? "Parlez-nous de votre projet, de son contexte et de vos ambitions…" : "Tell us about your project, its context and your ambitions…"} />{errors.message && <small className={errorClass}>{locale === "fr" ? "10 caractères minimum" : "10 characters minimum"}</small>}</label>
      <div className="flex flex-wrap items-center gap-5"><Button variant="accent" size="lg" disabled={isSubmitting}>{isSubmitting ? (locale === "fr" ? "Envoi…" : "Sending…") : (locale === "fr" ? "Envoyer le message" : "Send message")}<ArrowUpRight className="size-4" /></Button>{status === "sent" && <p role="status" className="text-sm text-[#0c3241]">{locale === "fr" ? "Message reçu. Merci." : "Message received. Thank you."}</p>}{status === "error" && <p role="alert" className="text-sm text-[#e1693f]">{locale === "fr" ? "L'envoi a échoué. Réessayez." : "Sending failed. Please try again."}</p>}</div>
    </form>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowUpRight, FileUp } from "lucide-react";
import type { Locale } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Values = { firstName: string; lastName: string; email: string; phone: string; source: string; about: string; cv: FileList };

export function CareerForm({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<"idle" | "sent" | "error" | "file-error">("idle");
  const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<Values>();
  const submit = async (values: Values) => {
    setStatus("idle");
    const file = values.cv?.[0];
    if (!file || file.size > 3 * 1024 * 1024) { setStatus("file-error"); return; }
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => { if (key !== "cv") formData.append(key, String(value)); });
    formData.append("cv", file);
    try {
      const response = await fetch("/api/careers", { method: "POST", body: formData });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("sent");
      reset();
    } catch { setStatus("error"); }
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="grid gap-8">
      <div className="grid gap-8 sm:grid-cols-2"><label><span className="label text-black/40">{locale === "fr" ? "Prénom" : "First name"}</span><Input required {...register("firstName")} placeholder={locale === "fr" ? "Votre prénom" : "Your first name"} /></label><label><span className="label text-black/40">{locale === "fr" ? "Nom" : "Last name"}</span><Input required {...register("lastName")} placeholder={locale === "fr" ? "Votre nom" : "Your last name"} /></label></div>
      <div className="grid gap-8 sm:grid-cols-2"><label><span className="label text-black/40">Email</span><Input required type="email" {...register("email")} placeholder="name@email.com" /></label><label><span className="label text-black/40">{locale === "fr" ? "Téléphone" : "Phone"}</span><Input required {...register("phone")} placeholder="+229" /></label></div>
      <label><span className="label text-black/40">{locale === "fr" ? "Comment nous avez-vous connu ?" : "How did you hear about us?"}</span><Input required {...register("source")} placeholder={locale === "fr" ? "École, recommandation, réseau…" : "School, referral, network…"} /></label>
      <label><span className="label text-black/40">{locale === "fr" ? "À votre sujet" : "About you"}</span><Textarea required {...register("about")} placeholder={locale === "fr" ? "Votre parcours, votre pratique et vos ambitions…" : "Your background, practice and ambitions…"} /></label>
      <label className="group flex cursor-pointer items-center gap-5 border border-dashed border-black/25 p-6 transition-colors hover:border-[#e1693f]"><span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#0c3241] text-white"><FileUp className="size-5" /></span><span><strong className="block text-sm font-medium">{locale === "fr" ? "Ajouter votre CV" : "Add your résumé"}</strong><small className="label mt-2 block text-black/35">PDF / DOC / DOCX — 3 Mo max.</small></span><Input className="sr-only" required type="file" accept=".pdf,.doc,.docx" {...register("cv")} /></label>
      <div className="flex flex-wrap items-center gap-5"><Button variant="accent" size="lg" disabled={isSubmitting}>{isSubmitting ? (locale === "fr" ? "Envoi…" : "Sending…") : (locale === "fr" ? "Envoyer ma candidature" : "Submit application")}<ArrowUpRight className="size-4" /></Button>{status === "sent" && <p role="status" className="text-sm text-[#0c3241]">{locale === "fr" ? "Candidature reçue. Merci." : "Application received. Thank you."}</p>}{status === "file-error" && <p role="alert" className="text-sm text-[#e1693f]">{locale === "fr" ? "CV requis, 3 Mo maximum." : "Résumé required, 3 MB maximum."}</p>}{status === "error" && <p role="alert" className="text-sm text-[#e1693f]">{locale === "fr" ? "L'envoi a échoué. Réessayez." : "Sending failed. Please try again."}</p>}</div>
    </form>
  );
}

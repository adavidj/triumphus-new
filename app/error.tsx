"use client";
import { useEffect } from "react";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="arch-grid min-h-screen bg-[#101513] px-6 text-white grid place-items-center">
      <div className="max-w-xl text-center">
        <p className="label text-[#d8ff46]">
          TRIUMPHUS / Error
        </p>
        <h1 className="mt-6 font-display text-6xl leading-[.9] md:text-8xl">Une erreur est <em className="text-white/45">survenue.</em></h1>
        <button
          onClick={reset}
          className="mt-10 rounded-full bg-[#e1693f] px-7 py-4 text-xs uppercase tracking-[.2em] transition-colors hover:bg-[#d8ff46] hover:text-black"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
}

import * as React from "react";
import { cn } from "@/lib/utils";
export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) { return <textarea className={cn("min-h-36 w-full resize-y border-b border-black/20 bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-black/30 focus:border-[#e1693f]", className)} {...props} />; }

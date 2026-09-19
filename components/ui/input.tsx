import * as React from "react";
import { cn } from "@/lib/utils";
export function Input({ className, ...props }: React.ComponentProps<"input">) { return <input className={cn("h-14 w-full border-b border-black/20 bg-transparent px-0 text-base outline-none transition-colors placeholder:text-black/30 focus:border-[#e1693f]", className)} {...props} />; }

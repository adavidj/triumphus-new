import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7603E] disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      default: "bg-[#103456] text-white hover:bg-[#0b2945]",
      accent: "bg-[#e1693f] text-white hover:bg-[#0c3241]",
      outline: "border border-current bg-transparent hover:bg-black/5"
    },
    size: { default: "h-12 px-6", sm: "h-10 px-4 text-xs", lg: "h-14 px-8" }
  },
  defaultVariants: { variant: "default", size: "default" }
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) { const Comp = asChild ? Slot : "button"; return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />; }

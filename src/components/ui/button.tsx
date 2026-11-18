import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Size = "default" | "sm" | "lg";
type Variant = "primary" | "secondary";

const sizeClass: Record<Size, string> = {
  default: "h-11 px-5 text-sm",
  sm: "h-9 px-3.5 text-xs",
  lg: "h-12 px-6 text-[15px]",
};

type Common = {
  className?: string;
  size?: Size;
  variant?: Variant;
  children: React.ReactNode;
};

type AsButton = Common &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    href?: undefined;
  };

type AsLink = Common & { href: string };

export type ButtonProps = AsButton | AsLink;

/**
 * Primary: embossed black (gradient + inset highlight).
 * Secondary: quiet bordered control.
 * Soft radius — never pills. Active scale 0.97 (Emil).
 */
export function Button(props: ButtonProps) {
  const {
    className,
    size = "default",
    variant = "primary",
    children,
  } = props;

  const base = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden",
    "rounded-md font-medium tracking-[-0.01em] select-none",
    "transition-[transform,color,background-color,border-color] duration-[var(--duration-press)] ease-[ease]",
    "active:scale-[0.97]",
    "outline-none focus-visible:ring-2 focus-visible:ring-ink/20 focus-visible:ring-offset-2 focus-visible:ring-offset-snow",
    sizeClass[size],
    className,
  );

  if (variant === "primary") {
    const inner = (
      <>
        <span
          aria-hidden
          className="absolute inset-0 rounded-[inherit] bg-linear-to-b from-lift to-ink shadow-[inset_0_1px_0_0_var(--ink)] transition-[background] duration-[var(--duration-press)] ease-[ease] group-hover:from-ink"
        />
        <span className="relative z-10 text-[var(--btn-fg)]">{children}</span>
      </>
    );

    if ("href" in props && props.href) {
      return (
        <Link href={props.href} className={base}>
          {inner}
        </Link>
      );
    }

    const buttonProps = props as AsButton;
    return (
      <button type="button" className={base} {...omitMeta(buttonProps)}>
        {inner}
      </button>
    );
  }

  const secondary = cn(
    base,
    "border border-hairline bg-snow text-ink shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)]",
    "hover:bg-mist hover:border-steel/30",
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={secondary}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as AsButton;
  return (
    <button type="button" className={secondary} {...omitMeta(buttonProps)}>
      {children}
    </button>
  );
}

function omitMeta({
  className: _c,
  size: _s,
  variant: _v,
  children: _ch,
  href: _h,
  ...rest
}: AsButton) {
  return rest;
}

"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
export function ThemeToggle() { const { resolvedTheme, setTheme } = useTheme(); const dark = resolvedTheme === "dark"; return <button type="button" className="rounded-md p-2 hover:bg-[var(--surface)]" onClick={() => setTheme(dark ? "light" : "dark")} aria-label={dark ? "Use light theme" : "Use dark theme"}>{dark ? <Sun size={19}/> : <Moon size={19}/>}</button>; }

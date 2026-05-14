import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "../providers/theme-provider";
import { Inter } from "next/font/google";
import { cn } from "@ui/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", inter.variable)}>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>
          {children}
          <Toaster richColors position="top-right"/>
        </ThemeProvider>
      </body>
    </html>
  )
}
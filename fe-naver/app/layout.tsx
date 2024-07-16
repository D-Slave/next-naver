import * as React from 'react';
import type { Viewport } from 'next';
import "./globals.css";
import { LocalizationProvider } from "@/components/core/localization-provider";
import { UserProvider } from "@/contexts/user-context";
import { ThemeProvider } from "@/components/core/theme-provider/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <LocalizationProvider>
          <UserProvider>
              <ThemeProvider>{children}</ThemeProvider>
          </UserProvider>
      </LocalizationProvider>
      </body>
    </html>
  );
}

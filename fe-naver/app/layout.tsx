import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveAppBar from "./components/appBar";
import Grid from "@mui/material/Grid";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Grid container spacing={1}>
          <Grid xs={12}>
            <ResponsiveAppBar />
          </Grid>
          <Grid sm={12}>
              sideBar22
          </Grid>
          <Grid xs={12}>
              {children}
          </Grid>
      </Grid>
      </body>
    </html>
  );
}

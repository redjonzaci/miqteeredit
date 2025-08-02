import "@aws-amplify/ui-react/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./app.css";
import AuthenticatorWrapper from "./AuthenticatorWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "miqtë e Redit",
  description: "miqtë e Redit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthenticatorWrapper>{children}</AuthenticatorWrapper>
      </body>
    </html>
  );
}

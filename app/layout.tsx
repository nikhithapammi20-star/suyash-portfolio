import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Suyash Portfolio",
  description: "Frontend Developer Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
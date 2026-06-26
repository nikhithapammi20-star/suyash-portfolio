import "./globals.css";

export const metadata = {
  title: "Suyash Portfolio",
  description: "Professional Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
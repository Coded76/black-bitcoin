import "./globals.css";

export const metadata = {
  title: "Black Bitcoin",
  description: "Made for all BITCOIN lovers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#1C1C1C] antialiased`}>{children}</body>
    </html>
  );
}

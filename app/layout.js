import "./globals.css";

export const metadata = {
  title: "Something I Wanted To Say",
  description: "Just one honest thing — for you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen text-[#4a3c4e] antialiased">
        {children}
      </body>
    </html>
  );
}

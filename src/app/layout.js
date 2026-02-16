import "./globals.css";

export const metadata = {
  title: "RK Traders | Premium Indian Garlic Exporters",
  description: "Wholesale suppliers and exporters of premium Indian garlic varieties: Desi, Ooty, Kodaikanal, Mettupalayam, and Single Clove Garlic. Direct from farms.",
  keywords: "garlic export, indian garlic, ooty garlic wholesale, kodaikanal garlic, single clove garlic, rk traders, garlic price india"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-900 bg-slate-50" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}

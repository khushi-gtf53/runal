import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import "./globals.css";
import SmoothScroll from "@/components/common/SmoothScroll";

export const metadata = {
  title: "Runal",
  description: "Runal Enterprises.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
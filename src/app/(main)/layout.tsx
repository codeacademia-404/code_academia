import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/home.css";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

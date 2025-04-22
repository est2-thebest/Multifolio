import NavBar from "@/components/caio/NavBar";
import type { Metadata } from "next";
import "./Styles.css";
export const metadata: Metadata = {
  title: "Caio",
  description: "Uma apresentação sobre o Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-24">
      <NavBar name="Caio" themeColor="slate" />
      {children}
    </div>
  );
}

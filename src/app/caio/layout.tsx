import NavBar from "@/components/caio/NavBar";
import type { Metadata } from "next";
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
    <>
      <NavBar name="Caio" themeColor="violet" />
      {children}
    </>
  );
}

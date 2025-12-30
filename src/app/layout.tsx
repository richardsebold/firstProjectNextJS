import { Header } from "@/components/header";
import "./globals.css";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Aula NextJS do zero',
  description: 'Aprendendo NextJs do zero com o sujeito programador',
  openGraph: {
    title: 'Home',
    description: 'Aprendendo NextJs do zero no youtube',
    images: ['https://rounder.pics/pt/crop-image-square/'],
    locale: 'pt_BR',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>

        <Header />

        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import FotBar from "./components/footer/FotBar";

export const metadata = {
  title: "rizkyevers",
  description: "Hi, what's up everyone, I'm Rizky Putra Front-End Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/me/thisIsMe.png" sizes="any" />
      </head>
      <body className="bg-gray-200">
        <Navbar/>
        <div className="min-h-screen">{children}</div>
        <FotBar/>
        </body>
    </html>
  );
}

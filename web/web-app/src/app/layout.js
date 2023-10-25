import Navbar from "../components/navbar/Navbar";
import { CarProvider } from "@/context/CarContext";
import "./layout.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        <CarProvider>
          <Navbar />
          {children}
        </CarProvider>
      </body>
    </html>
  );
}

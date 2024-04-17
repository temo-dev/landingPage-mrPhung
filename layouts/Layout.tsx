import React from "react";
import Header from "./Header";
import Booking from "../components/BookingSystem/Booking";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <Header />
        <div>{children}</div>
      </div>
      <Booking />
      <Footer />
    </div>
  );
}

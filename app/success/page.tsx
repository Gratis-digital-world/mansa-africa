"use client";
import Success from "@/components/Success/Success";
import ConfettiTest from "@/components/ConfettiTest/ConfettiTest";
import { useEffect } from "react";

export default function SuccessPage() {
  useEffect(() => {
    const confettiBtn = document.getElementById("confettiBtn");
    confettiBtn.click();

    setTimeout(() => {
      location.replace("/");
    }, 5000);
  });

  return (
    <div className="text-[#18181B] bg-white w-screen h-screen text-[1.1rem]">
      <ConfettiTest />
      <Success />
    </div>
  );
}

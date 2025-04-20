"use client";

import { useEffect, useState } from "react";
interface Props {
  loadingText: string;
}

export default function LoadingDots({ loadingText }: Props) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500); // update every 0.5s

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <p className="text-center font-medium animate-pulse">
      {loadingText}
      {dots}
    </p>
  );
}

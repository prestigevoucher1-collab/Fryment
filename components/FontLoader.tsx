"use client";

import { useEffect, useState } from "react";

export default function FontLoader() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <link rel="preload" href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap" as="style" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap" media={mounted ? "all" : "print"} />
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" as="style" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" media={mounted ? "all" : "print"} />
    </>
  );
}

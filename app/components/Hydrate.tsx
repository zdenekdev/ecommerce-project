"use client";

import { ReactNode, useEffect, useState } from "react";

import React from "react";

function Hydrate({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);

  // Wait till Nextjs rehydration completes

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return <>{isHydrated ? <>{children}</> : <div>Loading...</div>}</>;
}

export default Hydrate;

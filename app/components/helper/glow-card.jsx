"use client";

import { useState } from "react";

const GlowCard = ({ children , identifier }) => {
  // Legacy pointer-based glow removed; using CSS-only rotating halo.

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-border transition-all duration-300 relative bg-card text-foreground rounded-xl shadow-subtle hover:shadow-md hover:scale-[1.02] w-full`}>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;

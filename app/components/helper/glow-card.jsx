"use client";

import { useState } from "react";

const GlowCard = ({ children, identifier, continuous = false }) => {
  // Legacy pointer-based glow removed; using CSS-only rotating halo.

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article
        className={`glow-card glow-card-${identifier} effect-rotating ${
          continuous ? "effect-rotating-continuous" : ""
        } h-fit select-none border border-border transition-all duration-300
         relative bg-card text-foreground rounded-xl shadow-subtle hover:shadow-md
           w-full`}
      >
        {children}
      </article>
    </div>
  );
};

export default GlowCard;

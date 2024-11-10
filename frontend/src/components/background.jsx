// Use client directive for Next.js
"use client";

import React from 'react';
import { AnimatedBackground } from 'animated-backgrounds';

function Background() {
  return (
    <div>
      <AnimatedBackground animationName="particleNetwork" />
    </div>
  );
}

export default Background;

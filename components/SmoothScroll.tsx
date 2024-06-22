"use client"

import { ReactLenis, useLenis } from 'lenis/react'

function SmoothScroll( {children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ReactLenis root options={
        {
            lerp: 0.05,
            duration: 1.5,
        }
   
    }>
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll;
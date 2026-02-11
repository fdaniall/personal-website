'use client'


import { ReactLenis } from 'lenis/react'

function SmoothScroll({ children }: { children: React.ReactNode }) {

    return (
        <ReactLenis root>
            {children as any}
        </ReactLenis>
    )
}

export default SmoothScroll

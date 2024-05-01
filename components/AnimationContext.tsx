"use client"
// pages/AnimationContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AnimationContextType {
    animationTrigger: boolean;
    setAnimationTrigger: (value: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

interface AnimationProviderProps {
    children: ReactNode;
}

export function AnimationProvider({ children }: AnimationProviderProps) {
    const [animationTrigger, setAnimationTrigger] = useState(false);

    return (
        <AnimationContext.Provider value={{ animationTrigger, setAnimationTrigger }} >
            {children}
        </AnimationContext.Provider>
    );
}

export function useAnimation() {
    const context = useContext(AnimationContext);
    if (!context) {
        throw new Error('useAnimation must be used within an AnimationProvider');
    }
    return context;
}

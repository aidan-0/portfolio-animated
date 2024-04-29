import { createContext } from "react";
import { gsap } from "gsap";

export const TimelineContext = createContext(gsap.timeline());
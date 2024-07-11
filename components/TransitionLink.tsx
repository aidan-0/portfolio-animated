"use client";

import { useRouter, usePathname } from "next/navigation";
import { animatePageOut } from "@/animations";

export default function TransitionLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (href === pathname) {
      return;
    } else {
    animatePageOut(href, router);
    }
    // console.log("clicked")

  };

  return (
    <button
      id="nav-link"
      onClick={handleClick}
    >
      {label}
    </button>
  );
}

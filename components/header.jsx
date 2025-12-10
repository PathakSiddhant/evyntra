"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center select-none">
          <Image
            src="/evyntra.png"    
            alt="logo"
            width={120}
            height={40}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

      </div>
    </nav>
  );
}

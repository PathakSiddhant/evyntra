"use client";
import Image from "next/image";
import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
// import { SignUpButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href={"/"}className="flex items-center select-none">
          <Image
            src="/evyntra.png"    
            alt=" evyntra logo"
            width={120}
            height={40}
            priority
            className="w-full h-11"
          />

          {/* Pro Badge */}

        </Link>

        {/* Search & Location - Desktop Only */}

        {/* Right Side Action */}
        <div className="flext items-center"></div>
          <SignedIn>
            {/* Create Event */}
            
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button size={"sm"}>Sign In</Button>
            </SignInButton>
          </SignedOut>

       </div>

      {/* Mobile Search & Location - Below Header */}

    </nav>
    
    { /* Modals */ }

    </>

  );
}

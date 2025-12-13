"use client";

import Image from "next/image";
import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Authenticated, Unauthenticated } from "convex/react";
import { BarLoader } from "react-spinners";
import { useStoreUser } from "@/hooks/use-store-user";
// import { SignUpButton } from "@clerk/nextjs";

export default function Header() {

  const {isLoading} = useStoreUser()

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
          <Authenticated>
            {/* Create Event */}
            
            <UserButton />
          </Authenticated>

          <Unauthenticated>
            <SignInButton mode="modal">
              <Button size={"sm"}>Sign In</Button>
            </SignInButton>
          </Unauthenticated>

       </div>

      {/* Mobile Search & Location - Below Header */}

      
      {/* Loader */}
      { isLoading && <div className="absolute bootom-0 left-0 w-full">
        <BarLoader width={'100%'} color="#a855f7"/>
      </div>}

    </nav>
    
    { /* Modals */ }

    </>

  );
}

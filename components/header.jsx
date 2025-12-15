"use client";

import Image from "next/image";
import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Authenticated, Unauthenticated } from "convex/react";
import { BarLoader } from "react-spinners";
import { useStoreUser } from "@/hooks/use-store-user";
import { useState } from "react";
import { Building, Plus, Ticket } from "lucide-react";
// import { SignUpButton } from "@clerk/nextjs";

export default function Header() {

  const {isLoading} = useStoreUser()

  const [showUpgradeModal, setShowUpgradeModal] = useState(false)

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      {/* <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between"> */}
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center select-none">
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
        {/* <div className="flex items-center gap-6"> */}
          <div className="ml-auto flex items-center gap-1">
    

            <Button variant={"ghost"} size="sm" onClick = {() => setShowUpgradeModal(true)}>
              Pricing
            </Button>

            <Button variant={"ghost"} size="sm" asChild className={"mr-2"}>
              <Link href="explore">Explore</Link>
            </Button>
          </div>  

          <div className="flex items-center gap-2">
          <Authenticated>
                
                <Button size="sm" asChild className="flex gap-2 mr-4">
                  <Link href="/create-event">
                  <Plus className="w-4 h-4"/>
                  <span className="hidden sm:inline">Create Event</span>
                  </Link>
                </Button>

            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Link
                label="My Tickets"
                labelIcon={<Ticket size={16}/>}
                href="/my-tickets"
                />
                <UserButton.Link
                label="My Events"
                labelIcon={<Building size={16}/>}
                href="/my-events"
                />
                <UserButton.Action label="manageAccount"/>
              </UserButton.MenuItems>
            </UserButton>
          </Authenticated>

          <Unauthenticated>
            <SignInButton mode="modal">
              <Button size="sm">Sign In</Button>
            </SignInButton>
          </Unauthenticated>
        </div>
       </div>

      {/* Mobile Search & Location - Below Header */}

      
      {/* Loader */}
      { isLoading && <div className="absolute bottom-0 left-0 w-full">
        <BarLoader width='100%' color="#a855f7"/>
      </div>}

    </nav>
    
    { /* Modals */ }

    </>

  );
}

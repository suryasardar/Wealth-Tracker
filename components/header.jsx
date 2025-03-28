import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between ">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="wealth logo"
            height={60}
            width={100}
            className="h-8 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link
              href={"/dashboard"}
              className="text-grey-600 hover:text-blue-600 flex items-center gap-2"
            >
              <Button variant="outline">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline ">Dashboard</span>
              </Button>
            </Link>
            <Link
              href={"/transaction/create"}
              className="text-grey-600 hover:text-blue-600 flex items-center gap-2"
            >
              <Button className="flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline ">Add transaction</span>
              </Button>
            </Link>
          </SignedIn>
        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard">
            <Button variant="outline">Login</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;

"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const TOP_OFFSET = 64;

const Header = () => {
  const [navScroll, setNavScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 w-full bg-white px-4",
        navScroll ? "border-b" : "",
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* SiteLogo */}
        <Link href="/" aria-label="Link">
          <Image
            src="/sociabuzz-logo.png"
            alt="Image"
            width={759}
            height={150}
            className="h-7 w-auto"
          />
        </Link>

        {/* Button */}
        <Button
          asChild
          variant="primary"
          size="default"
          className="rounded-full px-6"
        >
          <Link href="/" aria-label="Sign Up/Login">
            Sign Up/Login
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;

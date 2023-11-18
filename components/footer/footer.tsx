import { cn } from "@/lib/utils";
import { Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const Links = [
  {
    id: 1,
    label: "Hubungi Kami",
    url: "/",
  },
  {
    id: 2,
    label: "Panduan & FAQ",
    url: "/",
  },
  {
    id: 3,
    label: "Ketentuan Penggunaan",
    url: "/",
  },
  {
    id: 4,
    label: "Kebijakan Privasi",
    url: "/",
  },
  {
    id: 5,
    label: "Kebijakan Lainnya",
    url: "/",
  },
  {
    id: 6,
    label: "Blog",
    url: "/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#262626] px-4 pb-12 pt-20">
      <div className="container">
        <div className="mx-auto flex flex-col items-center gap-8 md:w-2/3">
          {/* # */}
          <Link href="/" aria-label="SociaBuzz">
            <Image
              aria-hidden
              src="/sociabuzz-logo-white.png"
              alt="Image"
              width={753}
              height={150}
              className="h-10 w-auto"
            />
          </Link>

          {/* # */}
          <ul className="flex flex-col items-center gap-2">
            {Links?.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.url}
                  aria-label={item.label}
                  className="text-white/80 hover:text-white hover:underline hover:underline-offset-4"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* # */}
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/"
              aria-label="Instagram"
              className="rounded-lg bg-foreground/20 p-2 text-white"
            >
              <Instagram className="h-6 w-6" />
            </Link>

            <Link
              href="/"
              aria-label="YouTube"
              className="rounded-lg bg-foreground/20 p-2 text-white"
            >
              <Youtube className="h-6 w-6" />
            </Link>
          </div>

          {/* # */}
          <div className="flex flex-col items-center gap-2 text-center text-xs text-white/50">
            <h4 className="font-bold">SociaBuzz © All Rights Reserved</h4>
            <p className="leading-normal">
              Company: PT Komunika Lintas Maya | Address: Epiwalk 5th Floor
              540A, Jl. HR. Rasuna Said, Jakarta, Indonesia 12940 | Business
              Registration Number: 9120008622154 | Electronic System
              Registration Number: 000781.01/DJAI.PSE/06/2021
            </p>
            <span>&</span>
            <p className="leading-normal">
              Company: SociaBuzz Pte. Ltd. | Address: 68 Circular Road #02-01
              Singapore 049422 | Unique Entity Number (UEN): 202332283K
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

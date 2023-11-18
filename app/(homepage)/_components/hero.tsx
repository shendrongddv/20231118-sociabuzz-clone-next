import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="px-4 py-20 pt-32">
      <div className="container flex flex-col items-center gap-4">
        {/* Row */}
        <div className="flex flex-col items-center gap-4 text-center md:w-3/5">
          <h1 className="text-4xl font-black md:text-6xl">
            <span className="bg-gradient-to-r from-[#76cc11] to-[#0080ff] bg-clip-text text-transparent">
              Monetization tools
            </span>
            <br />
            for creators
          </h1>
        </div>

        {/* Row */}
        <div className="flex flex-col items-center">
          <Button asChild variant="primary" className="mb-2 rounded-full px-6">
            <Link href="/" aria-label="Sign Up Creator">
              Sign Up Creator
            </Link>
          </Button>

          <Button asChild variant="primaryLink" size="default" className="">
            <Link href="/" aria-label="Login Creator">
              Login Creator
            </Link>
          </Button>

          <Button asChild variant="primaryLink" size="default" className="">
            <Link href="/" aria-label="Login pengguna lainnya">
              Login pengguna lainnya
            </Link>
          </Button>
        </div>

        {/* Row */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <h2 className="bg-gradient-to-r from-[#76cc11] to-[#0080ff] bg-clip-text text-center text-2xl font-black text-transparent">
            Berbagai fitur untuk membantumu lakukan lebih & hasilkan lebih.
          </h2>
        </div>

        {/* Row */}
        <ul className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {/* Col */}
          <li className="group flex flex-col items-center gap-2 rounded-3xl border border-[#76cc11] bg-[#dffbdf] p-4 text-base transition duration-300 hover:scale-105 hover:border-white hover:bg-[#76cc11] hover:shadow-lg md:items-start md:p-6">
            <span className="flex h-7 items-center justify-center rounded-full bg-[#76cc11] p-2 text-xl font-semibold uppercase leading-none text-white transition duration-300 group-hover:bg-[#dffbdf] group-hover:text-black">
              Tribe
            </span>
            <h3 className="font-black">Get support from your community</h3>
          </li>
          {/* Col */}
          <li className="group flex flex-col items-center gap-2 rounded-3xl border border-[#40abfa] bg-[#dff8ff] p-4 text-base transition duration-300 hover:scale-105 hover:border-white hover:bg-[#40abfa] hover:shadow-lg md:items-start md:p-6">
            <span className="flex h-7 items-center justify-center rounded-full bg-[#40abfa] p-2 text-xl font-semibold uppercase leading-none text-white transition duration-300 group-hover:bg-[#dff8ff] group-hover:text-black">
              Shop
            </span>
            <h3 className="font-black">Sell your creations</h3>
          </li>
          {/* Col */}
          <li className="group flex flex-col items-center gap-2 rounded-3xl border border-[#e94151] bg-[#ffeded] p-4 text-base transition duration-300 hover:scale-105 hover:border-white hover:bg-[#e94151] hover:shadow-lg md:items-start md:p-6">
            <span className="flex h-7 items-center justify-center rounded-full bg-[#e94151] p-2 text-xl font-semibold uppercase leading-none text-white transition duration-300 group-hover:bg-[#ffeded] group-hover:text-black">
              Linkbio
            </span>
            <h3 className="font-black">One page for all your links</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;

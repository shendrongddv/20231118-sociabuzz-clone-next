import { Button } from "@/components/ui/button";
import Link from "next/link";

const FindCreators = () => {
  return (
    <section className="bg-gradient-to-r from-[#76cc11] to-[#0080ff] px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* # */}
        <h2 className="text-center text-4xl font-black text-white md:w-3/5 md:text-5xl">
          Looking for creators?
        </h2>

        {/* # */}

        {/* Row */}
        <div className="flex flex-col items-center">
          <Button asChild variant="primary" className="mb-2 rounded-full px-6">
            <Link href="/" aria-label="Sign Up Client">
              Sign Up Client
            </Link>
          </Button>

          <Button
            asChild
            variant="primaryLink"
            size="default"
            className="text-white"
          >
            <Link href="/" aria-label="Login Client">
              Login Client
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FindCreators;

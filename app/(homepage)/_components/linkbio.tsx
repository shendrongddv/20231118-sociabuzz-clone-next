import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Category } from "../data";

const Linkbio = () => {
  return (
    <section className="border-t bg-[#FFEDED] px-4 py-20">
      <div className="container flex flex-col items-center gap-12 text-center">
        {/* Row */}
        <div className="mx-auto flex flex-col items-center gap-2 text-center md:w-1/2">
          <span className="flex h-7 items-center justify-center rounded-full bg-[#e94151] p-2 text-xl font-semibold uppercase leading-none text-white">
            Linkbio
          </span>

          <h2 className="text-2xl font-black md:text-3xl">
            One page for all your links
          </h2>
        </div>

        {/* Row */}
        <ul className="flex w-full flex-col gap-12 md:flex-row md:items-stretch md:justify-center">
          {Category[2]?.features?.map((item) => (
            <li
              key={item.id}
              className="group flex flex-col items-center md:w-3/12"
            >
              {/* # */}
              <figure className="aspect-1 w-4/5">
                <Image
                  src={`/${item.image}`}
                  alt={item.title}
                  width={800}
                  height={800}
                  className="h-full w-auto transition duration-500 group-hover:scale-90"
                />
              </figure>

              {/* # */}
              <h3 className="mt-4 text-lg font-black">{item.title}</h3>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>

        {/* Row */}
        <div className="flex flex-col items-center">
          <Button asChild variant="danger" className="mb-2 rounded-full px-6">
            <Link href="/" aria-label="Buat Halaman">
              Buat Halaman
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Linkbio;

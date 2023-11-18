import Image from "next/image";
import { LogoClouds } from "../data";

const Withdraw = () => {
  return (
    <section className="border-t px-4 py-20">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-4 text-center md:w-3/5">
          <h2 className="bg-gradient-to-r from-[#76cc11] to-[#0080ff] bg-clip-text text-2xl font-black text-transparent">
            Tarik penghasilan ke rekening bank manapun / ewallet
          </h2>

          <Image
            aria-hidden
            src="/withdrawal-money.png"
            alt="Image"
            width={94}
            height={94}
            className="h-24 w-auto"
          />
        </div>

        {/* Row */}
        <ul className="flex flex-wrap items-center justify-center gap-1 md:w-4/5">
          {LogoClouds?.slice(0, 6)?.map((item, index) => (
            <li key={index} className="group">
              <figure className="h-10 rounded-lg p-2 transition duration-300 group-hover:bg-slate-50 md:h-14 md:p-3">
                <Image
                  src={`https://img.logoipsum.com/2${item.image}.svg`}
                  alt={item.image.toString()}
                  width={128}
                  height={128}
                  className="h-full w-auto grayscale transition duration-300 group-hover:scale-105 group-hover:grayscale-0"
                />
              </figure>
            </li>
          ))}
        </ul>

        {/* Row */}
      </div>
    </section>
  );
};

export default Withdraw;

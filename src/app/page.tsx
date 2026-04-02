import RecentPost from "@/components/home/RecentPost";
import ContainerLayout from "@/layouts/ContainerLayout";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { LuArrowRight } from "react-icons/lu";

export function Loader() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-8 h-8 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default function Home() {
  return (
    <ContainerLayout>
      <h1 className=" text-3xl lg:text-5xl xl:text-7xl text-center text-gray-200 tracking-wide leading-snug lg:leading-tight xl:leading-tight">
        <span className=" font-bold">Welcome to TechBlog!</span> <br /> Discover
        Stories and Creative Ideas
      </h1>
      <div className=" py-12 lg:py-24">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* image */}
          <div className=" relative">
            <Image
              src={"/images/about.png"}
              alt="about"
              width={600}
              height={600}
              className=" rounded-2xl border border-white/10"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="eager"
            />
            {/* glow */}
            <div className=" absolute -inset-4 bg-indigo-500/10 blur-3xl -z-10" />
          </div>

          {/* content */}
          <div className=" max-w-xl">
            <span className=" text-sm uppercase tracking-widest text-primary">
              About TechBlog
            </span>
            <h3 className=" mt-3 text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-tight text-white">
              Discover a World of Creativity and Inspiration
            </h3>
            <p className=" mt-6 text-gray-400 leading-relaxed">
              TechBlog is a vibrant online platform that brings together a
              diverse community of tech enthusiasts, developers, and creative
              minds.
            </p>
            <div className=" mt-10">
              <Link
                href="/about"
                className=" inline-flex items-center gap-2 px-7 py-3 bg-primary text-white rounded-full"
              >
                View More
                <LuArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
      <RecentPost />
      </Suspense>
    </ContainerLayout>
  );
}

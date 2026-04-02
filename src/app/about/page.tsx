import ContainerLayout from "@/layouts/ContainerLayout";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <ContainerLayout>
      <div className=" px-4 sm:px-12">
        {/* heading */}
        <div className=" mb-16 text-center">
          <h1 className=" text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About TechBlog
          </h1>
          <p className=" text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A modern tech blog real-world development and thoughful inspiration.
          </p>
        </div>
        {/* content */}
        <div className=" space-y-14">
          {/* section 1 */}
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <Image
              src="/images/about.png"
              alt="about"
              width={600}
              height={600}
              className=" rounded-2xl object-cover"
              loading="eager"
              sizes="(max-width: 768px) 100vw, 50vw"  
            />
            <div className="">
              <h2 className=" text-2xl  font-semibold text-gray-200 mb-4 ">
                Why TechBlog?
              </h2>
              <p className=" text-gray-400 leading-relaxed">
                TechBlog is a platform that provides a space for developers to
                share their knowledge, experiences, and insights with the tech
                community. Whether you&apos;re a seasoned expert or just
                starting.
              </p>
            </div>
          </div>
          {/* section 2 */}
          <div className=" bg-secondary-background rounded-2xl p-8 border border-white/10">
            <h2 className=" text-2xl font-semibold text-gray-200 mb-4">
              What We Write About
            </h2>
            <ul className=" space-y-3 text-gray-400">
              <li className=" flex items-center gap-2">
                <span className=" w-4 h-4 bg-primary rounded-full"></span> Web
                Development
              </li>
              <li className=" flex items-center gap-2">
                <span className=" w-4 h-4 bg-primary rounded-full"></span> Tech
                Trends
              </li>
              <li className=" flex items-center gap-2">
                <span className=" w-4 h-4 bg-primary rounded-full"></span> Tech
                News
              </li>
              <li className=" flex items-center gap-2">
                <span className=" w-4 h-4 bg-primary rounded-full"></span>
                Practical Tips and Guides for Developers
              </li>
            </ul>
          </div>
          {/* section 3 */}
          <div className=" text-center">
            <h2 className=" text-2xl font-semibold text-gray-200 mb-4">
              Built for Developers
            </h2>
            <p className="  text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
              TechBlog is a platform that provides a space for developers to
              share their knowledge, experiences, and insights with the tech
              community. Whether you&apos;re a seasoned expert or just starting.
            </p>
            <div className=" mb-3">
            <Link
              href="/articles"
              className=" bg-primary text-gray-200 px-3 lg:px-5 py-2 rounded-full cursor-pointer  inline-block hover:bg-primary/80"
            >
              Explore
            </Link>
            </div>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
}

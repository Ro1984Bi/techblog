import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { Post } from "@/types/post";

const baseUrl = "http://localhost:3000";

export default async function RecentPost() {
  const res = await fetch(`${baseUrl}/api/posts/recent`, { cache: "no-cache" });

  if (!res.ok) {
    throw new Error("Failed to fetch recent posts");
  }

  const { posts }: { posts: Post[] } = await res.json();

  return (
    <div className=" space-y-2 mb-10">
      <h2 className=" text-white text-xl sm:text-2xl md:text-3xl font-semibold">
        Recent Post
      </h2>
      {/* recent post cards */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => {
          return (
            <div
              className=" group rounded-xl overflow-hidden bg-[#0B0B0B] border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
              key={post.id}
            >
              {/* image */}
              {post.coverImageURL && (
                <div className=" relative h-48 w-full overflow-hidden">
                <Image
                  src={post.coverImageURL || ""}
                  alt={post.title}
                  className=" object-cover transition-transform duration-500 group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"  
                />
                <div className=" absolute inset-0 bg-black/30" />
              </div>
              )}

              {/* content */}
              <div className=" p-5 space-y-3">
                <time className=" text-xs text-gray-400">
                  {
                    new Date(post.createdAt).toLocaleDateString("en-US", {
                     day:'2-digit',
                     month:'short',
                     year:'numeric'
                    })
                  }
                  </time>
                <h3 className=" text-lg font-semibold text-white leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className=" text-sm text-gray-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/articles/${post.slug}`}
                  className=" inline-block text-sm font-medium text-primary hover:underline"
                >
                  Read More
                  <LuArrowRight className=" inline-block ml-1" size={20} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

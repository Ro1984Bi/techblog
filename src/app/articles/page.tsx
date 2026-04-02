"use client";
import { useInfinitePosts } from "@/hooks/usePost";
import ContainerLayout from "@/layouts/ContainerLayout";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import PostCardSkeleton from "@/components/skeletons/PostCardSkeleton";
import { ImSpinner3 } from "react-icons/im";

export default function ArticlesPage() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfinitePosts({ limit: 1 });

  if (status === "pending") {
    return (
      <ContainerLayout>
        <h2 className=" text-xl sm:text-2xl md:text-3xl font-semibold text-white">
          All Articles
        </h2>

        <PostCardSkeleton />
      </ContainerLayout>
    );
  }

  if (status === "error") {
    return (
      <ContainerLayout>
        <p className=" text-gray-300">Something went wrong</p>
      </ContainerLayout>
    );
  }
  const posts = data.pages.flatMap((page) => page.posts) ?? [];

  return (
    <ContainerLayout>
      <div className=" space-y-6">
        <h2 className=" text-xl sm:text-2xl md:text-3xl font-semibold text-white">
          All Articles
        </h2>
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
                    *
                    <div className=" absolute inset-0 bg-black/30" />
                  </div>
                )}

                {/* content */}
                <div className=" p-5 space-y-3">
                  <time className=" text-xs text-gray-400">
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
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

        {hasNextPage && (
          <div className=" flex justify-center mt-10 mb-10">
            <button
              className=" px-8 py-3 rounded-full bg-primary text-white text-sm font-medium border border-primary/10 hover:border-primary/30 hover:text-white transition-all duration-300 cursor-pointer"
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
            >
              {isFetchingNextPage ? (
                <ImSpinner3 className=" animate-spin" size={20} />
              ) : (
                "Load More Articles"
              )}
            </button>
          </div>
        )}
      </div>
    </ContainerLayout>
  );
}

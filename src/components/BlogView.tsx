"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { LuArrowLeft, LuPen } from "react-icons/lu";
import DeleteButton from "./DeleteButton";

interface BlogViewProps {
  postPromise: Promise<{
    id: string;
    title: string;
    content: string;
    excerpt: string;
    createdAt: string | Date;
    slug: string;
    coverImageURL: string;
    author: {
      id: string;
      name: string;
      image: string | null;
    };
  } | null>;
}

export default function BlogView({ postPromise }: BlogViewProps) {
  const post = use(postPromise);
  const { data: session } = authClient.useSession();
  const userId = session?.user.id;

  return (
    <article className=" max-w-3xl mx-auto py-20 px-6">
      {/* article header */}
      <header className=" mb-10">
        <h1 className=" text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          {post?.title}
        </h1>

        <div className=" flex items-center gap-4 text-sm text-gray-400">
          <div className=" relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={post?.author.image || ""}
              alt="author-avatar"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className=" object-cover"
            />
          </div>
          <span>By {post?.author.name}</span>
          <span> - </span>
          <time>
            {new Date(post?.createdAt as string).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </time>
        </div>
      </header>

      <div className=" relative w-full h-55 sm:h-80 lg:h-105 mb-12">
        <Image
          src={post?.coverImageURL || ""}
          alt="cover-image"
          fill
          className=" object-cover rounded-2xl"
        />
      </div>

      {/* article content */}
      {post?.content && (
        <div
          className="max-w-none text-gray-400  leading-relaxed tracking-wide blog-post"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      )}

      <div className=" border-t border-white/10 my-16" />

      {userId === post?.author.id && (
        <div className=" flex items-center justify-end gap-2">
          <Link
            href={`/write/edit/${post?.id}`}
            className=" inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium text-gray-200 border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition"
          >
            <LuPen className=" w-4 h-4 text-primary" />
            Edit
          </Link>
          {post?.id && <DeleteButton postId={post.id} />}
        </div>
      )}

      <div className=" mt-16 ">
        <Link
          href="/articles"
          className="  text-primary hover:text-primary transition-colors"
        >
          <LuArrowLeft className="  inline-block ml-1" size={20} />
          Back to all articles
        </Link>
      </div>
    </article>
  );
}

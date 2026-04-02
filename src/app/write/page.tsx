"use client";

import dynamic from "next/dynamic";
import { useMemo, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

export default function WritePage() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [coverImage, setCoverImage] = useState<null | File>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const config = useMemo(
    () => ({
      placeholder: "Write your article content here",
      theme: "dark",
      style: {
        background: "#121212",
        color: "#FFFFFF",
      },
    }),
    [],
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      if (!title || !content || !excerpt || !coverImage) {
        toast.error("All fields are required", {
          position: "top-right",
          style: {
            background: "#333",
            color: "#fff",
          },
        });
        return;
      }

      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("excerpt", excerpt);
      formData.append("coverImage", coverImage);

      await axios.post("/api/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setContent("");
      setTitle("");
      setExcerpt("");
      setCoverImage(null);

      toast.success("Article created successfully", {
        position: "top-right",
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.error, {
          position: "top-right",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold text-white mb-10">Write an article</h1>

      <form onSubmit={handleSubmit}>
        {/* article title */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-[#0B0B0B] border border-white/10 px-4 py-2 rounded-md mb-4 text-4xl text-white font-bold placeholder:text-gray-400 outline-none"
          placeholder="Article Title"
        />
        {/* excerpt */}

        <textarea
          rows={4}
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="w-full bg-[#0B0B0B] border border-white/10 px-4 py-2 rounded-md mb-4 text-white placeholder:text-gray-400 outline-none resize-none"
          placeholder="Write a short excerpt (1-2 sentences)"
        />
        {/* editor */}

        <div className="mb-10">
          <label className="block text-gray-400 mb-2">Cover Image</label>
          <input
            type="file"
            className="w-full block text-sm text-gray-400 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:mr-4 file:text-white file:cursor-pointer"
            accept="image/*"
            onChange={(e) => setCoverImage(e.target.files?.[0] || null)}
          />
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10">
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            onChange={(newContent) => setContent(newContent)}
          />
        </div>

        <div className=" flex justify-end">
          <button
            type="submit"
            className="bg-primary text-white font-semibold px-6 py-3 mt-4 cursor-pointer rounded-full"
          >
            {isSubmitting ? "Publishing..." : "Publish"}
          </button>
        </div>
      </form>
    </section>
  );
}

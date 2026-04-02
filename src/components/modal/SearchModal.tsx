"use client";
import { useModalStore } from "@/store/useModalStore";
import Modal from "./Modal";
import { useState } from "react";
import { useDebounce } from "@/hooks/usePost";
import { useQuery } from "@tanstack/react-query";
import { searchPosts } from "@/services/post";
import { Post } from "@/types/post";
import { useRouter } from "next/navigation";

export default function SearchModal() {
  const { isSearchOpen, closeSearch } = useModalStore();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  const {
    data: results = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["search-posts", debouncedQuery],
    queryFn: () => searchPosts(debouncedQuery),
    enabled: debouncedQuery.length > 1, // prevent useless request
  });

  const router=useRouter()

  const handleNavigation = (slug: string) => {
    router.push(`/articles/${slug}`);
    closeSearch();
    setQuery("");
    
  }
  return (
    <Modal isOpen={isSearchOpen} onClose={closeSearch}>
      <div className=" space-y-4">
        <input
          type="text"
          className=" w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white text-lg outline-none focus:border-white/50"
          placeholder="Search articles"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className=" max-h-80 overflow-y-auto rounded-xl border border-white/10 divide-y divide-white/10">
          {/* searching... */}
          {isLoading ||
            (isFetching && (
              <div className=" px-4 py-3 text-gray-400 text-sm">
                Searching...
              </div>
            ))}

          {/* no results */}

          {!isLoading && debouncedQuery && results.length === 0 && (
            <div className=" px-4 py-3 text-gray-400 text-sm">
              No results found
            </div>
          )}
          {results.map((result: Post) => {
            return (
              <button
                className=" w-full text-left px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white transition cursor-pointer"
                key={result.id}
                onClick={() => handleNavigation(result.slug)}
              >
                {result.title}
              </button>
            );
          })}
        </div>
      </div>
    </Modal>
  );
}

import { useDeletePost } from "@/hooks/usePost";
import React from "react";
import toast from "react-hot-toast";
import { LuTrash } from "react-icons/lu";

export default function DeleteButton({ postId }: { postId: string }) {
  const { isPending, mutate: deletePostMutation } = useDeletePost();

  function handleDelete() {
    const confirmed = confirm("Are you sure you want to delete this post?");
    if (confirmed) {
      deletePostMutation(postId, {
        onSuccess: () => {
          toast.success("Post deleted successfully", {
            position: "top-right",
            style: {
              background: "#333",
              color: "#fff",
            },
          });
        },
      });
    }
  }
  return (
    <button
      className=" inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium text-gray-200 border border-red-400/20 hover:border-red-400/40 hover:bg-red-400/10 transition cursor-pointer disabled:cursor-not-allowed"
      disabled={isPending}
      onClick={handleDelete}
    >
      <LuTrash className=" w-4 h-4 text-red-400" />
      Delete
    </button>
  );
}

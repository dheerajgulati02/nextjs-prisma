"use client";

import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
const DeletePost = ({ postId }) => {
  const router = useRouter();
  async function handleClick() {
    toast.loading("Deleting post...");
    try {
      await fetch(`/api/post/${postId}`, {
        method: "DELETE",
      });
      toast.success(`Deleted post ${postId}`);
      router.refresh();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div>
        <button
          onClick={handleClick}
          className="border-[1px] border-white p-2 font-semibold my-1"
        >
          Delete Post
        </button>
      </div>
    </>
  );
};

export default DeletePost;

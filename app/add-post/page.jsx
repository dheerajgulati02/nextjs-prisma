"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const submitHandle = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/add-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      router.refresh();
    } catch (e) {
      console.log(e);
    }
    setTitle("");
    setContent("");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <h1 className="text-3xl font-bold">Add Post</h1>
      <Link href={"/"}>View Feed</Link>
      <form action="" onSubmit={submitHandle}>
        <div className="my-3 w-96 flex justify-between">
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter the title here"
            required={true}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="border-[1px] border-white "
            value={title}
          />
        </div>
        <div className="my-3 flex w-96 justify-between">
          <label htmlFor="content">Content : </label>
          <input
            type="text"
            name="content"
            id="content"
            placeholder="Enter the content here"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            className="border-[1px] border-white "
            value={content}
          />
        </div>
        <button
          type="submit"
          className="border-white border-[1px] p-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;

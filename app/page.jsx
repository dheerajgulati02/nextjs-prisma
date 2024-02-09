import prisma from "../lib/prisma";
import Post from "./components/post";
import Link from "next/link";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  console.log(posts, "posts are here");
  return (
    <main className="flex flex-col justify-center items-center h-screen w-screen text-white">
      <h1 className="text-2xl text-center font-semibold">Feed</h1>
      <Link
        href={"/add-post"}
        className="my-3 text-center mx-auto
       w-32"
      >
        Add Post{" "}
      </Link>
      {posts.map((post) => {
        return (
          <Post
            title={post.title}
            content={post.content}
            authorName={post.author.name}
            key={post.id}
            id={post.id}
          />
        );
      })}
    </main>
  );
}

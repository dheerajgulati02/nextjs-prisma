import DeletePost from "./deletepost";
const Post = ({ id, title, content, authorName }) => {
  return (
    <div className="w-80 text-white border-[1px] border-white p-4 mx-2">
      <div className="flex justify-between font-bold">
        <p>{title}</p>
        <p>{authorName}</p>
      </div>
      {content}
      <DeletePost postId={id} />
    </div>
  );
};

export default Post;

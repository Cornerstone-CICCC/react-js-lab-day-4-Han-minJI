import { useNavigate, useParams } from "react-router-dom";
import { usePostStore } from "../../stores/post.store";
import toast from "react-hot-toast";

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const blogs = usePostStore((s) => s.blogs);
  const deletePost = usePostStore((s) => s.deletePost);

  const navigate = useNavigate();

  const post = blogs.find((b) => b.id === id);

  const handleDelete = () => {
    if (!id) return;
    deletePost(id);
    toast.success("Deleted successfully");
  };

  return (
    <div>
      <h2>Detail Page</h2>
      <div>
        <h3>Title: {post?.title} </h3>
        <p>Content: {post?.content}</p>
      </div>
      <button
        onClick={() => {
          navigate(`/posts/${id}/edit`);
        }}
      >
        Edit
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default PostDetail;

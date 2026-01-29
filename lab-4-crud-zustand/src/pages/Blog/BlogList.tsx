import { useNavigate } from "react-router-dom";
import { usePostStore } from "../../stores/post.store";

const BlogList = () => {
  const navigate = useNavigate();
  const blogs = usePostStore((s) => s.blogs);
  const activeBlogs = blogs.filter((p) => !p.isDeleted);

  return (
    <div>
      <h2> Blog List</h2>
      <section>
        {activeBlogs.map((p) => (
          <article
            key={p.id}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <h2>{p.title}</h2>
            <button
              onClick={() => {
                navigate(`/posts/${p.id}`);
              }}
            >
              Details
            </button>
          </article>
        ))}
      </section>
      <button
        onClick={() => {
          navigate(`/posts/new`);
        }}
      >
        Create Button
      </button>
    </div>
  );
};

export default BlogList;

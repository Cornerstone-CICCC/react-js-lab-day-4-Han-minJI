import toast from "react-hot-toast";
import { usePostStore } from "../../stores/post.store";

const DeletedList = () => {
  const blogs = usePostStore((s) => s.blogs);
  const deletedBlogs = blogs.filter((p) => p.isDeleted);
  const recoverPost = usePostStore((s) => s.recoverPost);
  const deletePost = usePostStore((s) => s.deletePermanent);

  const handleRecover = (id: string) => {
    recoverPost(id);
    toast.success("Successfully recovered");
  };

  const handleDeletePermant = (id: string) => {
    deletePost(id);
    toast.success("Deleted permanantely");
  };
  return (
    <div>
      <h2>Deleted Posts</h2>
      <section>
        {deletedBlogs.map((p) => (
          <div
            key={p.id}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <h3>{p.title}</h3>
            <button onClick={() => handleRecover(p.id)}>Recover</button>
            <button onClick={() => handleDeletePermant(p.id)}>
              Delete Permanently
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default DeletedList;

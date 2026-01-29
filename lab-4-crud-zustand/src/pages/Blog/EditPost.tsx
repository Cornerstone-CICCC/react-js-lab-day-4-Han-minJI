import { useState, type SubmitEvent } from "react";
import { usePostStore } from "../../stores/post.store";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const EditPost = () => {
  const { id } = useParams<{ id: string }>();
  const blogs = usePostStore((s) => s.blogs);
  const foundPost = blogs.find((p) => p.id === id);

  const [titleInput, setTitleInput] = useState<string>(foundPost?.title ?? "");
  const [contentInput, setContentIput] = useState<string>(
    foundPost?.content ?? "",
  );

  const editPost = usePostStore((s) => s.editPost);

  const handleEditTodo = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id) return;
    editPost(id, { title: titleInput, content: contentInput });
    toast.success("Successfully Edit");
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleEditTodo}>
        <input
          type="text"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          placeholder="Enter title..."
        />
        <input
          type="text"
          value={contentInput}
          onChange={(e) => setContentIput(e.target.value)}
          placeholder="Enter content..."
        />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditPost;

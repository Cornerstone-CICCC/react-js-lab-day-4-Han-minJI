import { useState, type SubmitEvent } from "react";
import { usePostStore } from "../../stores/post.store";
import toast from "react-hot-toast";

const AddPost = () => {
  const [titleInput, setTitleInput] = useState<string>("");
  const [contentInput, setContentIput] = useState<string>("");

  const addPost = usePostStore((s) => s.addPost);

  const handleAddTodo = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPost({ title: titleInput, content: contentInput });
    toast.success("Successfully Add");
  };

  return (
    <div>
      <h2>Add Post</h2>
      <form onSubmit={handleAddTodo}>
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
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default AddPost;

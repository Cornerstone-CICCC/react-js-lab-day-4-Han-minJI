import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import BlogList from "./pages/Blog/BlogList";
import BlogLayout from "./pages/Blog/BlogLayout";
import PostDetail from "./pages/Blog/PostDetail";
import AddPost from "./pages/Blog/AddPost";
import EditPost from "./pages/Blog/EditPost";
import DeletedList from "./pages/Blog/DeletedList";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="posts" element={<BlogLayout />}>
              <Route index element={<BlogList />} />
              <Route path="new" element={<AddPost />} />
              <Route path=":id/edit" element={<EditPost />} />

              <Route path=":id" element={<PostDetail />} />
            </Route>
            <Route path="trash" element={<DeletedList />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster />
    </>
  );
};

export default App;

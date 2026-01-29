import { create } from "zustand";
import { v4 as uuid } from "uuid";

export interface Post {
  id: string;
  title: string;
  content: string;
  isDeleted: boolean;
}

type State = {
  blogs: Post[];
};

type Action = {
  addPost: (value: Partial<Post>) => void;
  deletePost: (id: string) => void;
  recoverPost: (id: string) => void;
  editPost: (id: string, value: Partial<Post>) => void;
  deletePermanent: (id: string) => void;
};

export const usePostStore = create<State & Action>((set) => ({
  blogs: [{ id: uuid(), title: "Test", content: "Test", isDeleted: false }],
  addPost: (value) =>
    set((state) => ({
      blogs: [
        ...state.blogs,
        {
          id: uuid(),
          title: value.title ?? "",
          content: value.content ?? "",
          isDeleted: false,
        },
      ],
    })),
  deletePost: (id) =>
    set((state) => ({
      blogs: state.blogs.map((p) =>
        p.id === id ? { ...p, isDeleted: true } : p,
      ),
    })),
  recoverPost: (id) =>
    set((state) => ({
      blogs: state.blogs.map((p) =>
        p.id === id ? { ...p, isDeleted: false } : p,
      ),
    })),
  deletePermanent: (id) =>
    set((state) => ({
      blogs: state.blogs.filter((p) => p.id !== id),
    })),
  editPost: (id, value) =>
    set((state) => ({
      blogs: state.blogs.map((p) =>
        p.id === id
          ? {
              ...p,
              title: value.title ?? p.title,
              content: value.content ?? p.content,
              isDeleted: value.isDeleted ?? p.isDeleted,
            }
          : p,
      ),
    })),
}));

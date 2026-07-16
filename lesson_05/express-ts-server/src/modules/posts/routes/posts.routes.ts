import { Router } from "express";
import { v7 } from "uuid";

import { Post } from "../posts.types";

// С помощью router в дальнейшем мы сможем прописывать
// логику ответов на запросы (router.get())
const router = Router();

// Пока мы будем хранить данные локально (без БД).
// Мы сможем использовать любые методы и они будут работать, но
// при перезагрузке сервера данные (новые) будут потеряны
const posts: Post[] = [
  { id: v7(), title: "Cloudy weather", text: "It is dark again" },
  { id: v7(), title: "Job", text: "I got new job!" },
];

// GET /posts
// Так как в index.ts мы используем url /posts, то в данном
// файле мы можем не указывать каждый раз /posts, а указывать просто /
router.get("/", (_req, res)=>{
    res.status(200).json(posts)
})

// GET /posts/:id (получение конкретного поста по id)
router.get("/:id", (req, res) => {
  // Получаем id из параметров запроса - path params
  const { id } = req.params; // req.params - объект, в котором хранятся все path params
  // destructuring assignment - деструктуризация объекта req.params, чтобы получить id из параметров запроса

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ message: `Post with id ${id} not found` });
  }

  res.status(200).json(post);
});

// POST /posts (создание нового поста)
// {title: string, text: string}
router.post("/", (req, res) => {
  const { title, text } = req.body;

  if (!title || !text) {
    return res.status(400).json({ error: "BAD REQUEST" });
  }

  const newPost: Post = {
    id: v7(),
    title,
    text
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// PATCH /posts/:id
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { title, text } = req.body;
  const post = posts.find((post) => post.id === id);
  if (!post) {
    res.status(404).json({ error: `Post with id ${id} not found` });
    throw new Error("Not found");
  }
  if (!title && !text) {
    res.status(400).json({ error: "Bad request. No title and text" });
  }
  if (title) {
    post.title = title;
  }
  if (text) {
    post.text = text;
  }
  res.status(200).json(post)
});

// DELETE /posts/:id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === id);
  if (!post) {
    res.status(404).json({ error: `Post with id ${id} not found` });
    throw new Error("Not found");
  }
  const indexOfPost = posts.findIndex((post)=> post.id === id);
  posts.splice(indexOfPost, 1);
  res.status(200).json(post);
});

export default router;
import { Router } from "express";
import { v7 } from "uuid";
import { User } from "../users.types";

const router = Router();

const users: User[] = [
  {
    id: v7(),
    name: "John Doe",
    email: "john@example.com",
    password: "password",
    role: "admin",
    createdAt: new Date(),
  },
  {
    id: v7(),
    name: "Jane Smith",
    email: "jane@example.com",
    password: "password",
    role: "user",
    createdAt: new Date(),
  },
];

router.get("/", (_req, res) => {
    res.status(200).json(users);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.status(200).json(user);
});

router.post("/", (req, res) => {
  const { name, email, password, role } = req.body;

  const newUser: User = {
    id: v7(),
    name,
    email,
    password,
    role,
    createdAt: new Date(),
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;

  if (role !== undefined && role !== "user" && role !== "admin") {
  return res.status(400).json({
    message: "Role must be 'user' or 'admin'",
  });
}

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  users[userIndex] = {
  ...users[userIndex],
  name: name ?? users[userIndex].name,
  email: email ?? users[userIndex].email,
  password: password ?? users[userIndex].password,
  role: role ?? users[userIndex].role,
};

  res.status(200).json(users[userIndex]);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  users.splice(userIndex, 1);

  res.status(200).json({
    message: "User deleted successfully",
  });
});

export default router;
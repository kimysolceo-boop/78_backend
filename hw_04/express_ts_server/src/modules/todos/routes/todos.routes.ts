import { Router } from "express";
import { v7 } from "uuid";

import { Todo } from "../todos.types";

const router = Router();

const todos: Todo[] = [
    {
        id: v7(),
        title: "Wash dishes",
        content: "Don't forget to wash the dishes",
        status: false
    },
    {
        id: v7(),
        title: "Take a pill",
        content: "Remember to take your medication until 6:00 PM",
        status: false
    }
];

router.get("/", (_req, res) => {
    res.status(200).json(todos);
});

export default router;
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const todos = prisma.todo.findMany();
    return res.status(200).json(todos);
  }

  if (req.method === "POST") {
    const { text } = req.body;
    const todo = prisma.todo.create({
      data: {
        text,
      },
    });
    return res.status(200).json(todo);
  }

  if (req.method === "PUT") {
    const { id, text } = req.body;
    const todo = prisma.todo.update({
      where: {
        id,
      },
      data: {
        text,
      },
    });
    return res.status(200).json(todo);
  }

  if (req.method === "DELETE") {
    const { id } = req.body;
    const todo = prisma.todo.delete({
      where: {
        id,
      },
    });
    return res.status(200).json(todo);
  }
}

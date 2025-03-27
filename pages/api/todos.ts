import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const todos = await prisma.todo.findMany();
    return res.status(200).json(todos);
  }

  if (req.method === "POST") {
    const { text } = req.body;
    const todo = await prisma.todo.create({
      data: {
        text,
      },
    });
    return res.status(200).json(todo);
  }

  if (req.method === "PUT") {
    const { id } = req.query;
    const { text } = req.body;
    const todo = await prisma.todo.update({
      where: {
        id: String(id)
      },
      data: {
        text
      }
    });
    return res.status(200).json(todo);
  }

  if (req.method === "DELETE") {
    const { id } = req.query;
    const todo = await prisma.todo.delete({
      where: {
        id: String(id)
      }
    });
    return res.status(200).json(todo);
  }
}

import { Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function homeHandeller(req: Request, res: Response) {
  const users = await prisma.user.findMany();
  res.json(users);
}

async function createUser(req: Request, res: Response) {
  const user = await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
    },
  });

  res.json(user);
}

async function updateUser(req: Request, res: Response) {
  await prisma.user.update({
    where: {
      id: req.body.id,
    },
    data: {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
    },
  });

  res.json({ patched: true });
}

async function deleteUser(req: Request, res: Response) {
  await prisma.user.delete({
    where: {
      id: req.body.id,
    },
  });

  res.json({ deleted: true, id: req.body.id });
}

export { homeHandeller, createUser, deleteUser, updateUser };

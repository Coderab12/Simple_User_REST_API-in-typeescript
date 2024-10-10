"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeHandeller = homeHandeller;
exports.createUser = createUser;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function homeHandeller(req, res) {
    const users = await prisma.user.findMany();
    res.json(users);
}
async function createUser(req, res) {
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
async function updateUser(req, res) {
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
async function deleteUser(req, res) {
    await prisma.user.delete({
        where: {
            id: req.body.id,
        },
    });
    res.json({ deleted: true, id: req.body.id });
}

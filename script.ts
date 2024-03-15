import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const poll = await prisma.poll.create({ data: { name: 'My first poll', votes: JSON.stringify({ Javascript: 0, lua: 0, house: 0 }), topics: 'Javascript,lua,house', createdAt: Date.now() } });

console.log(await prisma.poll.findMany());

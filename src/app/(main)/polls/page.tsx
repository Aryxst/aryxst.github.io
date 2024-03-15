import Image from 'next/image';
import { PrismaClient } from '@prisma/client';
import markdown from '@/lib/markdown';
const db = new PrismaClient();
export default async function Home() {
 const polls = await db.poll.findMany();
 const renderedPolls = Promise.all(
  polls.map(async (poll, i) => (
   <article key={i}>
    <span>{poll.name}</span>
    <span>{poll.createdAt}</span>
    <span>{JSON.stringify(poll.votes)}</span>
    <span>{JSON.stringify(poll.options)}</span>
    <span>{poll.thumbnail}</span>
    <span dangerouslySetInnerHTML={{ __html: await markdown(poll.markdown) }}></span>
   </article>
  )),
 );
 return (
  <main className='flex min-h-screen'>
   <div>{renderedPolls}</div>
  </main>
 );
}

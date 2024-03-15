import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';

export default async (markdown: string) =>
 String(
  await unified()
   .use(remarkParse) // Convert into markdown AST
   .use(remarkRehype) // Transform to HTML AST
   .use(rehypeSanitize) // Sanitize HTML input
   .use(rehypeStringify) // Convert AST into serialized HTML
   .process(markdown),
 );

'use client'
/* eslint-disable react/no-children-prop */
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import remarkMath from 'remark-math';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/synthwave84';
import remarkCodeTitles from "remark-flexible-code-titles";
import rehypeStringify from "rehype-stringify";
import remarkFlexibleContainers from "remark-flexible-containers";
import remarkFlexibleMarkers from "remark-flexible-markers";
import remarkFlexibleParagraphs from "remark-flexible-paragraphs";
import remarkBreaks from 'remark-breaks'


export const MarkdownPreview = ({ markdown }: { markdown: string }) => {
  return (
    <ReactMarkdown
      skipHtml={true}
      remarkPlugins={[remarkBreaks, remarkFlexibleParagraphs, remarkFlexibleMarkers, remarkFlexibleContainers, remarkCodeTitles, remarkGfm, remarkMath, remarkToc, ]}
      rehypePlugins={[rehypeStringify,rehypeRaw, rehypeKatex, rehypeSlug,]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            
            <SyntaxHighlighter
              wrapLongLines={true}
              children={String(children).replace(/\n$/, '')}
              style={style as any}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};

interface MarkdownHTML {
  content: string
}
export const MarkdownHTML = (props: MarkdownHTML) => {
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]} children={props.content} />

  )
}
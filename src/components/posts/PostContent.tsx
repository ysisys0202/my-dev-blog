import dynamic from "next/dynamic";
import { css } from "@emotion/react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostDetailType } from "@/types/post";
import { colorVars } from "@/constants/cssVariables";
import { media } from "@/constants/breakPoints";
import PostHeader from "@/components/posts/PostHeader";
import { colors } from "@/constants";
import { CalloutProps } from "@/components/posts/Callout";

const PostImage = dynamic(() => import("@/components/posts/PostImage"));
const Spacing = dynamic(() => import("@/components/common/Spacing"));
const Typography = dynamic(() => import("@/components/common/Typography"));
const Codeblock = dynamic(() => import("@/components/posts/Codeblock"));
const Callout = dynamic(() => import("@/components/posts/Callout"));

type Props = {
  post: PostDetailType;
  mdx: MDXRemoteSerializeResult;
};

const PostContent = ({ post, mdx }: Props) => {
  const { title, createdAt, thumbNailImage, subTitle, category } = post;
  const { compiledSource, scope, frontmatter } = mdx;
  console.log(post);
  const postComponents = {
    h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <Typography variant="h1" element="h2" color={colorVars.primary}>
        {props.children}
      </Typography>
    ),
    h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <Typography variant="h2" element="h3" color={colorVars.primary}>
        {props.children}
      </Typography>
    ),
    h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
      <Typography variant="h3" element="h4" color={colorVars.primary}>
        {props.children}
      </Typography>
    ),
    code: (props: React.HTMLProps<HTMLPreElement>) => {
      const { children, className } = props;
      const language = className?.split("-")[1];
      return (
        <Codeblock language={language || "javascript"}>
          {children as string}
        </Codeblock>
      );
    },
    Callout: ({ children, ...rest }: CalloutProps) => (
      //@ts-ignore
      <Callout {...rest}>{children.props.children}</Callout>
    ),
    PostImage,
    Spacing,
  };

  return (
    <article css={S.self}>
      <PostHeader
        title={title}
        createdAt={createdAt}
        headerImage={thumbNailImage}
        subTitle={subTitle}
        category={category}
      />
      <div css={S.markdown}>
        <MDXRemote
          compiledSource={compiledSource}
          scope={{ ...scope, ...frontmatter }}
          components={postComponents}
          frontmatter={frontmatter}
        />
      </div>
    </article>
  );
};

const S = {
  self: css`
    padding: 24px;
    max-width: 860px;
    @media ${media.md} {
      margin: 32px;
    }
  `,
  markdown: css`
    word-break: keep-all;
    p {
      white-space: pre-wrap;
    }
    img {
      width: 100%;
      max-width: 400px;
    }
    table {
      background-color: ${colorVars.backgroundGlobal};
      thead {
        border-bottom: 2px solid ${colorVars.border};
      }
      th,
      td {
        padding: 10px 16px;
        border: 1px solid ${colorVars.border};
      }
    }
    ol {
      list-style: decimal;
    }
    ul {
      list-style: disc;
    }
    li {
      margin-left: 16px;
    }
    blockquote {
      position: relative;
      padding: 12px 36px;
      background-color: ${colorVars.backgroundElement};
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 16px;
        transform: translateY(-50%);
        width: 3px;
        height: 85%;
        border-radius: 2px;
        background-color: ${colors.green[100]};
      }
    }
  `,
};

export default PostContent;

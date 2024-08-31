import Link from "next/link";
import { SerializedStyles, css } from "@emotion/react";
import PostCardBox from "@/components/posts/postCard/PostCardBox";
import PostCardThumbnail from "@/components/posts/postCard/PostCardThumbnail";
import PostCardContent from "@/components/posts/postCard/PostCardContent";
import { PostItem } from "@/types/post";
import { media } from "@/constants/breakPoints";
import { HTMLAttributes } from "react";

type Props = {
  propsCss?: SerializedStyles;
  className?: string;
} & PostItem &
  HTMLAttributes<HTMLElement>;

const PostCard = ({
  title,
  category,
  createdAt,
  intro,
  thumbnail,
  slug,
  propsCss,
  ...rest
}: Props) => {
  const styles = [S.self];
  propsCss && styles.push(propsCss);
  return (
    <PostCardBox css={styles} {...rest}>
      <Link href={`/posts/${category}/${slug}`}>
        <PostCardThumbnail
          thumbnail={thumbnail}
          title={title}
          width={300}
          height={200}
          className="thumbnail"
        />
        <PostCardContent
          title={title}
          description={intro}
          category={category}
          createdAt={createdAt}
          propsCss={S.content}
        />
      </Link>
    </PostCardBox>
  );
};
const S = {
  self: css`
    padding: 16px 16px 24px;
    @media ${media.md} {
      padding: 24px 24px 32px;
    }
  `,
  content: css`
    margin-top: 16px;
    @media ${media.md} {
      margin-top: 12px;
    }
  `,
};

export default PostCard;

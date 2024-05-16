import Link from "next/link";
import PostShow from "@/components/posts/post-show";
import CommentList from "@/components/comments/comment-list";
import CommentCreateForm from "@/components/comments/comment-create-form";
import paths from "@/commons/paths";
import fetchCommentsByPostId from "@/db/queries/comments";
import { Suspense } from "react";
import PostShowLoading from "@/components/posts/post-show-loading";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

const PostShowPage = ({ params }: PostShowPageProps) => {
  const { slug, postId } = params;

  return (
    <div className="space-y-3">
      <Link
        className="underline decoration-solid"
        href={paths.topicShowPath(slug)}
      >
        {"< "}Back to {decodeURIComponent(slug)}
      </Link>
      <Suspense fallback={<PostShowLoading />}>
        <PostShow postId={postId} />
      </Suspense>
      <CommentCreateForm postId={postId} startOpen />
      <CommentList postId={postId} />
    </div>
  );
};

export default PostShowPage;

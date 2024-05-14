import PostCreateForm from "@/components/posts/post-create-form";
import { PostList } from "@/components/posts/post-list";
import { fetchPostsByTopicSlug } from "@/db/queries/posts";

interface TopicShowPageProps {
  params: {
    slug: string;
  };
}

const TopicShowPage = ({ params }: TopicShowPageProps) => {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{decodedSlug}</h1>
        <PostList fetchData={() => fetchPostsByTopicSlug(decodedSlug)}/>
      </div>

      <div>
        <PostCreateForm slug={decodedSlug}/>
      </div>
    </div>
  );
};

export default TopicShowPage;

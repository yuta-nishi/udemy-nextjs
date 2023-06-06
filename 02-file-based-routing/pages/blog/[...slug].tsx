import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const BlogPostsPage: NextPage = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Blog Posts Page</h1>
    </div>
  );
};

export default BlogPostsPage;

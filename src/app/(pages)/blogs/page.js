import React from 'react';
import BlogsContent from '../../components/blogs/BlogsContent'

const blogsPageData = async () => {
  const version = process.env.VERSION;
  const token = process.env.TOKEN;
  const url = `https://api-us.storyblok.com/v2/cdn/stories/blogs/blogs-page?version=${version}&token=${token}&cv=1709200356`
 
  let req = await fetch(url, { cache: "no-store" })

  const dataBlogs = await req.json();
  return dataBlogs.story.content;
}

const page = async () => {
  const dataBlogs = await blogsPageData ();
  return (
    <div
        className="h-[484px] flex items-center justify-center"
        style={{ backgroundImage: `url('/background/topography.svg')` }}
      >
      <BlogsContent data={dataBlogs}/>
    </div>
  );
};

export default page;
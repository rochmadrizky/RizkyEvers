import React from 'react';
import BlogsContent from '../../components/blogs/BlogsContent'
import IsiContent from '../../components/blogs/IsiContent';

const blogsPageData = async () => {
  const version = "publish";
  const token = "WosQNewr1kQ6mqsQVQOsbQtt";
  const url = `https://api-us.storyblok.com/v2/cdn/stories/blogs/blogs-page?version=${version}&token=${token}&cv=1709544590`
 
  let req = await fetch(url, { cache: "no-store" })

  const dataBlogs = await req.json();
  return dataBlogs.story.content;
}

const page = async () => {
  const dataBlogs = await blogsPageData ();
  return (
    <div>
    <div
        className="h-[484px] flex items-center justify-center"
        style={{ backgroundImage: `url('/background/topography.svg')` }}
      >
      <BlogsContent data={dataBlogs.Salam[0]}/>
    </div>

    <div className='py-12'>
      <IsiContent data={dataBlogs.Aktivitas[0]}/>
    </div>
    </div>
  );
};

export default page;
import React from 'react';
import AboutsContent from '../../components/abouts/AboutsContent';

const aboutsPageData = async () => {
  const version = process.env.VERSION;
  const token = process.env.TOKEN;
  const url = `https://api-us.storyblok.com/v2/cdn/stories/about/about-page?version=${version}&token=${token}&cv=1709201484`
 
  let req = await fetch(url, { cache: "no-store" })

  const dataAbouts = await req.json();
  return dataAbouts.story.content;
}

const page = async () => {
  const dataAbouts = await aboutsPageData();
  return (
    <div
        className="h-[484px] flex items-center justify-center"
        style={{ backgroundImage: `url('/background/topography.svg')` }}
      >
       <AboutsContent data={dataAbouts}/>
    </div>
  );
};

export default page;
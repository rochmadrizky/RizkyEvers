import React from 'react';
import AboutsContent from '../../components/abouts/AboutsContent';
import IsiContent from '../../components/abouts/IsiContent';

const aboutsPageData = async () => {
  const version = process.env.VERSION;
  const token = process.env.TOKEN;
  const url = `https://api-us.storyblok.com/v2/cdn/stories/about/about-page?version=${version}&token=${token}&cv=1709546704`
 
  let req = await fetch(url, { cache: "no-store" })

  const dataAbouts = await req.json();
  return dataAbouts.story.content;
}

const page = async () => {
  const dataAbouts = await aboutsPageData();
  return (
    <div>
    <div
        className="h-[484px] flex items-center justify-center"
        style={{ backgroundImage: `url('/background/topography.svg')` }}
      >
       <AboutsContent data={dataAbouts.Salam[0]}/>
    </div>

    <div className='py-12'>
      <IsiContent data={dataAbouts.Aktivites[0]}/>
    </div>
    </div>
  );
};

export default page;
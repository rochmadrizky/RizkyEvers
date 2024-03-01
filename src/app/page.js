import HomeContent from "./components/home/HomeContent";
import IsiContent from "./components/home/IsiContent";

const homePageData = async () => {
  const version = process.env.VERSION;
  const token = process.env.TOKEN;
  const url = `https://api-us.storyblok.com/v2/cdn/stories/home/home-page?version=${version}&token=${token}&cv=1709293685`
 
  let req = await fetch(url, { cache: "no-store" })

  const dataHome = await req.json();
  const { Salam, Grid } = dataHome.story.content;
  return {
    hero: Salam[0],
    kolom: Grid[0],
  }
  
}

export default async function Home() {
  const dataHome = await homePageData();
  
  return (
    <div>
      <div
        className="h-[484px] flex items-center justify-center"
        style={{ backgroundImage: `url('/background/topography.svg')` }}
      >
        <HomeContent data={dataHome.hero} />
      </div>

      <div className="py-12">
        <IsiContent data={dataHome.kolom}/>
      </div>
    </div>
  );
}

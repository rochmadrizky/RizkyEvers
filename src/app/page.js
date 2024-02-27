import HomeContent from "./components/home/HomeContent";
import IsiContent from "./components/home/IsiContent";

export default function Home() {
  return (
    <div>
      <div
        className="h-[484px] flex items-center justify-center"
        style={{ backgroundImage: `url('/background/topography.svg')` }}
      >
        <HomeContent />
      </div>

      <div className="py-12">
        <IsiContent/>
      </div>
    </div>
  );
}

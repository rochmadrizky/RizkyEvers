import React from "react";

const IsiContent = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h4>{data.Judul}</h4>
      <p>{data.Deskripsi}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.Grid.map((e) => (
          <div
            key={e.Judul}
            className="bg-gray-100 border-t-2 border-b-2 border-blue-500 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-center">
              <div className="p-8">
                <div className="flex flex-col items-center justify-center">
                  <div className="text-center">
                    <h1 className="font-prefix text-xl">{e.Judul}</h1>
                    <p className="font-description py-2">{e.Deskripsi}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IsiContent;

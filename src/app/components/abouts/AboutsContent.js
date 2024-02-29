import React from 'react';

const AboutsContent = ({data}) => {
  const { Judul, Deskripsi } = data;
    return (
        <div className="max-w-4xl mx-auto flex items-center justify-center">
            <div className="p-4">
                <div className="text-center">
                <h1 className="font-prefix text-2xl">{Judul}</h1>
              
              <p className="font-description text-xl">
                {Deskripsi}
              </p>
                </div>
            </div>
        </div>
    );
};

export default AboutsContent;
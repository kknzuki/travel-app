import React from 'react';

const words = [
  {
    id: 1,
    title: 'Fine Dining',
    heading: 'Get the best cuisine available',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, facere voluptates, ipsa possimus repellendus cum quaerat, nam quo',
  },
  {
    id: 2,
    title: 'Date night',
    heading: 'hidden getaway for your spouse available',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, facere voluptates, ipsa possimus repellendus cum quaerat, nam quo',
  },
  {
    id: 3,
    title: 'Adventures',
    heading: 'Family fun weekenders',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, facere voluptates, ipsa possimus repellendus cum quaerat, nam quo',
  },
];

const Grid = () => {
  return (
    <div className='grid gap-y-2 gap-x-10 pt-4 lg:pt-12 md:grid-cols-3 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12 mx-auto p-4'>
      {words.map((word) => (
        <div key={word.id} className='border border-r-red-700 p-2 text-center'>
          <button className='bg-green-600 p-2 rounded-xl m-2 text-white'>
            {word.title}
          </button>
          <h3 className='font-bold capitalize mm-2'>{word.heading}</h3>
          <p>{word.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Grid;

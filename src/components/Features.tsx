import Image from 'next/image';
import {
  BsCalendar3,
  BsFillCursorFill,
  BsFillChatFill,
  BsFillHouseDoorFill,
} from 'react-icons/bs';

const datas = [
  {
    id: '1',
    title: 'Set an adventure',
    icon: 'BsCalendar3',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam vero atque pariatur.',
  },
  {
    id: '2',
    title: 'Set an adventure',
    icon: 'BsFillChatFill',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam vero atque pariatur.',
  },
  {
    id: '3',
    title: 'Set an adventure',
    icon: 'BsFillCheckSquare',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam vero atque pariatur.',
  },
  {
    id: '4',
    title: 'Set an adventure',
    icon: 'BsFillCursorFill',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam vero atque pariatur.',
  },
  {
    id: '1',
    title: 'Set an adventure',
    icon: 'BsFillHouseDoorFill',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam vero atque pariatur.',
  },
];

const Features = () => {
  return (
    <div className='my-2'>
      <h1 className='text-2xl md:text-4xl uppercase p-2 font-bold'>
        Our Features
      </h1>
      {/* split divs */}
      <div>
        <Image
          src='/phone.png'
          alt=''
          width={200}
          height={400}
          className='xs:hidden rotate-45 p-2 text-end'
        />
        <article>
          <div>
            {datas.map((data) => (
              <div key={data.id}>
               
                <h2> {data.title}</h2>
                <p>{data.desc}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default Features;

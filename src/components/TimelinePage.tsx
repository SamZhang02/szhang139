import { useState, useEffect } from 'react';
import timelineInfo from '../timelineInfo.json';

const MEDIAPATH = process.env.PUBLIC_URL + "/assets/"

export function TimelinePage() {
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [isShiftDown, setIsShiftDown] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseInside(true);
  };

  const handleMouseLeave = () => {
    setIsMouseInside(false);
  };

  const handleWheel = (event: any) => {
    if (isMouseInside && isShiftDown) {
      event.preventDefault();
      // Perform horizontal scrolling logic
    }
  };

  return (
    <div
      className={`h-screen py-32 ${isMouseInside ? 'scroll-active' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onWheel={handleWheel}
      style={{
        overflowX: 'hidden',
      }}
    >
      <div
        className='w-full h-full bg-neutral-700 shadow-[inset_0_-2px_10px_rgba(0,0,0,0.6)] justify-center flex whitespace-nowrap scrollbar-hide no-scrollbar align-middle overflow-auto'
      >
        <div className='my-auto w-full' >
          <Timeline />
        </div>
      </div>
    </div>
  );
}
function Timeline() {
  return (
    <div className='flex flex-row w-fit'>
      <div className='w-fit h-4 bg-neutral-800 mt-2 flex items-center ml-32 rounded-full'>
        {timelineInfo.map((item, index) => {
          return (
            <div key={index} className='flex items-center'>
              <TimelineItem info={item} position={index % 2 === 0 ? 'top' : 'bottom'} />
            </div>
          )
        })}
      </div>
      <DottedLine />
    </div>
  );
}

function TimelineItem({ info, position }: { info: any, position: 'top' | 'bottom' }) {
  return (
    <div className='flex-col items-center justify-center'>
      {position === 'top' ?
        <>
          <div className={`text-neutral-100`}>{info.date}</div>
          <div className={`text-neutral-100`}>{info.role} at {info.company}</div>
          <a href={info.companyLink} className='max-w-fit inline-block'>
            <img src={MEDIAPATH + info.imagePath} className='mx-auto my-5' style={{ height: `${70}px`, width: 'auto' }} />
          </a>
          <div className={`w-3 h-20 bg-neutral-800 mx-auto`} />
          <div className='rounded-full w-7 h-7 bg-neutral-100 border border-neutral-800 z-20 my-auto mb-60 mx-auto' />
        </>
        :
        <>
          <div className='rounded-full w-7 h-7 bg-neutral-100 border border-neutral-800 z-20 my-auto mt-60 mx-auto' />
          <div className={`w-3 h-20 bg-neutral-800 mx-auto`} />
          <div className={`text-neutral-100`}>{info.date}</div>
          <div className={`text-neutral-100`}>{info.role} at {info.company}</div>
          <a href={info.companyLink} className='max-w-fit inline-block'>
            <img src={MEDIAPATH + info.imagePath} className='mx-auto my-5' style={{ height: `${70}px`, width: 'auto' }} ></img>
          </a>
        </>
      }
    </div >
  );
}

function DottedLine() {
  return (<>
    <div className='rounded-xl w-16 h-4 bg-neutral-800 mt-2 flex items-center space-x-96 ml-2'></div>
    <div className='rounded-xl w-12 h-4 bg-neutral-800 mt-2 flex items-center space-x-96 ml-2'></div>
    <div className='rounded-xl w-8 h-4 bg-neutral-800 mt-2 flex items-center space-x-96 ml-2'></div>
    <div className='rounded-xl w-4 h-4 bg-neutral-800 mt-2 flex items-center space-x-96 ml-2'></div>
    <div className='rounded-xl w-3 h-4 bg-neutral-800 mt-2 flex items-center space-x-96 ml-2 mr-5'></div>
  </>
  )
}

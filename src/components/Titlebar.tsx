import React, { ReactNode } from 'react';
import Image from 'next/image';

const Titlebar = () => {
  return (
   <div className='wrapper w-full h-[1173px] md:h-[175px] '>
    <div className=' h-full max-w-[1280px] flex flex-col md:flex-row justify-between items-center bg-slate-50 py-28 md:pr-10 '>
            <Image src="/fa-brands-1.png" alt="" width={149} height={50} />
            <Image src="/col-md-2.png" alt="" width={146} height={99} />
            <Image src="/col-md-2 (1).png" alt="" width={152} height={109} />
            <Image src="/col-md-2 (2).png" alt="" width={149} height={60} />
            <Image src="/col-md-2 (3).png" alt="" width={151} height={92} />
            <Image src="/col-md-2 (4).png" alt="" width={151} height={142} />
            </div>

</div>

)
}

export default Titlebar

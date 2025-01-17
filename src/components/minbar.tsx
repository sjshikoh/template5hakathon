
import Image from 'next/image';

const Minbar = () => {
  return (
    <div className='wrapper h-[216px] md:h-[98px]'>
        <div className='h-full flex flex-col items-center md:flex-row md:justify-between'>
            <p>Showing all 12 results
            </p>
            <div className='w-[177px] h-[46px] flex flex-col-3 justify-center items-center gap-3'>
                <p className='font-bold text-sm mr-2'>Views</p>
                <button className='w-[46px] h-[46px]'><Image src="/btn-sm-24.png" alt="" width={26} height={26} /></button>
                <button className='w-[46px] h-[46px]'><Image src="/icon.png" alt="" width={16} height={16} /></button>
            </div>
            <div className='w-[252px] h-[50] gap-[15px] flex'>
                <button><Image src="/select.png" alt="" width={141} height={50} /></button>
                <button className='w-[94px] h-[50px] text-white rounded-sm bg-[#23A6F0]'>Filter</button>

            </div>
        </div>
      
    </div>
  )
}

export default Minbar
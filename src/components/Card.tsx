import React, {ReactNode} from 'react'


const Card = ({children}:{children:ReactNode}) => {
  return (
    <div className='w-full h-auto flex justify-center items-center'>
        <div className='p-4 rounded-lg shadow-md bg-white '>

      {children}
        </div>
    </div>
  )
}

export default Card
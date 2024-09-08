import React from 'react'
import Image from "next/image";


const HeaderImage = () => {
  return (
    <div className='d-flex justify-content-center'>
        <Image src="/images/my-profile-img.jpg" alt="profile image" width={120} height={120} className='mt-4 rounded-5' />
    </div>
  )
}

export default HeaderImage
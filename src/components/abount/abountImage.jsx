import Image from 'next/image'
import React from 'react'

const AbountImage = () => {
  return (
    <div className='d-flex justify-content-center'>
        <Image src="/images/my-profile-img.jpg" alt="profile image" width={350} height={350} />
    </div>
  )
}

export default AbountImage
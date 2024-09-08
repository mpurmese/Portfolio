import React from 'react'
import { BsEmojiSmile, BsFillJournalBookmarkFill, BsHeadset   } from "react-icons/bs";


const AbountIcons = () => {
  return (
    <div className='d-flex'>
    <div className='col d-flex flex-column ms-2 me-2'>
        <div className='d-flex align-items-center fs-1 mb-2'>
            <BsEmojiSmile className='text-custom' />
            <span className='ms-2'>0</span>
        </div>
        <div>
            <h5>Mutlu Müşteriler</h5>
            <p>(Projelerimin Hepsini Kendimi Geliştirmek İçin Yaptım, Hiçbir Firmaya Satmadım)</p>
        </div>
    </div>

    <div className='col d-flex flex-column ms-2 me-2'>
        <div className='d-flex align-items-center fs-1 mb-2'>
            <BsFillJournalBookmarkFill className='text-custom' />
            <span className='ms-2'>5</span>
        </div>
        <div>
            <h5>Proje</h5>
        </div>
    </div>

    <div className='col d-flex flex-column ms-2 me-2'>
        <div className='d-flex align-items-center fs-1 mb-2'>
            <BsHeadset className='text-custom' />
            <span className='ms-2'>7/24</span>
        </div>
        <div>
            <h5>Destek Saatleri</h5>
        </div>
    </div>
    </div>

  )
}

export default AbountIcons
import Image from 'next/image'
import React from 'react'

const Loarder = () => {
    return (
        <div className='bg-black h-screen w-full flex flex-col justify-center items-center'>
            <span className="loader2">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="w-[120px] h-[120px] object-fill"
                />
                Wedding Biodata
            </span>
        </div>
    )
}

export default Loarder
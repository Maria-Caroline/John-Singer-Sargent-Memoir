import React from 'react'
import Link from 'next/link';

function header() {
    return (
        <div className="sticky top-0 z-50 max-w max-h-[10vh] bg-brown text-white p-8 flex justify-between items-center">
            <h2 className='text-2xl font-medium'>John Singer Sargent: A Memoir</h2>
            <div className="flex gap-10 font-[Playfair] font-thin">
                <Link className='hover:text-sephia' href="/">Summary</Link>
                <Link className='hover:text-sephia' href="early_life">Early Life</Link>
                <Link className='hover:text-sephia' href="/career">Career</Link>
                <Link className='hover:text-sephia' href="/famous_works">Famous Works</Link>
                <Link className='hover:text-sephia' href="/later_life">Later Life</Link>
            </div>
        </div>
    )
}

export default header
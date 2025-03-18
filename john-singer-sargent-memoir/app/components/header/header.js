import React from 'react'
import Link from 'next/link';

function header() {
    return (
        <div className="max-w bg-stone-900 text-white p-8 flex justify-between items-center">
            <h2 className='font-poppins'>John Singer Sargent: A Memoir</h2>
            <div className="flex gap-4">
                <Link href="/">Summary</Link>
                <Link href="/early-life">Early Life</Link>
                <Link href="/career">Career</Link>
                <Link href="/famous-works">Famous Works</Link>
                <Link href="/later-lifes">Later Life</Link>
            </div>
        </div>
    )
}

export default header
import React from 'react'
import Link from 'next/link';

function header() {
    return (
        <div>
            
            <div className="max-w bg-stone-900 text-white p-8 flex flex-row justify-end items-end gap-4">
            <h2 className='justify-start items-start '>John Singer Sargent: A Memoir</h2>
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
import React from 'react';

function Footer() {
    return (
        <div className='max-w-full bg-brown'>
            <div className="p-15 flex justify-around text-white pt-8">
                <div className="flex flex-col max-w-xl">
                    <h2 className="text-2xl mb-2">Celebrating Artists and Arts</h2>
                    <p>This project was created with the purpose of celebrating and preserving the legacy of history’s greatest artists.</p>
                </div>
                <div className="flex flex-col max-w-xl">
                    <h2 className="text-2xl mb-2">Uncover Other Artists</h2>
                    <div className="flex flex-row gap-10 justify-end text-end">
                        <div className="flex flex-col ">
                            <p className="hover:text-sephia">Rembrandt</p>
                            <p className="hover:text-sephia">Delacroix</p>
                            <p className="hover:text-sephia">Velázquez</p>
                            <p className="hover:text-sephia">Goya</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="hover:text-sephia">Monet</p>
                            <p className="hover:text-sephia">Van Gogh</p>
                            <p className="hover:text-sephia">Degas</p>
                            <p className="hover:text-sephia">Manet</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-3 text-center">
                <p>@maryy_lune</p>
            </div>
        </div>
    );
}

export default Footer;

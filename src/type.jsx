import React from 'react'
import House0001 from './Type/house0001'
import House0002 from './Type/house0002'
export default function Type() {
    return (
        <div id='type'
            className="bg-local w-full h-screen bg-cover bg-center "
            style={{ backgroundImage: 'url(https://t4.ftcdn.net/jpg/05/68/63/11/360_F_568631153_ygTLlsjLeVtMrGDSUbqia6VD2GsdbHJx.jpg)' }}>
            <div className='w-full text-center py-6'>[House Type]</div>
            <div className='grid justify-items-center grid-cols-2'>
                <House0001 />
                <House0002/>
            </div>

        </div>
    )
}

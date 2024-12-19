import React from 'react'

function Home() {
    return (
        <div id='home'
            className="bg-local w-full h-screen bg-cover bg-center "
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D)' }}
        >
            <div className='absolute top-1/2 w-full text-center'>Centered</div>
        </div>
    )
}

export default Home
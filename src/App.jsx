
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      {/* Background container */}
      <div className="absolute left-0 w-full h-screen z-0 top-0">
        <div
          className="bg-local w-full h-screen bg-cover bg-center "
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D)' }}
        >
          <div className='absolute top-1/2 w-full text-center'>Centered</div>
        </div>
        <div
          className="bg-local w-full h-screen bg-cover bg-center "
          style={{ backgroundImage: 'url(https://t4.ftcdn.net/jpg/05/68/63/11/360_F_568631153_ygTLlsjLeVtMrGDSUbqia6VD2GsdbHJx.jpg)' }}
        ></div>
        <div
          className="bg-local w-full h-screen bg-cover bg-center "
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/221471/pexels-photo-221471.jpeg?cs=srgb&dl=pexels-pixabay-221471.jpg&fm=jpg)' }}
        ></div>
        <Footer />
      </div>
      
    </>
  )
}

export default App

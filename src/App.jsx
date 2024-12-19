
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './Home.jsx'
import Type from './type.jsx'
function App() {
  return (
    <>
      <Header />
      {/* Background container */}
      <div className="absolute left-0 w-full h-screen z-0 top-0">
        <Home/>
        <Type/>
        <div id='location'
          className="bg-local w-full h-screen bg-cover bg-center "
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/221471/pexels-photo-221471.jpeg?cs=srgb&dl=pexels-pixabay-221471.jpg&fm=jpg)' }}
        ></div>
        <Footer />
      </div>

    </>
  )
}

export default App

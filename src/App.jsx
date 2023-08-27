import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import StoreProvider from './components/store/storeProvider'

function App() {
  return (
    <>  
    <StoreProvider>
      <Header />
      <Hero />
    </StoreProvider>
    </>
  )
}

export default App

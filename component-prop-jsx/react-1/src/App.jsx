import Navbar from "./components/navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {


  return (
    <>
      <Navbar />
      <Footer />
      <div className="cards">
        <Card title="card-1" description="card-1 desc" />
        <Card title="card-2" description="card-2 desc" />
        <Card title="card-3" description="card-3 desc" />
        <Card title="card-4" description="card-4 desc" />
      </div>
    </>
  )

}

export default App

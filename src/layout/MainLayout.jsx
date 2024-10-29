import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../index.css"

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* header */}
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
export default MainLayout
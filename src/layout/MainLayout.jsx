import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../index.css"

const MainLayout = () => {
  return (
    <div className="">
      {/* header */}
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
      <div className="flex-1">
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
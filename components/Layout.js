import Footer from "./footer/Footer"
import Navcomponent from "./navbar/Navbar"

const Layout = ({ children }) => {
  return (
    <div>
      <Navcomponent />
        {children}
      <Footer />
    </div>
  )
}

export default Layout
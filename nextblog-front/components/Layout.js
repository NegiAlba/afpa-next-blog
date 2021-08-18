import Navbar from "./Navbar"
import Seo from "./Seo"

const Layout = ({children}) => {
    return (
        <>
            <Seo/>
            <Navbar/>
            <div className="container mx-auto px-4">
                {children}
            </div>
        </>
    )
}

export default Layout

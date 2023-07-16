// Component import
import HeaderNav from "../../Components/HeaderNav/HeaderNav"
import Footer from "../../Components/Footer/Footer"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Developers from './Components/Developers'

export default function Home({ loggedIn }) {



    return (
        <>
        {/* Header Section */}
            <header>
                <HeaderNav
                    loggedIn={loggedIn}
                />
            </header>

        {/* Main Section */}
        <main className="home--main">
            <Hero

            />
            <hr />
            <About 
            
            />
            <hr />
            <Developers
            
            />
        </main>
            <Footer

            />
        </>
    )
}
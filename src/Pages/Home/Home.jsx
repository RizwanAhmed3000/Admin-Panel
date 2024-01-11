import { Navbar } from "../../Components/Navbar/Navbar"
import { Sidebar } from "../../Components/Sidebar/Sidebar"
import "./home.scss"

export const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">Container</div>
            {/* <Navbar /> */}
        </div>
    )
}

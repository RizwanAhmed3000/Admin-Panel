import { Chart } from "../../Components/Chart/Chart"
import { Featured } from "../../Components/Featured/Featured"
import { Navbar } from "../../Components/Navbar/Navbar"
import { Sidebar } from "../../Components/Sidebar/Sidebar"
import { Widgets } from "../../Components/Widgets/Widgets"
import "./home.scss"

export const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widgets type='user' />
                    <Widgets type='order' />
                    <Widgets type='profit' />
                    <Widgets type='balance' />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart />
                </div>
            </div>
        </div>
    )
}

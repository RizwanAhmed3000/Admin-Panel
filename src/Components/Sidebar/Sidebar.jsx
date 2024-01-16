import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";

export const Sidebar = () => {

    const { dispatch } = useContext(DarkModeContext)

    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Admin Panel</span>
                </Link>
            </div>
            <div className="mid">
                <ul>
                    <p className="titles">MAIN</p>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icons" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="titles">LISTS</p>

                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonIcon className="icons" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <InventoryIcon className="icons" />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <CreditCardIcon className="icons" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icons" />
                        <span>Delivery</span>
                    </li>
                    <p className="titles">SERVICE</p>

                    <li>
                        <BarChartIcon className="icons" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsIcon className="icons" />
                        <span>Notifications</span>
                    </li>
                    <li>
                        <SettingsIcon className="icons" />
                        <span>Settings</span>
                    </li>
                    <p className="titles">USER</p>

                    <li>
                        <AccountBoxIcon className="icons" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className="icons" />
                        <span>Log Out</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <p className="titles">
                    Themes
                </p>
                <div className="colorOptions">
                    <div className="colorOption" onClick={() => { dispatch({ type: "LIGHT" }) }}></div>
                    <div className="colorOption" onClick={() => { dispatch({ type: "DARK" }) }}></div>
                </div>
            </div>
        </div>
    )
}

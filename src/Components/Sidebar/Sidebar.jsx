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
export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">Admin Panel</span>
            </div>
            <div className="mid">
                <ul>
                    <p className="titles">MAIN</p>
                    <li>
                        <DashboardIcon className="icons" />
                        <span>Dashboard</span>
                    </li>
                    <p className="titles">LISTS</p>

                    <li>
                        <PersonIcon className="icons" />
                        <span>Users</span>
                    </li>
                    <li>
                        <InventoryIcon className="icons" />
                        <span>Products</span>
                    </li>
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
                    <div className="colorOption"></div>
                    <div className="colorOption"></div>
                </div>
            </div>
        </div>
    )
}

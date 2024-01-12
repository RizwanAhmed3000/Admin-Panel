import "./widgets.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
export const Widgets = ({ type }) => {

    let data;
    const amount = 100;
    const percentage = 20;

    if (type === "user") {
        data = {
            title: "USER",
            isMoney: false,
            link: "See all users",
            icon: (
                <PersonIcon className="icon" style={{ color: "crimson", backgroundColor: "#ff000040" }} />
            )
        }
    } else if (type === "order") {
        data = {
            title: "ORDERS",
            isMoney: false,
            link: "View all orders",
            icon: (
                <ShoppingCartIcon className="icon" style={{ color: "goldenrod", backgroundColor: "#ffd70040" }} />
            )
        }
    } else if (type === "profit") {
        data = {
            title: "PROFIT",
            isMoney: true,
            link: "View net profits",
            icon: (
                <MonetizationOnIcon className="icon" style={{ color: "green", backgroundColor: "#00800040" }} />
            )
        }
    } else if (type === "balance") {
        data = {
            title: "BALANCE",
            isMoney: true,
            link: "See details",
            icon: (
                <AccountBalanceWalletIcon className="icon" style={{ color: "purple", backgroundColor: "#80008040" }} />
            )
        }
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">
                    {data?.title}
                </span>
                <span className="counter">
                    {data?.isMoney && "$"} {amount}
                </span>
                <span className="link">
                    {data?.link}
                </span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {percentage}%
                </div>
                {data?.icon}
            </div>
        </div>
    )
}

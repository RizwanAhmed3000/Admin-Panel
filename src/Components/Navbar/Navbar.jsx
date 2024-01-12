import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications'; 
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'; 
import ListIcon from '@mui/icons-material/List';
export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="searchBar">
                    <input type="text" placeholder="Search..." />
                    <SearchIcon className="searchIcon" />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageIcon />
                        English
                    </div>
                    <div className="item">
                        <DarkModeIcon />
                    </div>
                    <div className="item">
                        <FullscreenExitIcon />
                    </div>
                    <div className="item">
                        <NotificationsIcon />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleIcon />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ListIcon />
                    </div>
                    <div className="item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFgG_wbqwD7HVD9FLCyRsz-Rz5DQRgwE8_NQ&usqp=CAU" alt="" className="avatar" />
                    </div>
                </div>
            </div>
        </div>
    )
}

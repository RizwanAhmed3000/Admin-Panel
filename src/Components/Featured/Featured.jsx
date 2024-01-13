import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Featured = () => {
    const percentage = 60;
    return (
        <div className="featured">
            <div className="top">
                <h2 className="title">Total Revenue</h2>
                <MoreVertIcon fontSize="small" className="icon" />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={5} styles={{ path: { stroke: "lightcoral" }, text: { fill: "lightcoral" } }} />
                </div>
                <p className="title">Total sales Today</p>
                <p className="amount">$550</p>
                <p className="desc">Last payment may not be included.</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small"/>
                            <div className="resultAmount">$1.50k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpIcon fontSize="small"/>
                            <div className="resultAmount">$12.50k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpIcon fontSize="small"/>
                            <div className="resultAmount">$12.50k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

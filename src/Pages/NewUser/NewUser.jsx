import { Navbar } from '../../Components/Navbar/Navbar'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import './newUser.scss'

export const NewUser = () => {
    return (
        <div className='new'>
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Add new User</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label>
                                    Username
                                </label>
                                <input type="text" placeholder='username' />
                            </div>
                            <div className="formInput">
                                <label>
                                    Full name
                                </label>
                                <input type="text" placeholder='Full name' />
                            </div>
                            <div className="formInput">
                                <label>
                                    Email
                                </label>
                                <input type="email" placeholder='Email' />
                            </div>
                            <div className="formInput">
                                <label>
                                    Phone number
                                </label>
                                <input type="text" placeholder='Phone number' />
                            </div>
                            <div className="formInput">
                                <label>
                                    Phone number
                                </label>
                                <input type="text" placeholder='Phone number' />
                            </div>
                            <div className="formInput">
                                <label>
                                    Address
                                </label>
                                <input type="text" placeholder='Address' />
                            </div>
                            <div className="formInput">
                                <label>
                                    Country
                                </label>
                                <input type="text" placeholder='Country' />
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

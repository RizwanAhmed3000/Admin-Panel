import { useState } from 'react';
import { Navbar } from '../../Components/Navbar/Navbar'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import './newUser.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

export const NewUser = ({ inputs, title }) => {

    const [file, setFile] = useState("")

    console.log(file, "===>>>> file")

    return (
        <div className='new'>
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor='file'>
                                    Image: <DriveFolderUploadIcon className='icon' />
                                </label>
                                <input type="file" onChange={e => setFile(e.target.files[0])} id='file' style={{ display: "none" }} />
                            </div>

                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>
                                        {input.label}
                                    </label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

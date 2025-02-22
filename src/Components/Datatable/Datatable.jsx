import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumn, userRows, hotelsColumn } from '../../datatableSource';
import { Link, useLocation, } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';

export const Datatable = () => {

    const location = useLocation()
    // console.log(location, "====>>> location")
    const path = location.pathname.split('/')[1]
    // console.log(path)
    const [list, setList] = useState();
    const { data, loading, error, reFetchData } = useFetch(path === "Customers" ? '/users/' : path === "Hotels" ? '/hotels/' : path === "Rooms" ? '/rooms/' : '');
    // console.log(data, "====>>> data")

    useEffect(() => {
        setList(data);
        reFetchData()
    }, [path])

    const handleDelete = async (id) => {
        try {

        } catch (error) {

        }
        setList(list.filter(item => item.id !== id))
    }

    const actions = [
        {
            field: "action", headerName: "Action", width: 200, renderCell: () => {
                return (
                    <div className="cellAction">
                        <Link to="/users/test" style={{ textDecoration: "none" }}>
                            <div className="viewBtn">View</div>
                        </Link>
                        <div className="deleteBtn">Delete</div>
                    </div>
                )
            }
        }
    ]

    return (
        <div className='datatable'>
            <div className="datatableTitle">
                <h1>All {path}</h1>
                <Link to={`/${path}/new`} style={{ textDecoration: "none" }} className='addBtn'>
                    Add new
                </Link>
            </div>
            <DataGrid
                className='dataGrid'
                rows={data}
                columns={path === "Customers" ? userColumn.concat(actions) : path === "Hotels" ? hotelsColumn.concat(actions) : userColumn}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[10, 20]}
                // rowsPerPageOption= {[9]}
                checkboxSelection
                getRowId={row => row._id}
            />
        </div>
    )
}

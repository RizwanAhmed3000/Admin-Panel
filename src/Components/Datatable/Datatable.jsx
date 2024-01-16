import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumn, userRows } from '../../datatableSource';
import { Link } from 'react-router-dom';
import { grey } from '@mui/material/colors';

export const Datatable = () => {

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
                <h1>All users</h1>
                <Link to="/users/new" style={{ textDecoration: "none" }} className='addBtn'>
                    Add new
                </Link>
            </div>
            <DataGrid
                className='dataGrid'
                rows={userRows}
                columns={userColumn.concat(actions)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[10, 20]}
                // rowsPerPageOption= {[9]}
                checkboxSelection
            />
        </div>
    )
}

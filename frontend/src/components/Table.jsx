import MaterialTable from "material-table";
import React from "react";
import Button from "@material-ui/core/Button";
import {renderDetails} from "../api/tableRenderrer";
import {getData} from "../api/client";

const TABLE_NAME = 'Linux Github commits overview';

const columns = [
    { title: 'Commit Id', field: 'commit.id' },
    { title: 'Name', field: 'committer.name' },
    { title: 'Email', field: 'committer.email' },
    {
        title: 'Profile',
        field: 'profile',
        render: (rowData) => {
            return (<Button
                color="secondary"
                target="_blank"
                href={rowData.committer.html_url}
                disabled={!rowData.committer.html_url}
            >Profile</Button>);
        }
    },
    { title: 'Date', field: 'commit.date', type: 'date'},
];

class Table extends React.Component {
    render() {
        return (
            <MaterialTable
                title={TABLE_NAME}
                columns={columns}
                options={{
                    search: false,
                    paginationType: "stepped",
                    pageSize: 30,
                    pageSizeOptions: [],
                }}
                data={getData.bind(this)}
                detailPanel={renderDetails}
            />
        );
    }
}

export default Table;
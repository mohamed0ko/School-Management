import React, { useEffect, useState } from "react";
import ParentApi from "../../servies/api/Parent/ParentApi";
import { ParentListColum } from "../../components/data-table/parent/ParentListColum";
import { DataTable } from "../../components/data-table/DataTable";

export default function AdminParentList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        ParentApi.all().then(({ data }) => setData(data.data));
    }, []);
    return (
        <div>
            <DataTable columns={ParentListColum} data={data} />
        </div>
    );
}

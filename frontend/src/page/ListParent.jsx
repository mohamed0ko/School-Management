import React, { useEffect } from "react";
import ParentApi from "../servies/api/Parent/Parent";

export default function ListParent() {
    useEffect(() => {
        ParentApi.all().then((res) => {
            console.log(res);
        });
    }, []);
    return <div>hi list</div>;
}

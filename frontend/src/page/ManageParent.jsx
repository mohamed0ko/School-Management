import React from "react";
import { Link, Outlet } from "react-router-dom";

const ManageParent = () => {
    return (
        <div>
            <div className="d-grid gap-2 d-md-block">
                <Link to="ListParent" className="btn btn-primary">
                    Show Parent
                </Link>
                &nbsp;
                <Link to="ParentCreate" className="btn btn-primary">
                    ParentCreate
                </Link>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default ManageParent;

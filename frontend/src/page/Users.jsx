import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthContext } from "../api/ContextAuth";
import UserApi from "../servies/api/User/UserApi";

export default function Users() {
    const { setUser, setAuthenticated, user, logout } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        UserApi.getUser()
            .then(({ data }) => {
                setUser(data);
                setAuthenticated(true);
            })
            .catch((respo) => {
                navigate("/login");
                logout();
            });
    }, []);

    return (
        <>
            <>
                <div>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">NAME</th>
                                <th scope="col">EMAIL</th>
                                <th scope="col">DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{user ? user.id : <></>}</th>
                                <td>
                                    {user ? user.fristname : <></>}
                                    {user ? user.lastname : <></>}
                                </td>
                                <td>{user ? user.email : <></>}</td>
                                <td>{user ? user.created_at : <></>}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        </>
    );
}

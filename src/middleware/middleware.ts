import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export const ProtectedRoute = (props: any) => {
    const navigate = useNavigate();
    const auth = useSelector((state: any) => state.combinedReducers.data);

    // useEffect(() => {
    //     if (!auth.loginSuccess) {
    //         navigate("/");
    //     }
    // });

    return props.children;
};

export const PrivateRoute = (props: any) => {
    const navigate = useNavigate();
    const auth = useSelector((state: any) => state.combinedReducers.data);
    const data = useSelector((state: any) => state.combinedReducers.login.data);

    useEffect(() => {
        if (auth.loginSuccess && data.role !== "admin") {
            navigate("/getting-started");
        } else if (!auth.loginSuccess) {
            navigate("/");
        }
    });

    return props.children;
}
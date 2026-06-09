import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import check_admin_thunk from "../../redux-toolkit/Admin/check_admin_api.js";
import Loader from "../../components/loader";

const Admin_protection = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const res = await dispatch(check_admin_thunk()).unwrap();
        setIsAuth(res.success);
      } catch (err) {
        setIsAuth(false);
      } finally {
        setLoading(false);
      }
    };

    verifyAdmin();
  }, [dispatch]);

  if (loading) return <Loader />;
  if (!isAuth) return <Navigate to="/adminlogin" replace />;

  return <Outlet />;
};

export default Admin_protection;

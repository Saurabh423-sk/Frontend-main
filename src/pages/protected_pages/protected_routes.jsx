import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import check_thunk from "../../redux-toolkit/all_api/check_api";
import Loader from "../../components/loader";

const Protected = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await dispatch(check_thunk()).unwrap();
        setIsAuth(res.success);
      } catch (err) {
        setIsAuth(false);
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, [dispatch]);

  if (loading) return <Loader />;
  if (!isAuth) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default Protected;

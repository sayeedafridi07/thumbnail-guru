import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  getAllProperties, 
  getAllFavourites, 
  getAllRecentProperties, 
  getAllContactedProperties 
} from "../services/operations/propertyAPI";
import { getAllServices } from "../services/operations/serviceAPI";

const useFetchData = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  // Get loading state from Redux store
  const { loading: propertyLoading } = useSelector((state) => state.property);
  const { loading: serviceLoading } = useSelector((state) => state.service);

  // Fetch properties and services on component mount
  useEffect(() => {
    // Fetch general properties and services
    dispatch(getAllProperties({}));
    dispatch(getAllServices());
    
    // Fetch user-specific property data if user is logged in
    if (token) {
      dispatch(getAllFavourites(token));
      dispatch(getAllRecentProperties(token));
      dispatch(getAllContactedProperties(token));
    }
  }, [token]);

  return {
    isLoading: propertyLoading || serviceLoading,
  };
};

export default useFetchData;

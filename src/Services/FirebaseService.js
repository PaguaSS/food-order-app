import axios from "axios";

const apiWithAxiosInstance = axios.create({baseURL: process.env.REACT_APP_BASE_API_URL});

const FirebaseService = {
    getAxiosInstance: () => apiWithAxiosInstance,
    createOrder: async (orderData) => {
        try {
            const response = await apiWithAxiosInstance.post(`/${process.env.REACT_APP_API_ORDER}`, orderData);
            const { data } = response;
            return data.name ? true : false;
        } catch (err) {
            console.error(err);
        }
        
        return false;
    }
}; 

export default FirebaseService;
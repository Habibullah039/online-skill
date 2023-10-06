import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";

const useOrders = () => {

    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {

        const email = user.email;

        if (user) {

            fetch(`http://localhost:5000/order?email=${email}`, {

                method: 'GET',
                headers: {

                    authorization: `Bearer ${localStorage.getItem('token')}`

                }

            })
                .then(res => {

                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('token');
                        navigate('/login');
                    }
                    return res.json()
                })
                .then(data => setOrders(data))
        }

    }, []);



    return [orders, setOrders];
    
};

export default useOrders;
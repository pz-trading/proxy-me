import axios from "axios";
import { ReactDOM } from "react";

const api = axios.create({
    baseURL : 'http://proxyme.net:8000',
});

function showPopup() {
    const popupContainer = document.createElement('div');
    document.body.appendChild(popupContainer);

    const closePopup = () => {
    ReactDOM.unmountComponentAtNode(popupContainer);
    popupContainer.remove();
    };

    const PopupComponent = () => (
    <div>
        <p>You are not authorized. Please click the link below to go to the login page:</p>
        <a href="/login">Go to Login</a>
        <button onClick={closePopup}>Close</button>
    </div>
    );

    ReactDOM.render(<PopupComponent />, popupContainer);
}
api.interceptors.response.use(
    (response) => response,
    (error) => {

        if(error.response){
            console.error(error.response.status, error.response.statusText)
            if(error.response.status == 401 && error.response.statusText == "Unauthorized"){
                // component popup to have link to login
                showPopup()
            }

        }else if(error.request){

        }else{

        }
        return Promise.reject(error);
    }
);
export default api;
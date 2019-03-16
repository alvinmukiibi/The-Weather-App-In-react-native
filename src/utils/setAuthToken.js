import axios from "axios";

const setAuthToken = token => {
    if (token) {
        // apply token to every request
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        axios.defaults.headers.get["Accept"] = "application/json";
    } else {
        // Delete auth header
        delete axios.defaults.headers.common["Authorization"];
    }
};

export default setAuthToken;

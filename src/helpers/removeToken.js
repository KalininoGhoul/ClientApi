import axios from "axios";

export default function removeToken() {
    localStorage.removeItem('user_token');
    axios.defaults.headers.common['Authorization'] = null;
}
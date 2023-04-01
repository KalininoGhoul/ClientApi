import axios from "axios";

export default function setToken(token) {
    localStorage.setItem('user_token', token);
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}
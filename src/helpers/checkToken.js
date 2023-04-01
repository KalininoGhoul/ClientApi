export default function checkToken() {
    const token = localStorage.getItem('user_token');
    
    if (!token) {
        return { name: 'login' }
    }

    return true;
}
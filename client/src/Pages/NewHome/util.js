const utilMap = {
    getUserData: () => {
        const userData = JSON.parse(localStorage.getItem('userAuth'));
        return userData;
    }
}
export default utilMap;
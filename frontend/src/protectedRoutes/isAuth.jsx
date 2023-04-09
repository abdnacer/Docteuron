export const isAuth = () => {
    const role = localStorage.getItem('role')

    if(role) return JSON.parse(role)
    else return false
}
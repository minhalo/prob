import axios from "../axios"

const handleLogin = (email,password) =>
{
    return axios.post('http://localhost:8080/api/login', {email,password})
}

const handleRegister = (email, password,cpassword, firstName, lastName, phonenumber, address) =>
{
    return axios.post('http://localhost:8080/api/register', {email, password, cpassword,firstName, lastName, phonenumber, address})
}

export {handleLogin,handleRegister}


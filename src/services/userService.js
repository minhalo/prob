import axios from "../axios"

const handleLogin = (email,password) =>
{
    return axios.post('http://localhost:8080/api/login', {email,password})
}

const getUsers = (id) => {
    return axios.get(`http://localhost:8080/api/get-users?id=${id}`)
}

const handleRegister = (email, password,cpassword, firstName, lastName, phonenumber, address) =>
{
    return axios.post('http://localhost:8080/api/register', {email, password, cpassword,firstName, lastName, phonenumber, address})
}

// this.state.id, this.state.firstName, this.state.lastName, this.state.address, this.state.phonenumber, this.state.name, this.state.profileImg, this.state.age, this.state.textt
const getEdit = (id,firstName,lastName,address,phonenumber,name,profileImg,age,textt,password) => {
    return axios.put('http://localhost:8080/api/get-edit',{id,firstName,lastName,address,phonenumber,name,profileImg,age,textt,password})
}

const getDelete = (id, password) =>{
    return axios.delete(`http://localhost:8080/api/delete-users?id=${id}&password=${password}`)
}

const getCheckChangeEmail = (email) => {
    return axios.post('http://localhost:8080/api/forgot', {email})
}

const forgotPass = (id, password, cpassword) => {
    return axios.put(`http://localhost:8080/api/change?id=${id}`, {password, cpassword})
}

const getBox = () => {
    return axios.get('http://localhost:8080/api/box')
}

const refresh = (id) => {
    return axios.post(`http://localhost:8080/api/refresh?id=${id}`)
}

const header = (id) => {
    return axios.get(`http://localhost:8080/api/header?id=${id}`)
}

const passhw = (id, curpass, password, cpassword) => {
    return axios.put('http://localhost:8080/api/get-password', {id, curpass,  password, cpassword})
}

// /api/allusers
const all = (id) => {
    return axios.get(`http://localhost:8080/api/allusers?id=${id}`)
}

const addfriend = (id,ids) =>{
    return axios.post(`http://localhost:8080/api/allFriend?id=${id}&ids=${ids}`)
}

const addf = (id) => {
    return axios.get(`http://localhost:8080/api/getFusers?id=${id}`)
}

const delf = (id,ids) => {
    return axios.delete(`http://localhost:8080/api/getdelFusers?id=${id}&ids=${ids}`)
}

const search = (name,id) => {
    return axios.get(`http://localhost:8080/api/getSearch?firstName=${name}&id=${id}`)
}
export {search,delf,addf,addfriend,all,passhw,handleLogin, getUsers,handleRegister,getEdit, getDelete, getCheckChangeEmail,forgotPass,getBox, refresh, header}


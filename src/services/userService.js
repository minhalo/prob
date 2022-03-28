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

const logout = (id) => {
    return axios.post(`http://localhost:8080/api/logout?id=${id}`)

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

const searched = (id) => {
    return axios.get(`http://localhost:8080/api/getser?id=${id}`)
}

const profile = (id) => {
    return axios.get(`http://localhost:8080/get/profile?id=${id}`)
}

const brei = (id,ids) => {
    return axios.get(`http://localhost:8080/api/bre?id=${id}&ids=${ids}`)
}

const req = (id) => {
    return axios.get(`http://localhost:8080/api/getReqFr?id=${id}`)
}

const random = () => {
    return axios.get('http://localhost:8080/api/rendom')
}
const kdp = (id) => {
    return axios.get(`http://localhost:8080/api/kdp?id=${id}`)
}

const count = (id) => {
    return axios.get(`http://localhost:8080/api/count?id=${id}`)
}
const stop = (id,ids) => {
    return axios.post(`http://localhost:8080/api/accept?id=${id}&ids=${ids}`)
}
export {profile,kdp,stop,count,random,req,brei,searched,logout,search,delf,addf,addfriend,all,passhw,handleLogin, getUsers,handleRegister,getEdit, getDelete, getCheckChangeEmail,forgotPass,getBox, refresh, header}


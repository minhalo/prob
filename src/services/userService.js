import axios from "../axios"

import io from 'socket.io-client'

const socket = io.connect("http://localhost:7000")

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

const role = (id) => {
    return axios.get(`http://localhost:8080/api/role?id=${id}`)
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

const group = () => {
    return axios.post(`http://localhost:8080/api/group`)
}

const getGroup = (id, ids) => {
    return axios.post(`http://localhost:8080/api/group?id=${id}&ids=${ids}`)
}

const okgr = (id) => {
    return axios.get(`http://localhost:8080/api/okgr?id=${id}`)
}

const take = (id, ids ,idss) => {
    return axios.post(`http://localhost:8080/api/task`,{id,ids,idss})
}

const activate = (id,ids) => {
    return axios.post(`http://localhost:8080/api/activate?id=${id}&ids=${ids}`)
}

const dmmn = (id,ids) => {
    return axios.get(`http://localhost:8080/api/dmm?id=${id}&ids=${ids}`)
}


const chatlist = (id) => {
    return axios.get(`http://localhost:8080/api/messa?id=${id}`)
}


const namegr = (id) => {
    return axios.get(`http://localhost:8080/api/getnamegr?id=${id}`)
}

const listactivate = (id) => {
    return axios.get(`http://localhost:8080/api/listActivate?id=${id}`)
}

const listpost = () => {
    return axios.get(`http://localhost:8080/api/listpost`)
}

const creatpost = (id, mes,img) => {
    return axios.post(`http://localhost:8080/api/creatpost?id=${id}&text=${mes}`, {img})
}

const inlike = (id) => {
    return axios.put(`http://localhost:8080/api/like?id=${id}`)
}

const dislike = (id) => {
    return axios.put(`http://localhost:8080/api/dislike?id=${id}`)
}

// commenti
const commenti = (id, idk, mes) => {
    return axios.post(`http://localhost:8080/api/commenti?id=${id}&ids=${idk}&mes=${mes}`)
}

// listcomment

const listcomment = (id) => {
    return axios.get(`http://localhost:8080/api/listcomment?id=${id}`)
}


const searchaff = (name, id) => {
    return axios.get(`http://localhost:8080/api/getmanagefr?name=${name}&id=${id}`)
}

const deleteaff = (id, ids) =>{
    return axios.delete(`http://localhost:8080/api/deleteAff?id=${id}&ids=${ids}`)
}


const searchrequest = (name, id) =>{
    return axios.get(`http://localhost:8080/api/searchrequest?name=${name}&id=${id}`)
}

const deleteGr = (id) => {
    return axios.delete(`http://localhost:8080/api/deleteGr?id=${id}`)
}

const postExac = (id) =>{
    return axios.get(`http://localhost:8080/api/postidk?id=${id}`)
}

const setc = (id) =>{
    return axios.get(`http://localhost:8080/api/setc?id=${id}`)
}
const deleteaccount = (id) =>{
    return axios.delete(`http://localhost:8080/api/deleteaccount?id=${id}`)
}
const getAdmin = () =>{
    return axios.get(`http://localhost:8080/api/getAdmin`)
}

const accept = (id,ids) =>{
    return axios.put(`http://localhost:8080/api/accept?id=${id}&ids=${ids}`)
}

const createGroupl = (id, name,ok) =>{
    return axios.post(`http://localhost:8080/api/createGroupl?id=${id}&name=${name}&ok=${ok}`)
}

const getlearning = (id) =>{
    return axios.get(`http://localhost:8080/api/getlearning?id=${id}`)
}


//getlearning

const deletepost = (id) =>{
    return axios.delete(`http://localhost:8080/api/deletepost?id=${id}`)
}

const searchRole = (id, ids) =>{
    return axios.get(`http://localhost:8080/api/searchRole?id=${id}&ids=${ids}`)
}


const Charty = () =>{
    return axios.get(`http://localhost:8080/api/Charty`)
}

const userup = () =>{
    return axios.get(`http://localhost:8080/api/userup`)
}

const learndel = (id) =>{
    return axios.delete(`http://localhost:8080/api/learndel?id=${id}`)
}


const rip = (id,ids,idss) =>{
    return axios.post(`http://localhost:8080/api/rip?id=${id}&ids=${ids}&idss=${idss}`)
}

const getlearningopc = (id) =>{
    return axios.get(`http://localhost:8080/api/getlearningopc?id=${id}`)
}

const getoff = (id) =>{
    return axios.get(`http://localhost:8080/api/getoff?id=${id}`)
}


const dellpost = (id,ids) =>{
    return axios.delete(`http://localhost:8080/api/dellpost?id=${id}&ids=${ids}`)
}


const getclass = (id) =>{
    return axios.get(`http://localhost:8080/api/getclass?id=${id}`)
}

const codeclass = (id,ids) =>{
    return axios.post(`http://localhost:8080/api/codeclass?id=${id}&ids=${ids}`)
}


const studendel = (id,ids) =>{
    return axios.delete(`http://localhost:8080/api/studendel?id=${id}&ids=${ids}`)
}

const toce = (id) =>{
    return axios.get(`http://localhost:8080/api/toce?id=${id}`)
}


const kickoff = (id,ids) =>{
    return axios.delete(`http://localhost:8080/api/kickoff?id=${id}&ids=${ids}`)
}

const postput = (id,ids) =>{
    return axios.put(`http://localhost:8080/api/postput?id=${id}&ids=${ids}`)
}

const filepost = (id,ids, idss) =>{
    return axios.post(`http://localhost:8080/api/filepost`, {id,ids,idss})
}


const getallfile = (id) =>{
    return axios.get(`http://localhost:8080/api/getallfile?id=${id}`)
}

const pdfdel = (id) =>{
    return axios.delete(`http://localhost:8080/api/pdfdel?id=${id}`)
}


const filepoststudent = (idt,id,ids,idss,iei) =>{
    return axios.post(`http://localhost:8080/api/filepoststudent`,  {idt,id,ids,idss,iei})
}


const allupdate = (id,ids) =>{
    return axios.get(`http://localhost:8080/api/allupdate?id=${id}&ids=${ids}`)
}

const countew = (id,ids) =>{
    return axios.get(`http://localhost:8080/api/countew?id=${id}&ids=${ids}`)
}


const getallscore = (id) =>{
    return axios.get(`http://localhost:8080/api/getallscore?id=${id}`)
}


const uiui = (id) =>{
    return axios.get(`http://localhost:8080/api/uiui?id=${id}`)
}


const sote = (id,ids) =>{
    return axios.put(`http://localhost:8080/api/sote?id=${id}&ids=${ids}`)
}


const chune = (id,ids) =>{
    return axios.get(`http://localhost:8080/api/chune?id=${id}&ids=${ids}`)
}

const jscore = (id) =>{
    return axios.get(`http://localhost:8080/api/jscore?id=${id}`)
}

const qtq = () =>{
    return axios.get(`http://localhost:8080/api/qtq`)
}

const searchText = (id,ids) =>{
    return axios.get(`http://localhost:8080/api/searchText?id=${id}&ids=${ids}`)
}

const emotion = (id,ids) =>{
    return axios.get(`http://localhost:8080/api/emotion`)
}



// chune

///api/userup

export {emotion,searchText,qtq,jscore,chune,sote,uiui,getallscore,countew,allupdate,filepoststudent,pdfdel,getallfile,filepost, postput,kickoff,toce,studendel,codeclass,getclass,dellpost,getoff,getlearningopc,rip,learndel,userup,Charty,searchRole,deletepost, getlearning,createGroupl,accept,getAdmin,deleteaccount,role,setc,postExac,deleteGr,searchrequest,deleteaff,searchaff,listcomment,commenti,dislike,inlike,listpost,creatpost,listactivate,namegr,chatlist,dmmn,activate,take,okgr,getGroup,socket,group,profile,kdp,stop,count,random,req,brei,searched,logout,search,delf,addf,addfriend,all,passhw,handleLogin, getUsers,handleRegister,getEdit, getDelete, getCheckChangeEmail,forgotPass,getBox, refresh, header}


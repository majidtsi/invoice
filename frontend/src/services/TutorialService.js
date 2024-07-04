import http from "./http-common"
import axios from "axios"
const signup = data => {
    return http.post("authy/signup/",data)
}

const login = (data) => {
    return http.post("authy/login/", data)
}

const logout = () => {
    return http.get("authy/logout/")
}

const getInvoice = () => {
    //const token = localStorage.getItem('authTokens')
    //axios.defaults.headers.common['Authorization'] = "token " + token
    //const headers = { 'Authorization': 'token ' + token };
    return http.get("invoice/")
}
const creteInvoice = () => {
    //const token = localStorage.getItem('authTokens')
    //axios.defaults.headers.common['Authorization'] = "token " + token
    //const headers = { 'Authorization': 'token ' + token };
    return http.post("invoice/")
}
const getDetailInvoice = (id) => {
    return http.get("invoice/" + String(id) + "/")
}
const updateDetailInvoice = (id,data) => {
    return http.put("invoice/" + id + "/",data)
}
const deleteDetailInvoice = (id) => {
    return http.delete("invoice/" + id + "/")
}
const createCustomer = (data) => {
    return http.post("customer/",data)
}


const TutorialDataService = {
    signup,
    login,
    logout,
    getInvoice,
    creteInvoice,
    getDetailInvoice,
    updateDetailInvoice,
    deleteDetailInvoice,
    createCustomer,


}

export default TutorialDataService
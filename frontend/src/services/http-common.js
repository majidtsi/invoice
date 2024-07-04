import axios from "axios"
console.log("------http-----")
console.log(localStorage.getItem("authTokens"))
console.log("-------fin http----")
//axios.defaults.headers.common = {'Authorization': `bearer ${localStorage.getItem("authTokens")}`}
export default axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
        "Content-type":"application/json",
    }
    
});
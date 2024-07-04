import {createContext, useState, useEffect} from "react"
import { jwtDecode } from "jwt-decode"
import { useNavigate, useLocation } from "react-router-dom"
import TutorialDataService from "../services/TutorialService"
const swal = require("sweetalert2")

const AuthContext = createContext()
export default AuthContext

export const AuthProvider = ({ children }) => {
    
    const [authTokens, setAuthTokens] = useState(() =>
        localStorage.getItem("authTokens") ? localStorage.getItem("authTokens") : null)
    
    const [user, setUser] = useState(()=>
    localStorage.getItem("authTokens") ? localStorage.getItem("authTokens") : null)

    const [loading,setLoading] = useState(true)
    const history = useNavigate()

    const loginUser = async (username,password) => {
        const body = JSON.stringify({
            username,password
        })
        var data={}
        try {
            const response =  TutorialDataService.login(body)
        console.log("---password-----")
        data = await response
    
        } catch (err) {
             data.status=0
        }
        
       console.log(data)
        if(data.status===200){
            console.log("Logged In")
            const result = data.data
            setAuthTokens(result)
            console.log(result)
            console.log(result.token)
            console.log("---init authtokens-----")
            console.log(JSON.stringify(result))
            console.log("-----fin authtokens----")
            setUser(username)
            
            localStorage.setItem("authTokens", JSON.stringify(result))
            localStorage.setItem("user", username)
            
            history('/')
            swal.fire({
                title: "Login Successful",
                icon: "success",
                toast: true,
                timer: 6000,
                position:'top-right',
                timeProgressBar: true,
                showConfirmButton: false,

            })
        } else {
            history('/login')
            swal.fire({
                title: "Username or passowrd does not exists",
                icon: "error",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
           
                        })
        }
    }
 


    const registerUser = async (email, username, password) => {
        const body = JSON.stringify({email,username,password})
        const response = await TutorialDataService.signup(body)
        if(response.status === 201){
            history("/login")
            swal.fire({
                title: "Registration Successful, Login Now",
                icon: "success",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            })
        } else {
          
            swal.fire({
                title: "An Error Occured " + response.status,
                icon: "error",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            })
        }
    }
//----------create cutomer-------//
const createNewCustomer = async (data) => {
    const body = JSON.stringify(data)
    console.log("-------data customer------")
    console.log(data)
    console.log(body)
    console.log("--------fin data cutomer------")
    const response = await TutorialDataService.createCustomer(body)
    if(response.status === 201){
        history("/")
        swal.fire({
            title: "Registration customer Successful",
            icon: "success",
            toast: true,
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
        })
    } else {
      
        swal.fire({
            title: "An Error Occured " + response.status,
            icon: "error",
            toast: true,
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
        })
    }
}

//---------fin create customer----//

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem("authTokens")
        localStorage.removeItem("user")
        history("/")
       // TutorialDataService.logout()
        
        
        swal.fire({
            title: "YOu have been logged out...",
            icon: "success",
            toast: true,
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
        })
    }
    
const allInvoice = async () => {
    if (authTokens){
        const response = await TutorialDataService.getInvoice()
        if(response.status===200){
            return response.data
        } else{
            swal.fire({
                title: "Problem request not accepted",
                icon: "error",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
           
                        })

        }
    }
    else{
        history('/')
        swal.fire({
            title: "Problem authentification",
            icon: "error",
            toast: true,
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
       
                    })

    }
}
const detailInvoice = async (id) => {
    if (authTokens){
        const response = await TutorialDataService.getDetailInvoice(id)
        if(response.status===200){
            return response.data
        } else{
            swal.fire({
                title: "Problem request not accepted",
                icon: "error",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
           
                        })

        }
    }
    else{
        history('/')
        swal.fire({
            title: "Problem authentification",
            icon: "error",
            toast: true,
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
       
                    })

    }
}
//Function delete invoice
const deleteInvoice = async (id) => {
    if (authTokens){
        const response = await TutorialDataService.deleteDetailInvoice(id)
        console.log(response)
        if(response.status===204){
            window.location.reload();
            swal.fire({
                title: "Delete success...",
                icon: "success",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            })
        } else{
            swal.fire({
                title: "Problem request not accepted",
                icon: "error",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
           
                        })

        }
    }
    else{
        history('/login')
        swal.fire({
            title: "Problem authentification",
            icon: "error",
            toast: true,
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
       
                    })

    }
}


    const contextData = {
        user, 
        setUser,
        authTokens,
        setAuthTokens,
        registerUser,
        loginUser,
        logoutUser,
        allInvoice,
        detailInvoice,
        deleteInvoice,
        createNewCustomer,
    }
 
    useEffect(() => {
        if (authTokens) {
            //setUser(authTokens.token)
        }
        setLoading(false)
    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}

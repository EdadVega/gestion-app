import {useState}  from "react"
const Login = () =>{
    const [getUser,setUser] = useState("")
    const [getPass, setPass] = useState("")
    function validarInicioSesion(){
        if(getUser == "jaime" && getPass == "123"){
            console.log("Inicio de sesion correcta");
        } else{
            console.log("Incorrecto");
        }
    }
    return(
        <form action="">
            <section>
                <input onChange={(e)=> setUser(e.target.value)} placeholder="Usuer" type="text" />
                <input onChange={(e)=> setPass(e.target.value)} placeholder="Pass" type="password" />
            </section>
            <button onClick={validarInicioSesion} type="button">Iniciar sesion</button>
        </form>
    )
}


export default Login
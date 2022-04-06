import { useEffect, useState } from "react";

function Hijo ({parentSetter}) {

    const [ user, setUser ] = useState("");
    const [ password, setPassword ] = useState("");

    function changeUserHandler(ev) {
        setUser(ev.target.value)
    }

    function changePasswordHandler(ev) {
        setPassword(ev.target.value);
    }

    useEffect(
        ()=>{
            parentSetter({
                user,
                password
            })
        },
        [user,password]
    )

    return (
        <>
            <h2>Componente Hijo.</h2>
            <p>User: {user}</p>
            <p>Password: {password}</p>
            <input
                placeholder="usuario"
                value={user}
                onChange={changeUserHandler}
            />
            <input
                placeholder="contraseña"
                type="password" value={password}
                onChange={changePasswordHandler}
            />
        </>

    )
}

export default Hijo
import { useState } from "react";

function Hijo ({setter}) {

    const [ datosHijo, setDatosHijo ] = useState("");

    function changeDatosHandler(ev) {
        setDatosHijo(ev.target.value)
        setter(ev.target.value)
    }

    return (
        <>
            <h2>Componente Hijo.</h2>
            <p>Datos: {datosHijo}</p>
            <input placeholder="usuario" value={datosHijo} onChange={changeDatosHandler}/>
        </>

    )
}

export default Hijo
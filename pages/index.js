import { useState } from "react";


function Home(){
    return (
        <div>
            <h1>Home</h1>
            <Contador />
        </div>
    )
}

function Contador(){
    const [contador, setContador] = useState(1);
    function adicionarContador(){
        setContador(contador + 1);
    }
    return(
        
        <div class='bg-light w-100 d-block'>
            <div>{contador}</div>
            <button class='btn btn-primary' onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home;
"use client"

import { useState } from "react"

export function Button() {

    const [nome, setNome] = useState('Richard')

    function handleChangeName() {
        setNome('Programador')
    }


    return (
        <div>
            <button className="m-2 py-2 px-4 bg-zinc-900 text-white cursor-pointer" onClick={handleChangeName}>Alterar Nome</button>
            <h3>Nome: {nome}</h3>
        </div>
    )
}
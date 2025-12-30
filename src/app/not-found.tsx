import Link from "next/link";

export default function NotFound () {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center font-bold mt-4 text-6xl">Erro 404. Página não encontrada</h1>
            <p>Essa pagina que tentou acessar nao existe.</p>

            <Link className="hover:text-zinc-300" href="/">Voltar para a home</Link>
        </div>
    )
}
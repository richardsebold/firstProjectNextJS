

export const revalidate = 5;

export default function Home() {

  const randomNumber = Math.random() * 10

  return (
    <div>
      <h1>Olá Mundo</h1>

      <h2>Numero gerado: {randomNumber}</h2>
    </div>
  )
}
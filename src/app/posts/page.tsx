import Link from "next/link"

export interface PostProps {
  userId: number,
  id: number,
  title: string,
  body: string
}

interface ResponseProps {
  posts: PostProps[]
}

export const revalidate = 60


export default async function Posts() {

  const response = await fetch('https://dummyjson.com/posts')
  const data: ResponseProps = await response.json()

  async function handleFetchPosts() {
    'use server'

    const response = await fetch('https://dummyjson.com/posts')
    const data: ResponseProps = await response.json()

    console.log(data.posts)
  }

  async function handleSearchUsers(formData: FormData) {
    'use server'

    const userId = formData.get('userId')

    const response = await fetch(`https://dummyjson.com/posts/user/${userId}`, {
      cache: 'force-cache',
      next: {
        revalidate: 3600
      }
    })
    const data: ResponseProps = await response.json()

    console.log(data)
  }



  return (
    <div>
      <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Posts</h1>

      <button className="p-2 bg-zinc-400 cursor-pointer">
        Buscar posts
      </button>

      <form className="flex gap-2 my-4" action={handleSearchUsers}>
        <input type="text" placeholder="ID do usuario" className="border border-gray-200 p-2" name="userId" />
        <button className="bg-blue-500 text-white" type="submit">
          Buscar usuario
        </button>
      </form>

      <div className="flex flex-col gap-4 ">
        {data.posts.map(post => (
          <div key={post.id} className="bg-gray-200 p-4 rounded-md">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
            <Link className="text-blue-500" href={`/posts/${post.id}`}>
              Acessar detalhes
            </Link>
          </div>
        ))}
      </div>

    </div>
  )
}
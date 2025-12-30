import { resolve } from "path";
import { PostProps } from "../page";
import { PostInfo } from "./_components/post";
import { Suspense } from "react";
import Loading from "./loading";

export default async function DetailPost({
    params
}: {
    params: Promise<{id: string}>
}) {

    const { id } = await params


 return (
   <div className="flex flex-col items-center mt-20 mx-20 gap-4">
        <div className="bg-zinc-900 text-white p-4 rounded-2xl">
            <h1>Detalhes do post: {id}</h1>
        </div>

        <div className="bg-zinc-900 text-white items-center text-center p-2 rounded-2xl">
            <Suspense fallback={<Loading/>}>
                <PostInfo id={id}/>
            </Suspense>
        </div>
   </div>
 );
}
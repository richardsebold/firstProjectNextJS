import Link from "next/link";

export function Header() {
    return (
        <header className="flex px-2 py-4 bg-zinc-900 text-white">
            <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
                <div>NextJS</div>

                <nav className="flex items-center justify-center gap-2">
                    <ul className="flex flex-row gap-4">
                        <Link href="/">
                            <li className="hover:text-gray-600 cursor-pointer">Home</li>
                        </Link>
                        
                        <Link href="/posts">
                            <li className="hover:text-gray-600 cursor-pointer">Posts</li>
                        </Link>
                        
                        <Link href="/dashboard">
                            <li className="hover:text-gray-600 cursor-pointer">Dashboard</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
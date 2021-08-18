import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="md:relative select-none bg-purple-700 lg:flex lg:items-stretch w-full">
            <div className="flex flex-no-shrink items-stretch h-12">
                <Link href="/">
                    <a className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-purple-300">
                    Home
                    </a>
                </Link>
                <Link href="/"> 
                    <a className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-purple-300">
                    About
                    </a>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar

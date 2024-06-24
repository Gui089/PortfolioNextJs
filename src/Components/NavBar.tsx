import Image from "next/image";
import Link from "next/link";


const menuList = ["Início", "Projetos", "Habilidades"];

export const NavBar = () => {
    return (
        <nav className="flex place-content-around mt-3 ml-[50px]">
            <div className="flex">
                <h1 className="text-[#FFFF] text-4xl font-bold cursor-pointer">GC</h1>
                <span className="relative flex h-3 w-3 mr-10">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E2A771] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#bb7c42]"></span>
                </span>
            </div>
            
            <ul className="flex items-center ">
                {menuList.map(item => <li
                    className="text-[#FFFF] mr-5 cursor-pointer"
                    key={item}
                    >
                        {item}
                    </li>)}
                <div className="bg-[#FFF] h-[40px] w-0.5 flex items-center self-center ml-7"> </div>
            </ul>

            <ul className="flex items-center">
                <li className="mr-[80px]">
                    <Link href="https://www.linkedin.com/in/guilherme-coutinho-silva-95216a240/" target="_blank">
                    <Image 
                        width={30}
                        height={30}
                        src="/images/linkedin.png" alt={""}/>
                    </Link>
                    
                </li>
                <li className="mr-[80px]">
                    <Link href="https://github.com/Gui089?tab=overview&from=2024-06-01&to=2024-06-24" target="_blank">
                    <Image 
                    width={30}
                    height={30}
                    src="/images/github.png" alt={""} />
                    </Link>
                    </li>
            </ul>
        </nav>
    );
}
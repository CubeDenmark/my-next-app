export default function Header() {
    return (
        <section className="">
            <div className="flex justify-between m-4">
                <div className="">
                    <h1 className="text-teal-400 ">D. Cube</h1>
                </div>
                <div className="flex flex-wrap w-150 justify-between">
                    <h2 className="text-white cursor-pointer hover:text-teal-400"><a href="#home">Home</a></h2>
                    <h2 className="text-white cursor-pointer hover:text-teal-400"><a href="#about">About</a></h2>
                    <h2 className="text-white cursor-pointer hover:text-teal-400"><a href="#projects">Projects</a></h2>
                    <h2 className="text-white cursor-pointer hover:text-teal-400"><a href="#skills">Skills</a></h2>
                    <h2 className="text-white cursor-pointer hover:text-teal-400"><a href="#contact">Contact</a></h2>
                </div>
            </div>
        </section>  
    )
}
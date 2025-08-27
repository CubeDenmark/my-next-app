
export default function Skills() {
    return (
         <section className="w-auto h-auto" id="skills">  
            <div className="flex flex-wrap justify-center mt-30">
                <h1 className="text-3xl font-mono text-teal-400">Skills</h1>
            </div>
            <div className="flex flex-wrap justify-around text-5xl text-white pb-10 pt-10 h-60">
                <ul className="flex flex-col justify-around">
                    <li><h3 className="text-white font-mono xl:text-3xl lg:text-2xl text-[17px] text-justify">Laravel</h3></li>
                    <li><h3 className="text-white font-mono xl:text-3xl lg:text-2xl text-[17px] text-justify">HTML</h3></li>
                    <li><h3 className="text-white font-mono xl:text-3xl lg:text-2xl text-[17px] text-justify">CSS</h3></li>
                    <li><h3 className="text-white font-mono xl:text-3xl lg:text-2xl text-[17px] text-justify">JavaScript</h3></li>
                </ul>
                <ul className="flex flex-col justify-around">
                    <li><h3 className="text-white font-mono xl:text-3xl lg:text-2xl text-[17px] text-justify">Docker basics</h3></li>
                    <li><h3 className="text-white font-mono xl:text-3xl lg:text-2xl text-[17px] text-justify">Jenkins basics</h3></li>
                    <li><h3 className="text-white font-mono xl:text-3xl lg:text-2xl text-[17px] text-justify">Linux OS</h3></li>
                    <li><h3 className="text-white font-mono xl:text-3xl lg:text-2xl text-[17px] text-justify">Git</h3></li>
                </ul>
                <ul className="flex flex-col justify-around">
                    <li><h3 className="text-white font-mono xl:text-3xl lg:text-2xl text-[17px] text-justify">MySQL</h3></li>
                    <li><h3 className="text-white font-mono xl:text-3xl lg:text-2xl text-[17px] text-justify">TailWindCSS</h3></li>
                    <li><h3 className="text-white font-mono xl:text-3xl lg:text-2xl text-[17px] text-justify">Bootstrap</h3></li>
                    <li><h3 className="text-white font-mono xl:text-3xl lg:text-2xl text-[17px] text-justify">JavaScript</h3></li>
                </ul>
            </div>
        </section>
    )
}
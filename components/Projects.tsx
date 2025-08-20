import Image from "next/image"
import Profile from "../public/images/profile.jpg"
export default function Projects() {
    return (
        <section className="w-auto h-300">  
            <div className="flex flex-wrap justify-center mt-30">
                <h1 className="text-3xl font-mono text-teal-400">Projects</h1>
            </div>
            <div className="flex flex-wrap justify-evenly p-10">
                <div className="rounded-2xl mt-2 h-80 w-120 border-2 border-teal-400">
                    <Image className="rounded-t-2xl w-full h-50"
                            src={Profile}
                            alt="Test Image"
                    />
                    <h3 className="text-teal-400 font-bold font-mono text-[18px] pl-2 pt-1">
                        Agrikultur'App 
                    </h3>
                    <p className="text-white">Tech Stack: <strong>LAMP</strong></p>
                    {/* <div className="flex flex-wrap justify-around">
                        <ul className="text-white text-[10px]">
                            <li>Laravel</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                        <ul className="text-white text-[10px]">
                            <li>Laravel</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                        <ul className="text-white text-[10px]">
                            <li>Laravel</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>                     */}
                    <p className="text-white pl-2">
                        An Auction Platform for Farmers selling their
                        Produce directly to Consumers, Elliminating 
                        middlemen, thererfore lowering prices. 
                    </p>
                </div>
                <div className="rounded-2xl mt-2 h-80 w-120 border-2 border-teal-400">
                    <Image className="rounded-t-2xl w-full h-50"
                            src={Profile}
                            alt="Test Image"
                    />
                </div>
                <div className="rounded-2xl mt-2 h-80 w-120 border-2 border-teal-400">
                    <Image className="rounded-t-2xl w-full h-50"
                            src={Profile}
                            alt="Test Image"
                    />
                </div>
                <div className="rounded-2xl mt-2 h-80 w-120 border-2 border-teal-400">
                    <Image className="rounded-t-2xl w-full h-50"
                            src={Profile}
                            alt="Test Image"
                    />
                </div>
                <div className="rounded-2xl mt-2 h-80 w-120 border-2 border-teal-400">
                    <Image className="rounded-t-2xl w-full h-50"
                            src={Profile}
                            alt="Test Image"
                    />
                </div>
                <div className="rounded-2xl mt-2 h-80 w-120 border-2 border-teal-400">
                    <Image className="rounded-t-2xl w-full h-50"
                            src={Profile}
                            alt="Test Image"
                    />
                </div>
            </div>
        </section>
    )
}
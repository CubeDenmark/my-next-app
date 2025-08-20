import Image from "next/image"
import Profile from "../public/images/profile.jpg"
export default function About() {
    return (
        <section className="w-auto h-150">  
                <div className="flex flex-wrap justify-center mt-30">
                    <h1 className="text-3xl font-mono text-teal-400">About</h1>
                </div>
            <div className="flex flex-wrap justify-evenly mt-20">
                <div>
                    <Image 
                        className="w-70 h-100"
                        src={Profile}
                        alt="Another Image of you"
                    />
                </div>
                <div>
                     <p className="w-150 text-white font-mono xl:text-3xl lg:text-2xl text-[17px] text-justify">
                        AI changes many things including how Web Developer works on evey projects.
                        We use AI on our daily task even with just one single code syntax that we
                        forgot. Most of my projects have AI intervention including this portfolio
                        but it doesn't mean I am fully relient on AI. I'm an Aspiring Full-Stack Developer 
                        and DevOps Engineer, codes, syntaxes, rules, etc needed memmorization, that is why 
                        I need AI.
                    </p>
                </div>
            </div>
        </section>
    )
}
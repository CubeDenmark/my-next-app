import Image from "next/image"
import profile from "../../public/images/profile.jpg"
export default function Home() {
    return (
        <section className="w-auto h-screen mb-100" id="home">
             <div className="h-[15%]">

            </div>
            <div className="flex flex-wrap justify-center items-center ">
                <div>
                    <Image 
                        width={250} 
                        height={0} 
                        src={profile} 
                        alt="Profile Picture"
                        className="rounded-full border-4 border-teal-400"
                    />
                </div>
                <div className="ml-10 mt-10">
                    <p className="text-white font-mono xl:text-3xl lg:text-2xl text-[17px]">
                        Hi, I'm 
                        <strong className="font-mono xl:text-3xl bg-gradient-to-r from-red-500 to-teal-400 bg-clip-text text-transparent"> Denmark S. Cube </strong>
                        <br />Aspiring Full-Stack Web Developer
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap justify-evenly mt-30 p-10">
                <p className="w-150 text-white font-mono xl:text-3xl lg:text-2xl text-[17px] text-justify">
                    This Website is 25% made by AI, and has different 
                    versions depending on how much AI generated code used. 
                    Changing the percentage using the dropdown button beside 
                    the percentage number on the Paragraph will change the site.
                </p>
                 <p className="w-150 text-white font-mono xl:text-3xl lg:text-2xl text-[17px] text-justify">
                    AI changes many things including how Web Developer works on evey projects.
                    We use AI on our daily task even with just one single code syntax that we
                    forgot. Most of my projects have AI intervention including this portfolio
                    but it doesn't mean I am fully relient on AI. I'm an Aspiring Full-Stack Developer 
                    and DevOps Engineer, codes, syntaxes, rules, etc needed memmorization, that is why 
                    I need AI.
                </p>
            </div>
        </section>
    )
}
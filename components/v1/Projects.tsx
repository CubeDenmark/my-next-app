import Image from "next/image"
import Agrikulturapp from "../../public/images/projects-img/agrikulturapp/landing-page.png"
import Agriappv2 from "../../public/images/projects-img/agriappv2/landing-page.png"
import Edutrack from "../../public/images/projects-img/edutrack/landing-page.png"
import Pawtrack from "../../public/images/projects-img/pawtrack/landing-page.png"
import Auctionear from "../../public/images/projects-img/auctionear/landing-page.png"
import AMS from "../../public/images/projects-img/ams/landing-page.png"
// import Profile from "../../public/images/profile.jpg"
export default function Projects() {
    return (
        <section className="w-auto h-auto" id="projects">  
            <div className="flex flex-wrap justify-center mt-30">
                <h1 className="text-3xl font-mono text-teal-400">Projects</h1>
            </div>
            <div className="flex flex-wrap justify-evenly p-10">
                <div className="rounded-2xl mt-2 w-120 border-2 border-teal-400">
                    <Image className="rounded-t-2xl w-full h-50"
                            src={Agrikulturapp}
                            alt="Test Image"
                    />
                    <h3 className="text-teal-400 font-bold font-mono text-[18px] pl-2 pt-1">
                        Agrikultur&apos;App 
                    </h3>
                    <p className="text-white pl-4">Tech Stack: <strong>LAMP</strong></p>
                    <p className="text-white pl-2 indent-10">
                        An Auction Platform for Farmers selling their
                        Produce directly to Consumers, Elliminating 
                        middlemen, thererfore lowering prices. 
                    </p>
                </div>
                <div className="rounded-2xl mt-2 w-120 border-2 border-teal-400">
                    <Image className="rounded-t-2xl w-full h-50"
                            src={Edutrack}
                            alt="Test Image"
                    />
                    <h3 className="text-teal-400 font-bold font-mono text-[18px] pl-2 pt-1">
                        Edutrack 
                    </h3>
                    <p className="text-white pl-4">Tech Stack: <strong>LAMP</strong></p>
                    <p className="text-white pl-2 indent-10">
                        App for monitoring Student&apos;s performance like Grades, 
                        Quizes, Exams, behavior, and General average of Student.
                    </p>
                </div>
                <div className="rounded-2xl mt-2 w-120 border-2 border-teal-400">
                    <Image className="rounded-t-2xl w-full h-50"
                            src={Pawtrack}
                            alt="Test Image"
                    />
                    <h3 className="text-teal-400 font-bold font-mono text-[18px] pl-2 pt-1">
                        Pawtrack
                    </h3>
                    <p className="text-white pl-4">Tech Stack: <strong>LAMP</strong></p>
                    <p className="text-white pl-2 indent-10">
                        Shopping pets necessities and scheduling for pet 
                        services like grooming or deworming.  
                    </p>
                </div>
                <div className="rounded-2xl mt-2 w-120 border-2 border-teal-400">
                    <Image className="rounded-t-2xl w-full h-50"
                            src={Auctionear}
                            alt="Test Image"
                    />
                    <h3 className="text-teal-400 font-bold font-mono text-[18px] pl-2 pt-1">
                        Auctionear
                    </h3>
                    <p className="text-white pl-4">Tech Stack: <strong>LAMP</strong></p>
                    <p className="text-white pl-2 indent-10">
                        Auction you secondhand vehicle 
                    </p>
                </div>
                <div className="rounded-2xl mt-2 w-120 border-2 border-teal-400">
                    <Image className="rounded-t-2xl w-full h-50"
                            src={AMS}
                            alt="Test Image"
                    />
                    <h3 className="text-teal-400 font-bold font-mono text-[18px] pl-2 pt-1">
                        QR Code Attendance ManagementS System 
                    </h3>
                    <p className="text-white pl-4">Tech Stack: <strong>LAMP</strong></p>
                    <p className="text-white pl-2 indent-10">
                        Utilizing QR code technology for taking students attendance. Dashboard and other essentials 
                        for managing students attendance like exporting PDF or Excel file.
                    </p>
                </div>
                <div className="rounded-2xl mt-2 w-120 border-2 border-teal-400">
                    <Image className="rounded-t-2xl w-full h-50"
                            src={Agriappv2}
                            alt="Test Image"
                    />
                    <h3 className="text-teal-400 font-bold font-mono text-[18px] pl-2 pt-1">
                        AgriApp
                    </h3>
                    <p className="text-white pl-4">Tech Stack: <strong>Nextjs, Supabase, TailwindCSS</strong></p>
                    <p className="text-white pl-2 indent-10">
                        Agrikultur&apos;App version 2 - Modern design, architecture, technology 
                        providing faster response time, user friendly design, and user-experience. 
                        Farmers can sell their produce more easily, consumers will be able to 
                        see realtime bidding.
                    </p>
                </div>
            </div>
        </section>
    )
}
import Image from "next/image"
import Profile from "../../public/images/profile.jpg"
export default function Projects() {
    return (
        <section className="w-auto h-auto" id="projects">  
            <div className="flex flex-wrap justify-center mt-30">
                <h1 className="text-3xl font-mono text-teal-400">Projects</h1>
            </div>
            <div className="flex flex-wrap justify-evenly p-10">
                <div className="rounded-2xl mt-2 w-120 border-2 border-teal-400">
                    <Image className="rounded-t-2xl w-full h-50"
                            src={Profile}
                            alt="Test Image"
                    />
                    <h3 className="text-teal-400 font-bold font-mono text-[18px] pl-2 pt-1">
                        Agrikultur'App 
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
                            src={Profile}
                            alt="Test Image"
                    />
                    <h3 className="text-teal-400 font-bold font-mono text-[18px] pl-2 pt-1">
                        Edutrack 
                    </h3>
                    <p className="text-white pl-4">Tech Stack: <strong>LAMP</strong></p>
                    <p className="text-white pl-2 indent-10">
                        App for monitoring Student's performance like Grades, 
                        Quizes, Exams, behavior, and General average of Student.
                    </p>
                </div>
                <div className="rounded-2xl mt-2 w-120 border-2 border-teal-400">
                    <Image className="rounded-t-2xl w-full h-50"
                            src={Profile}
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
                            src={Profile}
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
                            src={Profile}
                            alt="Test Image"
                    />
                    <h3 className="text-teal-400 font-bold font-mono text-[18px] pl-2 pt-1">
                        Agrikultur'App 
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
                            src={Profile}
                            alt="Test Image"
                    />
                    <h3 className="text-teal-400 font-bold font-mono text-[18px] pl-2 pt-1">
                        Agrikultur'App 
                    </h3>
                    <p className="text-white pl-4">Tech Stack: <strong>LAMP</strong></p>
                    <p className="text-white pl-2 indent-10">
                        An Auction Platform for Farmers selling their
                        Produce directly to Consumers, Elliminating 
                        middlemen, thererfore lowering prices. 
                    </p>
                </div>
            </div>
        </section>
    )
}
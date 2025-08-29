import profile from "../../public/images/profile.jpg";
import Image from "next/image";
export default function About() {
  return (

    <section className="w-auto h-auto" id="about" style={{
        background:
          "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
      }}>
            <div className="flex flex-wrap justify-center items-center">
                   
                    <div className="m-10">
                        <div className="max-w-xl space-y-3 md:mx-auto">
                            <p className="text-gray-200 text-3xl font-semibold sm:text-4xl ">
                                Build the future with us
                            </p>
                            <p className="text-gray-300">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
                                cupidatat non proident.
                            </p>
                        </div>
                    </div>
                     <div>
                        <div className="mt-4 mb-10">

                                <div className="flex flex-col items-center gap-4">
                                    <div className="relative my-4">
                                        <div className="absolute -inset-2">
                                            <div className="w-70 h-full max-w-sm mx-auto lg:mx-0 opacity-70 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
                                        </div>
                                        <Image
                                            src={profile}
                                            className="relative object-cover shrink-0 h-70 w-70 z-10 rounded-xl"
                                            alt="Profile"
                                        />
                                        </div>
                                </div>
                    
                        </div>
                    </div>
            </div>
    </section>
  );
};



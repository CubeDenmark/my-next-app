import Image from 'next/image';
import { projects } from '@/src/assets/images';
import { Button } from '@/vv/components/ui/button';
export default function Projects() {

  return (
    <section id="projects" className="relative pt-30 py-14 bg-white" style={{
        background:
          "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
      }}>
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="text-gray-200 text-3xl font-semibold sm:text-4xl">
            Proven digital solutions
            {/* Hear from our customers */}
          </h3>
          <p className="mt-3 text-gray-300">
            A curated selection of web applications and systems developed to address
            real-world business challenges. Each project reflects a focus on functionality, 
            system structure, and performance, with solutions tailored to specific operational needs.
            <br /><br />
            The projects demonstrate experience in workflow automation, data-driven applications,
            and end-to-end system development, from planning and implementation to deployment.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="relative">
                        <Image
                        className="w-full h-48 object-cover"
                        src={item.imageSrc}
                        alt="Project preview"
                        width={600}
                        height={360}
                        />
                        {/* <div className="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">
                        New
                        </div>
                        <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">
                        3 min read
                        </div> */}
                    </div>
                    <div className="p-8" style={{
                                                  background:
                                                    "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
                                                }}>
                        <div className="">
                            <div className="text-lg font-medium text-gray-800 mb-2">{item.projectName}</div>
                            <p className="text-gray-500 text-sm">
                               {item.description}
                            </p>
                        </div>
                        <a href="#" className="float-right">
                          <Button className='border-1 my-2 text-blue-400'>Demo</Button>
                          
                            {/* <Image src="https://img.icons8.com/flat_round/24/000000/share--v1.png" alt="Share icon" width={24} height={24} /> */}
                            </a>
                            <a href="#" className="float-right mr-3">
                          <Button className='border-1 my-2 text-blue-400'>Repo</Button>
                            {/* <Image src="https://img.icons8.com/flat_round/24/000000/hearts.png" alt="Heart icon" width={24} height={24} /> */}
                        </a>
                    </div>          
                </div>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="absolute top-0 w-full h-[350px]"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}
      ></div>
    </section>
  );
};

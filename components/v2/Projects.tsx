export default function Projects() {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin escobar",
      title: "Founder of meta",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      name: "Simon andrew",
      title: "Software engineer",
      quote:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Micheal worin",
      title: "Product designer",
      quote:
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.",
    },
     {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin escobar",
      title: "Founder of meta",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      name: "Simon andrew",
      title: "Software engineer",
      quote:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Micheal worin",
      title: "Product designer",
      quote:
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.",
    },
  ];

  return (
    <section className="relative py-14 bg-white">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Hear from our customers
          </h3>
          <p className="mt-3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est
            hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna
            lorem, euismod volutpat arcu volutpat et.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="relative">
                        <img
                        className="w-full h-48 object-cover"
                        src="https://via.placeholder.com/600x360"
                        />
                        {/* <div className="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">
                        New
                        </div>
                        <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">
                        3 min read
                        </div> */}
                    </div>
                    <div className="p-8">
                        <div className="">
                            <div className="text-lg font-medium text-gray-800 mb-2">Title</div>
                            <p className="text-gray-500 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non
                            aliquam quam massa id lacus.
                            </p>
                        </div>
                        <a href="#" className="float-right">
                            <img src="https://img.icons8.com/flat_round/24/000000/share--v1.png" />
                            </a>
                            <a href="#" className="float-right mr-3">
                            <img src="https://img.icons8.com/flat_round/24/000000/hearts.png" />
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

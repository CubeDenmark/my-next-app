import Progress from "./components/Progress";

export default function Skills() {
  const features = [
     {
      icon: (
       <svg 
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 48 48"
          strokeWidth={1.5}
          className="w-10 h-10"
      >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path 
              fill-rule="evenodd" 
              clip-rule="evenodd" 
              d="M47.982 23.453c.012.044.018.089.018.134v7.071a.516.516 0 0 1-.26.448l-5.934 3.417v6.772a.517.517 0 0 1-.258.447L29.16 48.874c-.029.016-.06.026-.09.037-.012.004-.023.011-.035.015a.519.519 0 0 1-.264 0c-.015-.004-.027-.012-.041-.017-.028-.01-.058-.02-.085-.035l-12.386-7.132a.517.517 0 0 1-.259-.447V20.082c0-.046.006-.091.018-.135.004-.015.013-.028.018-.043.01-.027.019-.055.033-.08.01-.017.024-.03.035-.046.015-.02.029-.042.046-.06.015-.015.034-.026.051-.039.019-.015.035-.032.057-.044l6.194-3.566a.517.517 0 0 1 .515 0l6.194 3.566c.021.013.039.029.057.044.017.013.036.024.05.038.019.02.032.04.047.061.011.016.026.029.035.046.015.025.023.053.034.08.005.015.014.028.017.044a.52.52 0 0 1 .019.134v13.25l5.16-2.972v-6.773a.52.52 0 0 1 .019-.134c.004-.016.012-.03.018-.044.01-.027.019-.055.033-.08.01-.017.024-.03.035-.046.015-.02.028-.042.046-.06.015-.015.034-.025.05-.038.02-.016.037-.033.057-.045l6.195-3.566a.516.516 0 0 1 .515 0l6.194 3.566c.022.013.038.03.058.044.016.013.034.024.05.039.017.018.03.04.046.06.011.016.025.03.034.046.015.025.024.053.034.08.006.015.014.028.018.044zm-1.014 6.907v-5.88L44.8 25.728l-2.994 1.724v5.88l5.162-2.972zm-6.194 10.637v-5.884l-2.945 1.682-8.41 4.8v5.94l11.355-6.538zM17.032 20.975v20.022l11.355 6.537v-5.938l-5.932-3.357-.002-.002-.003-.001c-.02-.012-.036-.028-.055-.043-.016-.012-.035-.023-.049-.037l-.001-.002c-.017-.016-.029-.036-.043-.054-.013-.017-.028-.032-.038-.05l-.001-.002c-.012-.02-.019-.043-.027-.065-.009-.019-.02-.037-.025-.058-.006-.025-.007-.05-.01-.076-.003-.02-.008-.038-.008-.058V23.946L19.2 22.222l-2.168-1.247zm5.678-3.863-5.16 2.97 5.159 2.97 5.16-2.97-5.16-2.97h.001zm2.684 18.537 2.993-1.723V20.975l-2.167 1.247-2.994 1.724v12.951l2.168-1.248zM41.29 20.617l-5.16 2.97 5.16 2.97 5.158-2.97-5.158-2.97zm-.517 6.835-2.994-1.724-2.167-1.248v5.88l2.993 1.723 2.168 1.249v-5.88zm-11.872 13.25 7.568-4.32 3.783-2.16-5.156-2.968-5.936 3.418-5.41 3.115 5.151 2.915z" 
              fill="#FF2D20">
            </path>
          </g>
        </svg>
      ),
      title: "Laravel",
      desc: "A Web application framework with expressive, elegant syntax. Laravel strives to provide an amazing developer experience while providing powerful features such as thorough dependency injection, an expressive database abstraction layer, queues and scheduled jobs, unit and integration testing, and more.",
      progress: 25,
    },
    {
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 48 48"
          strokeWidth={1.5}
          className="w-10 h-10"
        >
          <path 
            fill="#212121" 
            d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z">
          </path>
        </svg>
      ),
      title: "Next.js",
      desc: "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations. It also automatically configures lower-level tools like bundlers and compilers. You can instead focus on building your product and shipping quickly.",
      progress: 50,
    },
    {
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none"
          viewBox="0 0 48 48"
          strokeWidth={1.5}
          className="w-10 h-10"
        >
          <polygon 
            fill="#81c784" 
            points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8">
          </polygon>
          <polygon 
            fill="#455a64" 
            points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8">
          </polygon>
        </svg>
      ),
      title: "Vue.js",
      desc: "Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative, component-based programming model that helps you efficiently develop user interfaces of any complexity.",
      progress: 25,
    },
    
    {
      icon: (
        <svg 
          role="img" 
          viewBox="0 0 24 24" 
          className="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg">
            <title>Express</title>
            <path 
            d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"/>
        </svg>
      ),
      title: "Express.js",
      desc: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.",
      progress: 100,
    },
    {
      icon: (
        <svg 
            fill="none"
            viewBox="0 0 32 32"
            className="w-9 h-9"
            xmlns="http://www.w3.org/2000/svg">
              <g  id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> 
                <path 
                    d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" 
                    fill="#53C1DE">
                </path> 
                <path 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" 
                    fill="#53C1DE">
                </path> 
              </g>
        </svg>
      ),
      title: "React.js",
      desc: "ReactJS is a component-based JavaScript library used to build dynamic and interactive user interfaces. It simplifies the creation of single-page applications (SPAs) with a focus on performance and maintainability.",
      progress: 75,
    },
    {
      icon: (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
                     fill="none"
          viewBox="0 0 48 48"
          strokeWidth={1.5}
          className="w-10 h-10"
        >
            <path 
              fill="#f50057" 
              d="M24.5,32.88c0,0-0.01-0.04-0.02-0.12C24.5,32.84,24.5,32.88,24.5,32.88z"
            >           
            </path>
            <path 
              fill="#f50057" 
              d="M27.375,8.625c0,0-0.375-1.375,0.125-2.5s0.5-1.875-0.5-3c2-0.125,2.75,1.25,2.75,1.25l0.025,0.159 c0.118,0.766-0.278,1.494-0.946,1.888C28.219,6.781,27.563,7.437,27.375,8.625z"
            >
            </path>
            <path 
              fill="#f50057" 
              d="M41.63,36.24c0.02-0.21,0.34-3.04-0.38-4.36c-1.5,4.24-3,8.12-7.37,10.87 c0.62-1.25,1.62-3.25,2.62-6.25c-3,4-9,8-13.5,8.25c3.04-1.68,4.75-3.84,5.5-5.25c0,0-1.75,0.5-3.88,0.75 c2.88-1.75,4.88-4.87,3.88-9.75c-2,6.25-4.75,8.25-8.38,8.62c-3.62,0.38-6.87-1.5-6.87-1.5l1.25-0.12c0,0-3.25-2.5-2.12-5.75 c0.05-0.16,0.11-0.31,0.18-0.45c0.82-1.82,3.61-0.9,3.32,1.07v0.01c0,0,0.87,2.37,3.24,1.74c0.76-1.24,1.26-2.5,1.26-2.5l0.37,1.63 c0,0,1.75-0.75,1.75-2.13c1.5,0.57,1.88,1.28,1.97,1.59c-0.26-1.4-2.52-11.03-14.49-10.89l-2.09,1.94 c-0.14,0.13-0.36,0.02-0.34-0.16L7.71,22l0.14-0.14c-0.04,0.01-0.09,0-0.13,0L7.71,22l-0.82,0.76c-0.14,0.13-0.36,0.02-0.34-0.16 l0.1-1.02c-1.74-0.74-1.9-2.7-1.9-2.7S2.58,18.27,3.5,15.5C4,14,5.2,13.85,5.71,13.97c0.65,0.15,1.32,0.16,1.94-0.09 c0.9-0.36,2.05-1.05,2.85-2.38C12,9,14.25,8,19.12,8c6.45,0,9.05,1.98,9.35,2.22c-0.18-0.21-1.27-1.66,1.03-3.84 c2.27-2.16,1.86-2.67,1.77-2.75c0.34,0.1,4.75,1.6,5.23,7.37c0.5,6-6.5,7.25-6.5,7.25s9,1.75,9.12-6.75 c1.76,1,5.38,4.75,5.88,12.88C45.49,32.26,41.84,36.03,41.63,36.24z"
            >
            </path>
            <path 
              fill="#f50057" 
              d="M7.85,21.86L7.71,22l0.01-0.14C7.76,21.86,7.81,21.87,7.85,21.86z"
            >
            </path>
            <path 
              fill="#f50057" 
              d="M7.85,21.86L7.71,22l0.01-0.14C7.76,21.86,7.81,21.87,7.85,21.86z"
            >
            </path>
        </svg> 
      ),
      title: "Nest.js",
      desc: "Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).",
      progress: 100,
    },
  ];

  return (
    <section id="skills" className="pt-30 py-14 bg-white" style={{
        background:
          "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
      }}>
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-2xl mx-auto sm:text-center">
          <div className="relative z-10">
            <h3 className="text-gray-200 text-3xl font-semibold sm:text-4xl">
              The technology behind the systems
              {/* Skills & Technologies */}
              {/* Let’s help power your SaaS */}
            </h3>
            <p className="mt-3 text-gray-300">
              A comprehensive set of tools and technologies used to develop modern,
              secure, and scalable web applications. Experience spans both frontend
              and backend development, with a focus on clean integration between user
              interfaces, business logic, and data layers.
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              congue, nisl eget molestie varius, enim ex faucibus purus. */}
            </p>
          </div>
          <div
            className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
            }}
          ></div>
        </div>

        <h5 className="text-gray-200 text-3xl font-semibold sm:text-4xl mt-4">
          Frameworks
        </h5>

        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="bg-white space-y-3 p-4 border rounded-lg border-b-gray-950"
                style={{
                        background:
                          "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
                      }}
              >
                <div className="text-indigo-600 pb-3">{item.icon}</div>
                <h4 className="text-lg text-gray-200 font-semibold">
                  {item.title}
                </h4>
                <p className="text-gray-300">{item.desc}</p>
                <Progress progress={item.progress} />
              </li>
            ))}
          </ul>
         
        </div>
      </div>
    </section>
  );
};

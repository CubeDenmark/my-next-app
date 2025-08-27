export default function Contacts() {
    return (
        <section className="" id="contact">
            <div className="flex flex-wrap justify-center mt-30">
                <h1 className="text-3xl font-mono text-teal-400">Contact</h1>
            </div>
            <div className="flex justify-center w-auto h-200 pt-10">             
                <div className="p-9 w-90 h-110 rounded-2xl border-1 border-gray-400">
                    <div>
                        <label htmlFor="name" className="text-white">Name </label>
                        <input id="name" type="text" className=" w-2xs h-9 focus:outline-none text-white border-1 border-teal-400 rounded-md"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-white">Email </label>
                        <input id="email" type="email" className="w-2xs h-9 focus:outline-none text-white border-1 border-teal-400 rounded-md"/>          
                    </div>  
                    <div>
                        <label htmlFor="content" className="text-white">Message</label>
                        <textarea className="h-50 w-72 focus:outline-none text-white border-1 border-teal-400 rounded-md" name="content" id="content"></textarea>
                    </div>    
                    <div>
                        
                    </div>         
                </div>
            </div>
        </section>
    )
}
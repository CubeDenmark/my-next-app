export default function Header() {
    return (
        <div className="flex justify-between m-4">
            <div className="">
                <h1 className="text-teal-400 ">D. Cube</h1>
            </div>
            <div className="flex flex-wrap w-60 justify-between">
                <h2 className="text-white cursor-pointer hover:text-teal-400">Home</h2>
                <h2 className="text-white cursor-pointer hover:text-teal-400">About</h2>
                <h2 className="text-white cursor-pointer hover:text-teal-400">Projects</h2>
            </div>
        </div>
    )
}
import Profile from "../../../public/images/profile.jpg";
import Image from "next/image";
export default function ProfileCard() {

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center gap-4">
                <div className="relative my-4">
                    <div className="absolute -inset-2">
                        <div className="w-70 h-full max-w-sm mx-auto lg:mx-0 opacity-70 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
                    </div>
                    <Image
                        src={Profile}
                        className="relative object-cover shrink-0 h-70 w-70 z-10 rounded-xl"
                        alt="Profile"
                    />
                    </div>

                <p className="text-2xl font-bold text-white">Hi, I&apos;m Denmark S. Cube</p>

                    <div className="text-gray-400">Aspiring Full-Stack Web Developer</div>
            </div>
        </div>
    )
}
import Image from "next/image"
import profile from "../public/images/profile.jpg"
export default function Main() {
    return ( 
        <div>
            <Image 
                width={250} 
                height={0} 
                src={profile} 
                alt="Profile Picture"
                className="rounded-full border-2 border-teal-400"
            />
        </div>
    )
}
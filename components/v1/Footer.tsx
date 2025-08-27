import Github from "../../public/images/github.png"
import linkedin from "../../public/images/linkedin-orig.png"
import facebook from "../../public/images/facebook.png"
import Image from "next/image"

export default function Footer() {
    return (
        <section className="flex flex-wrap justify-center border-t-1 border-amber-50">
            <div className="flex flex-wrap justify-center w-70 pt-2">
                <div className="flex justify-around w-30">
                    <a href="https://github.com/CubeDenmark" title="linkedin icons">
                        <Image 
                            className="h-[20px] w-[20px]"
                            alt="Test"
                            src={Github}                     
                        />
                    </a>
                    <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" title="linkedin icons">
                        <Image 
                            className="h-[20px] w-[20px]"
                            alt="Test"
                            src={linkedin}                     
                        />
                    </a>
                    <a href="https://www.facebook.com/makxies24" title="linkedin icons">
                        <Image 
                            className="h-[20px] w-[20px]"
                            alt="Test"
                            src={facebook}                     
                        />
                    </a>
                </div>
                <div className="flex flex-wrap w-70 justify-between">
                    <p className="text-white font-bold ">© 2025 copyright all right reserved</p>
                </div>
            </div>     
        </section>
    )
}
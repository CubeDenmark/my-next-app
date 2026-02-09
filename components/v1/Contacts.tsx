"use client"

import { useState, useRef } from "react"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import { WEB3FORMS_KEY, HCAPTCHA_KEY } from "@/lib/web_captcha";

export default function Contact() {
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const captchaRef = useRef<HCaptcha>(null)
  const [formData, setFormData] = useState({
      email: "",
      message: "",
  })


  const onHCaptchaChange = (token: string | null) => {
    setCaptchaToken(token)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!captchaToken) {
      alert("Please verify the CAPTCHA")
      return
    }

    const formData = new FormData(event.target as HTMLFormElement)
    formData.append("access_key", WEB3FORMS_KEY)
    formData.append("captcha", captchaToken)
    // formData.append("h-captcha-response", captchaToken)

    if (loading) return
    setLoading(true)

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    console.log("Form submitted:", formData)

    const data = await response.json()
    setResult(data.success ? "success" : "error")

    if (data.success) {
      setLoading(false)
      if (captchaRef.current) {
        captchaRef.current.resetCaptcha()
      }
      setCaptchaToken(null)
      setFormData({email: "", message: "" })
    } else {
      alert("Something went wrong. Try again.")
      setLoading(false)
      if (captchaRef.current) {
        captchaRef.current.resetCaptcha()
      }
      setCaptchaToken(null)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
    return (
        <section className="" id="contact">
            <div className="flex flex-wrap justify-center mt-30">
                <h1 className="text-3xl font-mono text-teal-400">Contact</h1>
            </div>
            <div className="flex justify-center w-auto h-200 pt-10">             
                <div className="p-9 w-90 h-125 rounded-2xl border-1 border-gray-400">
                            <form
                                onSubmit={handleSubmit}                      
                            >
                                <div>
                                    <label htmlFor="email" className="text-white">Email </label>
                                    <input 
                                        id="email" 
                                        type="email" 
                                        name="email"
                                        className="w-2xs h-9 focus:outline-none text-white border-1 border-teal-400 rounded-md"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />          
                                </div>  
                                <div>
                                    <label htmlFor="message" className="text-white">Message</label>
                                    <textarea 
                                        className="h-50 w-72 focus:outline-none text-white border-1 border-teal-400 rounded-md" 
                                        name="message" 
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    >                              
                                    </textarea>
                                </div>  

                                <div className="flex justify-center mt-4">
                                    <HCaptcha
                                        ref={captchaRef}
                                        sitekey={HCAPTCHA_KEY}
                                        reCaptchaCompat={false}
                                        onVerify={onHCaptchaChange}
                                    />
                                </div>
                    
                    
                                <div className="text-center mt-4">
                                    <button 
                                        disabled={!captchaToken || loading}
                                        className="text-white bg-teal-600 border-2 border-teal-600 rounded-2xl p-2 hover:bg-teal-400 hover:border-teal-400 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Send Message
                                    </button>
                                </div>
                                {result === "success" && (
                                    <div 
                                        className="bg-teal-600 px-4 py-3 shadow-md mt-7 rounded-2xl border-teal-600 text-white"
                                    >
                                        Message sent successfully
                                    </div>
                                )}

                                {result === "error" && (
                                   <div 
                                        className="bg-red-100 px-4 py-3 shadow-md mt-7 rounded-2xl border-red-500 text-red-900"
                                    >
                                        Error sending message, try again later
                                    </div>
                                )}
                                

                            </form>

                        <div>
                        
                    </div>         
                </div>
            </div>
        </section>
    )
}
"use client"

import { useState, useRef } from "react"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import { WEB3FORMS_KEY, HCAPTCHA_KEY } from "@/lib/web_captcha";

export default function Contacts() {
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
    event.preventDefault();

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
    console.log(formData)
    setResult(data.success ? "success" : "error")

    if (data.success) {
      // setSuccess(true)
      setLoading(false)
      if (captchaRef.current) {
        captchaRef.current.resetCaptcha()
      }
      setCaptchaToken(null)
      setFormData({email: "", message: "" })
      // router.push("/success")
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
    <section className="py-20" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Let&apos;s discuss your next project or just say hello!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
                <h3 className="text-2xl font-serif font-bold text-accent mb-6">Let&apos;s Connect</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">denmark.cube@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Location</h4>
                      <p className="text-muted-foreground">Available for Remote Work</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Response Time</h4>
                      <p className="text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-foreground resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <div className="flex justify-center">
                  <HCaptcha
                    ref={captchaRef}
                    sitekey={HCAPTCHA_KEY}
                    reCaptchaCompat={false}
                    onVerify={onHCaptchaChange}
                  />
                </div>

                <button
                  disabled={!captchaToken || loading}
                  type="submit"
                  className="w-full bg-accent text-accent-foreground py-3 px-6 rounded-lg font-medium hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Message
                </button>

                {result === "success" && (
                  <div
                    className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                    role="alert"
                  >
                    <div className="flex">
                      <div className="py-1">
                        <svg
                          className="fill-current h-6 w-6 text-teal-500 mr-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-5 5-5-1.4-1.4L9 10.2 7.4 8.6 6 10l3 3z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold">Email sent successfully</p>
                        <p className="text-sm">Thank you for reaching out.</p>
                      </div>
                    </div>
                  </div>
                )}

                {result === "error" && (
                  <div className="bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md" role="alert">
                    <div className="flex">
                      <div className="py-1"><svg className="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                      <div>
                        <p className="font-bold">Error sending message</p>
                        <p className="text-sm">Please try again later.</p>
                      </div>
                    </div>
                  </div>
                )}

                  

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

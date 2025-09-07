"use client";
import { useState } from "react";
import Image from "next/image";
import { Twitter, Instagram, Facebook } from "lucide-react";
import emailjs from "@emailjs/browser";
import Reveal from "./Reveal";

interface FormData {
  firstName: string;
  email: string;
  phone: string;
  company: string;
  services: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
    phone: "",
    company: "",
    services: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS configuration - Replace with your actual values from EmailJS dashboard
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

      const templateParams = {
        from_name: formData.firstName,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        services: formData.services,
        message: formData.message,
        to_email: "dharmikclothing@gmail.com",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setFormData({
        firstName: "",
        email: "",
        phone: "",
        company: "",
        services: "",
        message: "",
      });
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="flex flex-col relative min-h-[41rem] w-full items-center justify-center px-20 max-md:max-w-full max-md:px-5 py-28 max-md:py-16">
      <Image
        src="https://api.builder.io/api/v1/image/assets/TEMP/43a7ff149b3d053d8e1c3a371e18b2cf97052b78?placeholderIfAbsent=true"
        fill
        className="absolute h-full w-full object-cover inset-0"
        alt="Contact background"
      />

      <div className=" container relative flex items-start gap-10 gap-x-14 justify-center flex-wrap max-md:flex-col max-md:items-center max-md:gap-8 max-md:max-w-full">
        <div className="self-stretch min-w-60  my-auto max-md:max-w-full max-md:min-h-0">
          <div className="flex w-full max-w-[33rem] flex-col max-md:max-w-full">
            <Reveal as="h2" className="text-[rgba(22,28,45,1)] text-6xl font-normal leading-none tracking-tighter text-left max-md:text-4xl font-serif" variant="fade-up">
              Get in Touch
            </Reveal>
            <Reveal variant="fade-up" delay={0.05}>
              <p className="text-[rgba(136,85,33,1)] text-xl font-normal leading-relaxed self-stretch mt-4 max-md:max-w-full font-sans">
                Have a question or a project in mind? I&apos;d love to hear from
                you. Let&apos;s chat and make something amazing together.
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.1}>
              <div className="flex gap-4 text-base text-[#1F1F1F] font-normal mt-16 max-md:mt-10 font-sans">
                <Image
                  src="/images/phone.svg"
                  width={24}
                  height={24}
                  className="w-6 h-6 shrink-0"
                  alt="Phone icon"
                />
                <div>+91 76808 29790</div>
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={0.15}>
              <div className="flex gap-4 text-base text-[#1F1F1F] font-normal whitespace-nowrap mt-8 font-sans">
                <Image
                  src="/images/mail.svg"
                  width={24}
                  height={24}
                  className="w-6 h-6 shrink-0"
                  alt="Mail icon"
                />
                <div>dharmikclothing@gmail.com</div>
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={0.2}>
              <div className="flex  gap-4 text-base text-[#1F1F1F] font-normal leading-6  mt-8 font-sans">
                <Image
                  src="/images/location.svg"
                  width={24}
                  height={24}
                  className="w-6 h-6 shrink-0 mt-0.5"
                  alt="Location icon"
                />
                <div className="basis-auto text-sm grow shrink max-md:max-w-full">
                  MRR COMPLEX, ICICI Bank Building, Plot No.21, NH9 Highway, EP
                  Lecturers ColonyHayathnager, Telangana 501505
                </div>
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={0.25}>
              <div className="flex items-center gap-6 mt-12 max-md:mt-10 max-md:gap-4 max-md:justify-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-b from-[#885521] to-[#64462C] hover:from-[#6B4420] hover:to-[#4A3422] transition-all duration-200">
                  <Twitter className="w-4 h-4 text-white" />
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-b from-[#885521] to-[#64462C] hover:from-[#6B4420] hover:to-[#4A3422] transition-all duration-200">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-b from-[#885521] to-[#64462C] hover:from-[#6B4420] hover:to-[#4A3422] transition-all duration-200">
                  <Facebook className="w-4 h-4 text-white" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal variant="fade-left" delay={0.1}>
        <form
          onSubmit={handleSubmit}
          className="self-stretch min-w-96 text-sm text-[rgba(141,141,141,1)] my-auto rounded-none max-md:max-w-full max-md:w-full font-sans"
        >
          <div className="flex w-full items-stretch gap-8 font-normal flex-wrap max-md:gap-4 max-md:flex-col max-md:max-w-full">
            <div className="bg-[rgba(136,85,33,0.06)] flex items-center gap-2.5 grow shrink basis-auto px-4 py-3.5 rounded-lg font-sans max-md:w-full max-md:px-6 max-md:basis-full">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="self-stretch my-auto bg-transparent outline-none w-full font-sans"
              />
            </div>
            <div className="bg-[rgba(136,85,33,0.06)] flex items-center gap-2.5 whitespace-nowrap grow shrink basis-auto px-4 py-3.5 rounded-lg font-sans max-md:w-full max-md:px-6 max-md:basis-full">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="self-stretch my-auto bg-transparent outline-none w-full font-sans"
              />
            </div>
          </div>

          <div className="flex w-full items-stretch gap-8 font-normal flex-wrap mt-6 max-md:gap-4 max-md:flex-col max-md:max-w-full">
            <div className="bg-[rgba(136,85,33,0.06)] flex items-center gap-2.5 grow shrink basis-auto px-4 py-3.5 rounded-lg font-sans max-md:w-full max-md:px-6 max-md:basis-full">
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleInputChange}
                className="self-stretch my-auto bg-transparent outline-none w-full font-sans"
              />
            </div>
            <div className="bg-[rgba(136,85,33,0.06)] flex items-center gap-2.5 whitespace-nowrap grow shrink basis-auto px-4 py-3.5 rounded-lg font-sans max-md:w-full max-md:px-6 max-md:basis-full">
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleInputChange}
                className="self-stretch my-auto bg-transparent outline-none w-full font-sans"
              />
            </div>
          </div>

          <div className="bg-[rgba(136,85,33,0.06)] flex items-center gap-2.5 font-normal mt-6 px-4 py-3.5 rounded-lg font-sans max-md:w-full max-md:px-6">
            <input
              type="text"
              name="services"
              placeholder="Services interested in"
              value={formData.services}
              onChange={handleInputChange}
              className="self-stretch my-auto bg-transparent outline-none w-full font-sans"
            />
          </div>

          <div className="bg-[rgba(136,85,33,0.06)] flex min-h-[10.5rem] gap-2.5 font-normal mt-6 pt-2 pb-24 px-4 rounded-lg max-md:pb-16 max-md:min-h-[8rem] font-sans max-md:w-full max-md:px-6">
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="bg-transparent outline-none w-full resize-none font-sans"
              rows={6}
            />
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              Message sent successfully! We&apos;ll get back to you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              Failed to send message. Please try again or contact us directly.
            </div>
          )}

          <div className="mt-8 flex justify-end max-md:justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-[12.5rem] min-h-14 px-6 py-3 text-sm leading-relaxed bg-[rgba(136,85,33,1)] text-white font-bold tracking-tight rounded-xl hover:opacity-90 transition-all duration-200 font-sans disabled:opacity-50 disabled:cursor-not-allowed max-md:w-full max-md:px-8"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </div>
        </form>
        </Reveal>
      </div>
    </section>
  );
};

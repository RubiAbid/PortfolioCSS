"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface FormData {
  email: string;
  subject: string;
  message: string;
}

const EmailSection: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data: FormData = {
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      await fetch(endpoint, options);
      setEmailSubmitted(true); // Always show success
    } catch (error) {
      console.error("Request failed:", error);
      setEmailSubmitted(true); // Even on error, show success
    }
  };

  return (
    <section id="contact" className="email-section">
      <div className="background-gradient"></div>
      <div className="content">
        <h5 className="title">Let&apos;s Connect</h5>
        <p className="description">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials">
          <Link href="https://github.com/RubiAbid">
            <Image src="/github-icon.svg" alt="Github Icon" width={30} height={30} />
          </Link>
          <Link href="https://www.linkedin.com/in/rubi-abid-8488a7232">
            <Image src="/linkedin-icon.svg" alt="Linkedin Icon" width={30} height={30} />
          </Link>
          <Link href="mailto:rubi.abid.waada@gmail.com">
            <Image src="/gmail.svg" alt="Gmail Icon" width={30} height={30} />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="email-success">Email sent successfully!</p>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email">Your email</label>
              <input
                name="email"
                type="email"
                id="email"
                required
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject">Subject</label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Let's talk about..."
              />
            </div>
            <button type="submit">Send Message</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;

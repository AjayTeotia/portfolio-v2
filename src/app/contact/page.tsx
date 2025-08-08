"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactInfo } from "@/constants";
import { motion } from "motion/react";
import { useRef } from "react";
import { toast } from "sonner";

export default function Contact() {
  const formRef = useRef(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget; // ✅ properly typed as HTMLFormElement
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
      toast.error("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    formData.append("access_key", "ce128034-952c-4453-a56f-0ba4a6b4b225");
    const json = JSON.stringify(Object.fromEntries(formData));

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      toast.success("Message sent successfully");
      form.reset(); // ✅ Use local form reference, safer than ref
    } else {
      toast.error(result.message || "Something went wrong");
    }
  }

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-8 sm:py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="w-full flex flex-col xl:flex-row justify-center items-center gap-[30px]">
          <div className="w-full h-[524px] max-w-[500px] flex flex-col justify-between gap-6">
            <div className="flex flex-col justify-center items-center gap-2 rounded-xl p-[30px] bg-background border">
              <h3 className="h3 text-center w-full">Let&apos;s connect!</h3>
              <p className="p text-muted-foreground  max-w-[336px] mx-auto text-center">
                Reach out to discuss opportunities, projects, or simply to start
                a conversation.
              </p>
            </div>

            <div className="h-full flex flex-col items-center justify-center rounded-xl p-8 bg-background border">
              <ul className="flex flex-col gap-[30px]">
                {ContactInfo.map((item, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <div
                      onClick={item.action}
                      className="size-12 bg-secondary/80 text-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary hover:text-secondary transition-all duration-500"
                    >
                      <div className="text-xl">{<item.icon />}</div>
                    </div>

                    <div className="flex-1">
                      <p className="uppercase font-semibold text-primary">
                        {item.title}
                      </p>
                      <h3 className="text-base tracking-tight text-muted-foreground">
                        {item.description}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full max-w-[500px]">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-background border flex flex-col gap-6 p-8 rounded-xl"
            >
              <p className="text-[16px] uppercase text-muted-foreground">
                Fill out the form below to get in touch:
              </p>

              <Input name="name" type="text" placeholder="Your name" required />

              <Input
                name="email"
                type="email"
                placeholder="Your email"
                required
              />

              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here!"
                required
              />

              <Button
                type="submit"
                variant="outline"
                className="max-w-40 uppercase"
              >
                Send email
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

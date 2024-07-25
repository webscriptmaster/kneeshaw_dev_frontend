"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import { FaSteam } from "react-icons/fa6";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";

import useCommunityStore from "@/zustand/Community";
import Logo from "./Logo";

const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address"
  })
});

type FormSchemaType = z.infer<typeof FormSchema>;

export default function Footer() {
  const communityStore = useCommunityStore();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: ""
    }
  });

  const onSubmit = async (values: FormSchemaType) => {
    await communityStore.joinAction(values, () => {
      form.reset();
    });
  };

  return (
    <footer className="flex flex-col gap-[32px] border-t pt-[20px]">
      <div className="mx-[24px] flex flex-wrap gap-[48px] lg:flex-nowrap">
        <div className="flex w-full flex-col justify-around gap-[60px] md:flex-row lg:w-[60%]">
          <div className="flex flex-col items-center gap-[32px]">
            <Logo />

            <div className="flex flex-row justify-between gap-[32px] text-[24px]">
              {/* <FaLinkedinIn /> */}
              <a href="https://twitter.com/KneeshawDev" target="_blank">
                <FaTwitter />
              </a>
              {/* <PiRedditLogoFill /> */}
              <a
                href="https://store.steampowered.com/search/?developer=Kneeshaw%20Developments"
                target="_blank"
              >
                <FaSteam />
              </a>
              <a
                href="https://www.youtube.com/@kneeshawdevelopments"
                target="_blank"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="lg:ga-[150px] flex justify-center gap-[84px] xl:gap-[200px]">
            <div className="flex flex-col gap-[24px] text-[20px] font-semibold">
              <Link href="/games">Games</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/services">Services</Link>
              <Link href="/job">Job</Link>
              <Link href="/about">About Us</Link>
            </div>

            <div className="flex flex-col gap-[24px] text-[20px] font-semibold">
              <Link href="/terms">Terms</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/cookies">Cookies</Link>
            </div>
          </div>
        </div>

        <div className="mb-[24px] flex w-full flex-col items-center gap-[24px] lg:w-[40%]">
          <h6 className="font-lbv text-[16px] font-bold">
            Join our newsletter
          </h6>

          <div className="relative">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <Input
                        className="h-[56px] w-[320px] rounded-[16px] pl-2 pr-[144px] text-[14px] font-light md:w-[400px]"
                        placeholder="Your email"
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="absolute right-[8px] top-[8px] h-[40px] w-[128px] rounded-[11px] bg-[#AFD275] text-[16px] font-semibold"
                >
                  Subscribe
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>

      <div className="mb-[24px] text-center text-[15px] font-light">
        &copy;{new Date().getFullYear()} Kneeshaw Development All rights
        reserved
      </div>
    </footer>
  );
}

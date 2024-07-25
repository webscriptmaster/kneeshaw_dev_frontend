"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { PhoneInput } from "react-international-phone";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";

import { SITE_TITLE, THEME_MODE, USER_ROLES } from "@/utils/constants";
import useAuthStore from "@/zustand/Auth";
import useThemeStore from "@/zustand/Theme";

import "react-international-phone/style.css";

const FormSchema = z
  .object({
    role: z.string().min(1, { message: "Please select role" }),
    firstName: z.string().min(1, { message: "Please enter first name" }),
    lastName: z.string().min(1, { message: "Please enter last name" }),
    email: z.string().email({
      message: "Please enter a valid email address"
    }),
    phone: z.string().min(1, {
      message: "Please enter a valid phone number"
    }),
    username: z.string().min(1, { message: "Please enter username" }),
    password: z.string().min(8, {
      message: "Password should be at least 8 characters"
    }),
    confirm: z.string().min(8, {
      message: "Password should be at least 8 characters"
    })
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"]
  });

type FormSchemaType = z.infer<typeof FormSchema>;

export default function SignUp() {
  const router = useRouter();
  const authStore = useAuthStore();
  const themeStore = useThemeStore();

  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      role: USER_ROLES.GAMER,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      username: "",
      password: "",
      confirm: ""
    }
  });

  const handleRoleClick = (role: string) => () => {
    form.setValue("role", role);
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (values: FormSchemaType) => {
    await authStore.registerAction(values, () => {
      router.push("/signin");
    });
  };

  return (
    <section className="flex flex-1 items-center justify-center px-[16px] py-[36px] md:py-[40px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full max-w-[800px] flex-col gap-[24px] rounded-[24px] bg-tertiary px-[16px] py-[32px] md:px-[80px] md:py-[40px]"
        >
          <h1 className="font-lbv text-center text-[26px] font-[700] md:text-[52px]">
            Welcome to <br className="hidden md:block" />
            {SITE_TITLE}!
          </h1>

          <p className="text-center text-[16px] font-[400] md:text-[20px]">
            Let's create your account
          </p>

          <div className="flex w-full self-center rounded-[20px] bg-background p-[6px] md:max-w-[360px]">
            <Button
              type="button"
              className={clsx(
                "h-auto flex-1 rounded-[18px] px-[16px] py-[12px] text-[18px] font-[600]",
                form.watch("role") === USER_ROLES.DEVELOPER
                  ? "bg-[#AFD275] text-[#FFFFFF] hover:bg-[#AFD275]/50"
                  : themeStore.mode === THEME_MODE.DARK
                    ? "bg-transparent text-[#AFD275] hover:bg-[#AFD275]/50 hover:text-[#FFFFFF]"
                    : "bg-transparent text-[#52525B] hover:bg-[#AFD275]/50 hover:text-[#FFFFFF]"
              )}
              onClick={handleRoleClick(USER_ROLES.DEVELOPER)}
            >
              Developer
            </Button>

            <Button
              type="button"
              className={clsx(
                "h-auto flex-1 rounded-[18px] px-[16px] py-[12px] text-[18px] font-[600]",
                form.watch("role") === USER_ROLES.GAMER
                  ? "bg-[#AFD275] text-[#FFFFFF] hover:bg-[#AFD275]/50"
                  : themeStore.mode === THEME_MODE.DARK
                    ? "bg-transparent text-[#AFD275] hover:bg-[#AFD275]/50 hover:text-[#FFFFFF]"
                    : "bg-transparent text-[#52525B] hover:bg-[#AFD275]/50 hover:text-[#FFFFFF]"
              )}
              onClick={handleRoleClick(USER_ROLES.GAMER)}
            >
              Gamer
            </Button>
          </div>

          <div className="flex w-full flex-col gap-[24px] md:flex-row">
            <div className="w-full">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <Input
                      autoFocus
                      className="h-auto rounded-[16px] bg-transparent p-[12px] text-[16px] font-[500] md:p-[16px]"
                      placeholder="First name"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full">
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <Input
                      className="h-auto rounded-[16px] bg-transparent p-[12px] text-[16px] font-[500] md:p-[16px]"
                      placeholder="Last name"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Input
                    className="h-auto rounded-[16px] bg-transparent p-[12px] text-[16px] font-[500] md:p-[16px]"
                    placeholder="Enter your email"
                    {...field}
                  />
                  <div className="mt-[8px] text-[14px] font-[500]">
                    Never shown to public
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <PhoneInput
                    countrySelectorStyleProps={{
                      className: "h-[48px] !rounded-l-[16px] !bg-transparent",
                      buttonClassName:
                        "w-[80px] !h-[48px] !rounded-l-[16px] !bg-transparent",
                      dropdownArrowClassName: clsx(
                        themeStore.mode === THEME_MODE.DARK
                          ? "!border-t-[#FFFFFF]"
                          : "!border-t-[#52525B]"
                      )
                    }}
                    inputClassName={clsx(
                      "!h-[48px] !w-full !rounded-r-[16px] !bg-transparent",
                      themeStore.mode === THEME_MODE.DARK
                        ? "!text-[#FFFFFF] placeholder:!text-[#FFFFFF]"
                        : "!text-[#52525B] placeholder:!text-[#52525B]"
                    )}
                    placeholder="Enter your phone number"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <Input
                    className="h-auto rounded-[16px] bg-transparent p-[12px] text-[16px] font-[500] md:p-[16px]"
                    placeholder="Create username"
                    {...field}
                  />
                  <div className="mt-[8px] text-[14px] font-[500]">
                    Ideal username is short, unique with no spaces
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <Input
                    type={showPassword ? "text" : "password"}
                    className="h-auto rounded-[16px] bg-transparent p-[12px] text-[16px] font-[500] md:p-[16px]"
                    placeholder="Create password"
                    {...field}
                  />
                  <div className="!mt-[8px] flex items-center justify-between text-[14px] font-[500]">
                    <span>At least 8 characters, Aa, 123, &#</span>
                    <Button
                      type="button"
                      variant="ghost"
                      className="h-auto p-0 text-[14px] font-[500] text-[#AFD275] hover:text-[#AFD275]/80"
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="confirm"
              render={({ field }) => (
                <FormItem>
                  <Input
                    type={showPassword ? "text" : "password"}
                    className="h-auto rounded-[16px] bg-transparent p-[12px] text-[16px] font-[500] md:p-[16px]"
                    placeholder="Confirm password"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full text-[14px] font-[400]">
            By registering, you agree to our{" "}
            <Link href="/privacy" className="font-[600] text-[#AFD275]">
              Privacy Policy
            </Link>{" "}
            &{" "}
            <Link href="/terms" className="font-[600] text-[#AFD275]">
              Terms of Service
            </Link>
            <span>.</span>
          </div>

          <div className="w-full">
            <Button
              type="submit"
              className="h-auto w-full rounded-[18px] bg-[#AFD275] p-[12px] text-[18px] font-[600] text-[#FFFFFF] hover:bg-[#AFD275]/80"
            >
              Create your account
            </Button>
          </div>

          <div className="w-full">
            <Button
              type="button"
              variant="outline"
              className="h-auto w-full rounded-[18px] bg-transparent p-[12px] hover:bg-transparent"
            >
              <FcGoogle className="mr-[10px] text-[24px]" />
              <span className="text-[18px] font-[600]">
                Sign up with Google
              </span>
            </Button>
          </div>

          <div className="w-full text-center text-[14px] font-[400]">
            Already have an account?{" "}
            <Link href="/signin" className="font-[600] text-[#AFD275]">
              Sign in
            </Link>
          </div>
        </form>
      </Form>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

import { SITE_TITLE } from "@/utils/constants";
import useAuthStore from "@/zustand/Auth";

const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address"
  }),
  password: z.string().min(8, {
    message: "Create password should be at least 8 characters"
  }),
  remember: z.boolean().default(false).optional()
});

type FormSchemaType = z.infer<typeof FormSchema>;

export default function SignIn() {
  const router = useRouter();
  const authStore = useAuthStore();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false
    }
  });

  const onSubmit = async (values: FormSchemaType) => {
    await authStore.loginAction(values, () => {
      router.push("/");
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
            Welcome back!
          </h1>

          <p className="mb-[16px] text-center text-[16px] font-[400] md:text-[20px]">
            {SITE_TITLE} is happy to see you return.
          </p>

          <div className="w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Input
                    autoFocus
                    className="h-auto rounded-[16px] bg-transparent p-[12px] text-[16px] font-[500] md:p-[16px]"
                    placeholder="Enter your email"
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <Input
                    type="password"
                    className="h-auto rounded-[16px] bg-transparent p-[12px] text-[16px] font-[500] md:p-[16px]"
                    placeholder="Enter your password"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex w-full items-center justify-between">
            <FormField
              control={form.control}
              name="remember"
              render={({ field }) => (
                <FormItem className="flex items-center gap-[8px] space-y-0">
                  <Checkbox
                    id="remember"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <FormLabel htmlFor="remember" className="text-[14px]">
                    Remember me
                  </FormLabel>
                </FormItem>
              )}
            />

            <Link
              href="/forgot/email"
              className="text-[14px] font-[500] text-[#E7717D]"
            >
              Forgot password?
            </Link>
          </div>

          <div className="w-full">
            <Button
              type="submit"
              className="h-auto w-full rounded-[18px] bg-[#AFD275] p-[12px] text-[18px] font-[600] text-[#FFFFFF] hover:bg-[#AFD275]/80"
            >
              Sign In
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
                Sign in with Google
              </span>
            </Button>
          </div>

          <div className="w-full text-center text-[14px] font-[400]">
            Don't have an account?{" "}
            <Link href="/signup" className="font-[600] text-[#AFD275]">
              Sign up
            </Link>
          </div>
        </form>
      </Form>
    </section>
  );
}

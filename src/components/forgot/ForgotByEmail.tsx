"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";

import useAuthStore from "@/zustand/Auth";

const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address"
  })
});

type FormSchemaType = z.infer<typeof FormSchema>;

export default function ForgotByEmail() {
  const router = useRouter();
  const authStore = useAuthStore();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: ""
    }
  });

  const onSubmit = async (values: FormSchemaType) => {
    await authStore.forgotByEmailAction(values, () => {
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
            No worries
          </h1>

          <p className="text-center text-[16px] font-[400] md:text-[20px]">
            Forgot password?
          </p>

          <p className="text-center text-[14px] font-[500]">
            Enter your email that you used to register your account, so we can
            send you a link to reset your password
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
            <Button
              type="submit"
              className="h-auto w-full rounded-[18px] bg-[#AFD275] p-[12px] text-[18px] font-[600] hover:bg-[#AFD275]/80"
            >
              Send link
            </Button>
          </div>

          <div className="w-full text-center text-[14px] font-[400]">
            Forgot your email?{" "}
            <Link href="/forgot/phone" className="font-[600] text-[#AFD275]">
              Try phone number
            </Link>
          </div>
        </form>
      </Form>
    </section>
  );
}

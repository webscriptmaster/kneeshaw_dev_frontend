"use client";

import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import LoadingOverlay from "@/components/_layout/LoadingOverlay";

import { SITE_TITLE } from "@/utils/constants";
import useAuthStore from "@/zustand/Auth";
import { apiVerifyResetToken } from "@/api/Auth";

const FormSchema = z
  .object({
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

interface Props {
  token: string;
}

export default function ResetToken({ token }: Props) {
  const router = useRouter();
  const authStore = useAuthStore();

  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: "",
      confirm: ""
    }
  });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const verifyToken = async () => {
    try {
      const response = await apiVerifyResetToken({ token });
      if (response && response.data && response.data.msg) {
        toast.success(response.data.msg);
      }
    } catch (err: any) {
      console.error(err);
      if (err && err.response && err.response.data && err.response.data.msg) {
        toast.error(err.response.data.msg);
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
      router.push("/forgot/email");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (values: FormSchemaType) => {
    await authStore.resetPasswordByTokenAction({ ...values, token }, () => {
      router.push("/signin");
    });
  };

  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <>
      <LoadingOverlay loading={loading} />

      {!loading && (
        <section className="flex flex-1 items-center justify-center px-[16px] py-[36px] md:py-[40px]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-full max-w-[800px] flex-col gap-[24px] rounded-[24px] bg-tertiary px-[16px] py-[32px] md:px-[80px] md:py-[40px]"
            >
              <h1 className="font-lbv text-center text-[26px] font-[700] md:text-[52px]">
                Reset Password
              </h1>

              <p className="mb-[16px] text-center text-[16px] font-[400] md:text-[20px]">
                {SITE_TITLE} is happy to help you.
              </p>

              <div className="w-full">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          className="h-auto rounded-[16px] bg-transparent p-[12px] text-[16px] font-[500] md:p-[16px]"
                          placeholder="Enter your password"
                          {...field}
                        />
                        <div
                          className="absolute right-[4px] top-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                          onClick={handleShowPassword}
                        >
                          {!showPassword ? (
                            <LuEye className="text-[20px]" />
                          ) : (
                            <LuEyeOff className="text-[20px]" />
                          )}
                        </div>
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
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          className="h-auto rounded-[16px] bg-transparent p-[12px] text-[16px] font-[500] md:p-[16px]"
                          placeholder="Confirm your password"
                          {...field}
                        />
                        <div
                          className="absolute right-[4px] top-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                          onClick={handleShowPassword}
                        >
                          {!showPassword ? (
                            <LuEye className="text-[20px]" />
                          ) : (
                            <LuEyeOff className="text-[20px]" />
                          )}
                        </div>
                      </div>
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
                  Reset
                </Button>
              </div>
            </form>
          </Form>
        </section>
      )}
    </>
  );
}

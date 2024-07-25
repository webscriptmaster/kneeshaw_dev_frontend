"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { LuEye, LuEyeOff } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";

import useAuthStore from "@/zustand/Auth";

const FormSchema = z
  .object({
    current: z.string().min(6, {
      message: "Current password should be at least 6 characters"
    }),
    password: z.string().min(6, {
      message: "Password should be at least 6 characters"
    }),
    confirm: z.string().min(6, {
      message: "Repeat password should be at least 6 characters"
    })
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"]
  });

type FormSchemaType = z.infer<typeof FormSchema>;

export default function ChangePasswordDialog() {
  const authStore = useAuthStore();
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      current: "",
      password: "",
      confirm: ""
    }
  });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (values: FormSchemaType) => {
    await authStore.changePasswordAction(values, () => {
      form.reset();
      setOpen(false);
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="p-0 text-[14px] font-[400] text-[#AFD275] hover:no-underline md:text-[16px] lg:text-[18px]"
        >
          Change Password
        </Button>
      </DialogTrigger>

      <DialogContent>
        <Form {...form}>
          <form
            className="flex flex-col"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <DialogHeader className="mb-10">
              <DialogTitle>Change Password</DialogTitle>
            </DialogHeader>

            <div className="mb-10 grid grid-cols-4 items-center gap-5">
              <Label className="text-right">Current Password</Label>
              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="current"
                  render={({ field }) => (
                    <FormItem>
                      <div className="relative w-full">
                        <Input
                          className="bg-transparent"
                          type={!showPassword ? "password" : "text"}
                          placeholder="Current password"
                          {...field}
                        />

                        <div
                          className="absolute right-1 top-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                          onClick={handleShowPassword}
                        >
                          {!showPassword ? (
                            <LuEye className="text-[20px] text-[#737373]" />
                          ) : (
                            <LuEyeOff className="text-[20px] text-[#737373]" />
                          )}
                        </div>
                      </div>
                      <FormMessage className="brightness-150" />
                    </FormItem>
                  )}
                />
              </div>

              <Label className="text-right">New Password</Label>
              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="relative w-full">
                        <Input
                          className="bg-transparent"
                          type={!showPassword ? "password" : "text"}
                          placeholder="New Password"
                          {...field}
                        />

                        <div
                          className="absolute right-1 top-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                          onClick={handleShowPassword}
                        >
                          {!showPassword ? (
                            <LuEye className="text-[20px] text-[#737373]" />
                          ) : (
                            <LuEyeOff className="text-[20px] text-[#737373]" />
                          )}
                        </div>
                      </div>
                      <FormMessage className="brightness-150" />
                    </FormItem>
                  )}
                />
              </div>

              <Label className="text-right">Confirm Password</Label>
              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="confirm"
                  render={({ field }) => (
                    <FormItem>
                      <div className="relative w-full">
                        <Input
                          className="bg-transparent"
                          type={!showPassword ? "password" : "text"}
                          placeholder="Confirm Password"
                          {...field}
                        />

                        <div
                          className="absolute right-1 top-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                          onClick={handleShowPassword}
                        >
                          {!showPassword ? (
                            <LuEye className="text-[20px] text-[#737373]" />
                          ) : (
                            <LuEyeOff className="text-[20px] text-[#737373]" />
                          )}
                        </div>
                      </div>
                      <FormMessage className="brightness-150" />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <DialogFooter>
              <Button
                type="submit"
                className="bg-[#AFD275] hover:bg-[#AFD275]/80"
              >
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

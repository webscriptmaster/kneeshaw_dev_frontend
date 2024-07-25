"use client";

import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AvatarEditor from "@/components/_shared/AvatarEditor";
import { Input } from "@/components/ui/input";

import useAuthStore from "@/zustand/Auth";
import { Button } from "../ui/button";

const FormSchema = z.object({
  avatar: z.any(),
  firstName: z.string().min(1, {
    message: "FirstName is required"
  }),
  lastName: z.string().min(1, {
    message: "LastName is required"
  })
});

type FormSchemaType = z.infer<typeof FormSchema>;

export default function MyProfile() {
  const authStore = useAuthStore();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      avatar: authStore.user?.avatar,
      firstName: authStore.user?.firstName,
      lastName: authStore.user?.lastName
    }
  });

  const onSubmit = async (values: FormSchemaType) => {
    await authStore.updateProfileAction(values);
  };

  useEffect(() => {
    form.reset(authStore.user ?? {});
  }, [authStore.user]);

  return (
    <div className="flex flex-1 flex-col rounded-md bg-tertiary p-5 md:p-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <h1 className="mb-4 text-[16px] font-[500] md:text-[18px] lg:text-[20px]">
            My profile
          </h1>

          <p className="mb-10 text-[12px] font-[400] md:text-[14px] lg:text-[16px]">
            This information will be displayed on your public profile.
          </p>

          <div className="mb-10 grid grid-cols-1 items-center gap-5 md:grid-cols-4 md:gap-10">
            <p className="text-[14px] font-[400] md:text-[16px] lg:text-[18px]">
              Avatar
            </p>
            <div className="md:col-span-3">
              <FormField
                control={form.control}
                name="avatar"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-4">
                      <AvatarEditor
                        defaultAvatar={
                          <Avatar className="h-20 w-20">
                            {field.value && (
                              <AvatarImage
                                src={`${process.env.NEXT_PUBLIC_API_SERVER}/${field.value}`}
                                alt="Avatar"
                              />
                            )}

                            <AvatarFallback className="bg-[#AFD275] text-[18px] font-[600] text-[#EDF1F3]">
                              {form.getValues().firstName?.[0]}
                              {form.getValues().lastName?.[0]}
                            </AvatarFallback>
                          </Avatar>
                        }
                        {...field}
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <p className="text-[14px] font-[400] md:text-[16px] lg:text-[18px]">
              First Name
            </p>
            <div className="md:col-span-3">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <Input
                      autoFocus
                      className="bg-transparent"
                      placeholder="First Name"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <p className="text-[14px] font-[400] md:text-[16px] lg:text-[18px]">
              Last Name
            </p>
            <div className="md:col-span-3">
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <Input
                      className="bg-transparent"
                      placeholder="Last Name"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="text-right">
            <Button
              type="submit"
              className="bg-[#AFD275] hover:bg-[#AFD275]/80"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

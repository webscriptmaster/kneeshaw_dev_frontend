"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import useFeedbackStore from "@/zustand/Feedback";

const FormSchema = z.object({
  fullName: z.string().min(1, {
    message: "Full Name is required"
  }),
  email: z.string().email({
    message: "Please enter a valid email address"
  }),
  message: z.string().min(1, {
    message: "Message is required"
  })
});

type FormSchemaType = z.infer<typeof FormSchema>;

export default function Feedback() {
  const feedbackStore = useFeedbackStore();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (values: FormSchemaType) => {
    await feedbackStore.createAction(
      { ...values, from: "Home", link: window.location.href },
      () => {
        form.reset();
      }
    );
  };

  return (
    <section className="mb-[100px] flex flex-1 items-center justify-center px-5 md:px-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full max-w-[800px] flex-col rounded-[24px] bg-tertiary px-[24px] py-[30px] md:px-[48px] md:py-[60px]"
        >
          <h2 className="font-lbv mb-[30px] text-center text-[20px] font-[700] md:mb-[60px] md:text-[30px] lg:text-[40px]">
            Have a Question? Let’s talk!
          </h2>

          <div className="mb-6 w-full">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <Input
                    className="h-auto rounded-md bg-transparent p-4"
                    placeholder="Full Name"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="mb-6 w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Input
                    className="h-auto rounded-md bg-transparent p-4"
                    placeholder="Email Address"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="mb-6 w-full">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <Textarea
                    className="h-auto rounded-md bg-transparent p-4"
                    placeholder="Write your message"
                    maxLength={1000}
                    rows={5}
                    {...field}
                  />
                  <div className="flex justify-end">
                    {field.value.length ?? 0}/1000
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full">
            <Button
              type="submit"
              className="h-auto w-full rounded-md bg-[#AFD275] p-4 text-[18px] font-[600] text-[#FFFFFF] hover:bg-[#AFD275]/80"
            >
              Send Message
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}

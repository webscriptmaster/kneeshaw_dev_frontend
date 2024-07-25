"use client";

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

export default function Contact() {
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
      { ...values, from: "Services", link: window.location.href },
      () => {
        form.reset();
      }
    );
  };

  return (
    <div className="flex flex-col gap-5 md:flex-row md:gap-10">
      <div className="flex flex-1 flex-col">
        <div className="mb-5 flex h-1 w-[100px] items-center">
          <div className="h-0 w-[30px] border-[2px] border-[#AFD276]" />
          <div className="h-0 w-[70px] border border-[#AFD276]" />
        </div>

        <h2 className="font-lbv mb-20 text-[20px] font-[700] md:text-[30px] lg:text-[40px]">
          Contact Us
        </h2>

        <h3 className="font-lbv text-[18px] font-[400] md:text-[24px] lg:text-[30px]">
          Turning Your Ideas and Fantasies Into Playable Games
        </h3>
      </div>

      <div className="flex-1">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full max-w-[800px] flex-col rounded-2xl bg-tertiary p-5 md:p-10"
          >
            <h2 className="mb-8 text-[16px] font-[400] md:text-[18px] lg:text-[20px]">
              Let us know about your project
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
      </div>
    </div>
  );
}

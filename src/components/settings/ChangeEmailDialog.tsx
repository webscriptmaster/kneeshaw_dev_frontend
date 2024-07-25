"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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

const FormSchema = z.object({
  email: z.string().email({
    message: "Email is required"
  })
});

type FormSchemaType = z.infer<typeof FormSchema>;

export default function ChangeEmailDialog() {
  const authStore = useAuthStore();
  const [open, setOpen] = useState(false);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: ""
    }
  });

  const onSubmit = async (values: FormSchemaType) => {
    await authStore.changeEmailAction(values, () => {
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
          Change Email
        </Button>
      </DialogTrigger>

      <DialogContent>
        <Form {...form}>
          <form
            className="flex flex-col"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <DialogHeader className="mb-10">
              <DialogTitle>Change Email</DialogTitle>
            </DialogHeader>

            <div className="mb-10 grid grid-cols-4 items-center gap-5">
              <Label className="text-right">Old Email</Label>
              <Input
                readOnly
                className="col-span-3 bg-transparent"
                value={authStore.user?.email ?? ""}
              />

              <Label className="text-right">New Email</Label>
              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <Input
                        autoFocus
                        className="bg-transparent"
                        placeholder="New Email"
                        autoComplete="off"
                        {...field}
                      />
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

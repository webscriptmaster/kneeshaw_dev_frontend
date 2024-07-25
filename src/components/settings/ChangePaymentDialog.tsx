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
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import useAuthStore from "@/zustand/Auth";

const FormSchema = z.object({
  holderName: z.string().min(1, {
    message: "Name on card is required"
  }),
  cardNumber: z.string().regex(/^(\d{4} \d{4} \d{4} \d{4})$/, {
    message:
      "Card number is invalid format. Format should be 'XXXX XXXX XXXX XXXX'."
  }),
  expiryDate: z.string().regex(/^(\d{2}\/\d{4})$/, {
    message: "Expiry is invalid format. Format should be 'MM/YYYY'."
  }),
  cvv: z.string().regex(/^(\d{3})$/, {
    message: "CVV is invalid format. Format should be 'XXX'."
  })
});

type FormSchemaType = z.infer<typeof FormSchema>;

export default function ChangePaymentDialog() {
  const authStore = useAuthStore();
  const [open, setOpen] = useState(false);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      holderName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: ""
    }
  });

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
          Change Payment Method
        </Button>
      </DialogTrigger>

      <DialogContent>
        <Form {...form}>
          <form
            className="flex flex-col"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <DialogHeader className="mb-4">
              <DialogTitle>Update payment method</DialogTitle>
            </DialogHeader>

            <p className="mb-8 text-[12px] font-[400] md:text-[14px] lg:text-[16px]">
              This information will be changed on your profile.
            </p>

            <div className="mb-8 flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="flex-[3]">
                  <FormField
                    control={form.control}
                    name="holderName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name on card</FormLabel>
                        <Input
                          autoFocus
                          className="bg-transparent"
                          {...field}
                        />
                        <FormMessage className="brightness-150" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="expiryDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expiry</FormLabel>
                        <Input
                          className="bg-transparent"
                          placeholder=""
                          {...field}
                        />
                        <FormMessage className="brightness-150" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-[3]">
                  <FormField
                    control={form.control}
                    name="cardNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Card number</FormLabel>
                        <Input
                          className="bg-transparent"
                          placeholder=""
                          {...field}
                        />
                        <FormMessage className="brightness-150" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="cvv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CVV</FormLabel>
                        <Input
                          className="bg-transparent"
                          placeholder=""
                          {...field}
                        />
                        <FormMessage className="brightness-150" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline">
                Cancel
              </Button>

              <Button
                type="submit"
                className="bg-[#AFD275] hover:bg-[#AFD275]/80"
              >
                Update
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

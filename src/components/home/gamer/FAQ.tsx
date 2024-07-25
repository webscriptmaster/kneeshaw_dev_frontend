"use client";

import { useEffect } from "react";

import { LuCircle } from "react-icons/lu";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

import { IFaq } from "@/types/interfaces";
import useFaqStore from "@/zustand/Faq";

function FaqItem(prop: IFaq) {
  const { _id: id, question, answer } = prop;

  return (
    <AccordionItem
      className="mb-2.5 rounded-md border-none bg-tertiary"
      value={id ?? ""}
    >
      <AccordionTrigger className="p-5">
        <div className="flex items-center gap-4 text-left">
          <LuCircle className="text-[#E7717D]" /> {question}
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-7">
        <div className="border-l border-l-[#E7717D] pl-6">{answer}</div>
      </AccordionContent>
    </AccordionItem>
  );
}

export default function FAQ() {
  const faqStore = useFaqStore();

  const initialize = async () => {
    await faqStore.getListAction();
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div className="mb-[100px] flex flex-col items-center px-5 md:px-10">
      <h2 className="mb-[100px] text-center text-[20px] font-[400] md:text-[30px] lg:text-[40px]">
        Frequently Asked Questions
      </h2>

      <div className="flex w-full flex-col gap-3 md:w-2/3">
        <Accordion type="single" collapsible>
          {faqStore.faqs.map((f) => (
            <FaqItem key={f._id} {...f} />
          ))}
        </Accordion>
      </div>
    </div>
  );
}

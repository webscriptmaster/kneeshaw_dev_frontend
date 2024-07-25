"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import React, { useEffect, useState } from "react";

import { toast } from "sonner";

import LoadingOverlay from "@/components/_layout/LoadingOverlay";

import { SITE_TITLE } from "@/utils/constants";
import { apiVerifyRegisterToken } from "@/api/Auth";

interface Props {
  token: string;
}

export default function VerifyToken({ token }: Props) {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const verifyToken = async () => {
    try {
      const response = await apiVerifyRegisterToken({ token });
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
      router.push("/");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <>
      <LoadingOverlay loading={loading} />

      {!loading && (
        <section className="flex flex-1 items-center justify-center px-[16px] py-[36px] md:py-[40px]">
          <div className="flex w-full max-w-[800px] flex-col gap-[24px] rounded-[24px] bg-tertiary px-[16px] py-[32px] md:px-[80px] md:py-[40px]">
            <h1 className="font-lbv text-center text-[26px] font-[700] md:text-[52px]">
              Account Verified
            </h1>

            <p className="mb-[16px] text-center text-[16px] font-[400] md:text-[20px]">
              {SITE_TITLE} is happy to help you.
            </p>

            <div className="flex w-full">
              <Link
                href="/signin"
                className="h-auto w-full rounded-[18px] bg-[#AFD275] p-[12px] text-center text-[18px] font-[600] hover:bg-[#AFD275]/80"
              >
                Go Sign In
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

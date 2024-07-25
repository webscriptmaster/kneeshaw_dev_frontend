/* eslint-disable react/no-array-index-key */

"use client";

import { useRouter } from "next/navigation";

import React, { useState } from "react";

import clsx from "clsx";
import { PhoneInput } from "react-international-phone";
import { useTimer } from "react-timer-hook";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from "@/components/ui/input-otp";
import LoadingOverlay from "@/components/_layout/LoadingOverlay";

import { THEME_MODE } from "@/utils/constants";
import useThemeStore from "@/zustand/Theme";
import { apiSendResetCode, apiVerifyResetCode } from "@/api/Auth";

import "react-international-phone/style.css";

export default function ForgotByPhone() {
  const router = useRouter();
  const themeStore = useThemeStore();

  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState(1);

  const [phone, setPhone] = useState("");

  const [code, setCode] = useState("");
  const [hasError, setHasError] = useState(false);
  const [resendable, setResendable] = useState(true);

  const resendInterval = 30;

  const {
    minutes,
    seconds,
    restart: restartTimer
  } = useTimer({
    expiryTimestamp: new Date(),
    autoStart: false,
    onExpire: () => {
      setResendable(true);
    }
  });

  const handleSendClick = async () => {
    try {
      setLoading(true);
      await apiSendResetCode({ phone });
      setStage(2);
    } catch (err: any) {
      console.error(err);
      if (err && err.response && err.response.data && err.response.data.msg) {
        toast.error(err.response.data.msg);
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCodeChange = (newCode: string) => {
    if (hasError) {
      setHasError(false);
    }

    setCode(newCode);
  };

  const handleVerifyClick = async () => {
    try {
      setLoading(true);
      const response = await apiVerifyResetCode({
        phone,
        code
      });
      if (response && response.data && response.data.token) {
        router.push(`/reset/${response.data.token}`);
      }
    } catch (err: any) {
      console.error(err);
      if (err && err.response && err.response.data && err.response.data.msg) {
        toast.error(err.response.data.msg);
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
      setCode("");
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleResendClick = async () => {
    try {
      setLoading(true);
      setResendable(false);

      await apiSendResetCode({ phone });
      const newExpiryTimestamp = new Date();
      newExpiryTimestamp.setSeconds(
        newExpiryTimestamp.getSeconds() + resendInterval
      );
      restartTimer(newExpiryTimestamp, true);
    } catch (err: any) {
      console.error(err);
      if (err && err.response && err.response.data && err.response.data.msg) {
        toast.error(err.response.data.msg);
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LoadingOverlay loading={loading} />

      <section className="flex flex-1 items-center justify-center px-[16px] py-[36px] md:py-[40px]">
        {stage === 1 && (
          <div className="flex w-full max-w-[800px] flex-col gap-[24px] rounded-[24px] bg-tertiary px-[16px] py-[32px] md:px-[80px] md:py-[40px]">
            <h1 className="font-lbv text-center text-[26px] font-[700] md:text-[52px]">
              No worries
            </h1>

            <p className="text-center text-[16px] font-[400] md:text-[20px]">
              Forgot password?
            </p>

            <p className="text-center text-[14px] font-[500]">
              Enter your phone number that you used to register your account, so
              we can send you a code to reset your password
            </p>

            <div className="w-full">
              <PhoneInput
                autoFocus
                countrySelectorStyleProps={{
                  className: "h-[48px] !rounded-l-[16px] !bg-transparent",
                  buttonClassName:
                    "w-[80px] !h-[48px] !rounded-l-[16px] !bg-transparent",
                  dropdownArrowClassName: clsx(
                    "",
                    themeStore.mode === THEME_MODE.DARK
                      ? "!border-t-[#FFFFFF]"
                      : "!border-t-[#52525B]"
                  )
                }}
                inputClassName={clsx(
                  "!h-[48px] !w-full !rounded-r-[16px] !bg-transparent",
                  themeStore.mode === THEME_MODE.DARK
                    ? "!text-[#FFFFFF] placeholder:!text-[#FFFFFF]"
                    : "!text-[#52525B] placeholder:!text-[#52525B]"
                )}
                placeholder="Enter your phone number"
                value={phone}
                onChange={(val) => setPhone(val)}
              />
            </div>

            <div className="w-full">
              <Button
                className="h-auto w-full rounded-[18px] bg-[#AFD275] p-[12px] text-[18px] font-[600] hover:bg-[#AFD275]/80"
                onClick={handleSendClick}
              >
                Send code
              </Button>
            </div>
          </div>
        )}

        {stage === 2 && (
          <div className="flex w-full max-w-[800px] flex-col gap-[24px] rounded-[24px] bg-tertiary px-[16px] py-[32px] md:px-[80px] md:py-[40px]">
            <h1 className="font-lbv text-center text-[26px] font-[700] md:text-[52px]">
              No worries
            </h1>

            <p className="text-center text-[14px] font-[500]">
              Please enter the code that we just send to your phone
            </p>

            <div className="flex w-full flex-col items-center justify-center">
              <InputOTP
                className="gap-4"
                containerClassName="space-x-2"
                autoFocus
                maxLength={4}
                inputMode="numeric"
                value={code}
                onChange={handleCodeChange}
                render={({ slots }) => (
                  <InputOTPGroup className="gap-4">
                    {slots.map((slot, index) => (
                      <InputOTPSlot
                        key={index}
                        className="!rounded-[16px] !border"
                        {...slot}
                      />
                    ))}{" "}
                  </InputOTPGroup>
                )}
              />

              {hasError && (
                <div className="mt-[8px] text-[14px] font-[400] text-[#E7717D]">
                  Wrong code, please try again
                </div>
              )}
            </div>

            <div className="w-full">
              <Button
                className="h-auto w-full rounded-[18px] bg-[#AFD275] p-[12px] text-[18px] font-[600] hover:bg-[#AFD275]/80"
                onClick={handleVerifyClick}
              >
                Submit
              </Button>
            </div>

            {resendable && (
              <div className="w-full text-center text-[14px] font-[400]">
                Didn't receive the code?{" "}
                <span
                  className="cursor-pointer font-[600] text-[#AFD275]"
                  onClick={handleResendClick}
                >
                  Send again
                </span>
              </div>
            )}

            {!resendable && (
              <div className="w-full text-center text-[14px] font-[500]">
                Send code again {minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}
              </div>
            )}
          </div>
        )}
      </section>
    </>
  );
}

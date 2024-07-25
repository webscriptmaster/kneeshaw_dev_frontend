/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { forwardRef, useCallback, useEffect, useState } from "react";

import { useDropzone } from "react-dropzone";
import { LuPencil, LuUploadCloud } from "react-icons/lu";

interface Props {
  defaultAvatar: React.ReactNode;
  name?: string;
  value?: File | string | null;
  onChange?: Function;
}

function AvatarEditor(
  { defaultAvatar, name, value, onChange }: Props,
  ref: any
) {
  const [file, setFile] = useState<File | string | null>(value ?? null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (typeof onChange === "function") {
        onChange(acceptedFiles[0]);
      }

      setFile(acceptedFiles[0]);
    },
    [file, onChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": []
    },
    maxSize: 5 * 1024 * 1024,
    maxFiles: 1,
    onDrop
  });

  useEffect(() => {
    setFile(value ?? null);
  }, [value]);

  return (
    <div className="flex w-full flex-col items-center">
      <input {...getInputProps()} />

      <div className="relative cursor-pointer" {...getRootProps()}>
        {!file && defaultAvatar}

        {!!file && typeof file === "object" && (
          <div className="flex w-full justify-center">
            <img
              className="h-20 w-20 rounded-full border-2 object-cover"
              src={URL.createObjectURL(file)}
              alt="Avatar"
            />
          </div>
        )}

        {!!file && typeof file !== "object" && defaultAvatar}

        <div className="absolute bottom-0 right-[-4px] h-8 w-8 rounded-full border-2 bg-tertiary p-1">
          <LuPencil className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

export default forwardRef(AvatarEditor);

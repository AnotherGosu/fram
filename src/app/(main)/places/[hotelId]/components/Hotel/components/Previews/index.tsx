"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

import { IMAGE_PLACEHOLDER } from "@/constants/common";

import { useComponent } from "./useComponent";

const PreviewDialog = dynamic(() =>
  import("./components/PreviewDialog").then((mod) => mod.PreviewDialog),
);

interface PreviewsProps {
  previews: string[];
}

export const Previews = ({ previews }: PreviewsProps) => {
  const { isOpen, image, onOpen, onClose } = useComponent(previews);

  return (
    <>
      <div className="flex justify-center gap-4">
        {previews.map((preview, key) => (
          <Image
            key={key}
            src={preview}
            alt={`Preview ${key + 1}`}
            width={75}
            height={75}
            onClick={() => onOpen(preview)}
            placeholder={IMAGE_PLACEHOLDER}
            aria-label="Click to view bigger image"
            className="size-[75px] cursor-pointer rounded-md object-cover brightness-75 transition hover:brightness-100"
          />
        ))}
      </div>

      <PreviewDialog
        isOpen={isOpen}
        image={image}
        onClose={onClose}
      />
    </>
  );
};

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";

import { IMAGE_PLACEHOLDER } from "@/constants/common";

interface PreviewDialogProps {
  isOpen: boolean;
  image: string;
  onClose: () => void;
}

export const PreviewDialog = ({
  isOpen,
  image,
  onClose,
}: PreviewDialogProps) => {
  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={onClose}
    >
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 bg-slate-950/50"
          data-test="preview-dialog-overlay"
        />

        <Dialog.Content
          asChild
          aria-describedby={undefined}
          onOpenAutoFocus={(e) => e.preventDefault()}
          data-test="preview-dialog-content"
        >
          <div className="fixed left-1/2 top-1/2 h-full max-h-[80dvh] w-full max-w-[80vw] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-md bg-white">
            <Dialog.Title className="invisible h-0">
              Large preview image
            </Dialog.Title>

            <Image
              src={image}
              alt=""
              fill
              sizes="1024px"
              placeholder={IMAGE_PLACEHOLDER}
              className="object-contain"
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

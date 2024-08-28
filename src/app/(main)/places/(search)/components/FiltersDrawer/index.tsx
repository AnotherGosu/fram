"use client";

import { Filters } from "../Filters";
import * as Dialog from "@radix-ui/react-dialog";
import { Filter } from "lucide-react";

import { SelectOption } from "@/types/common";

import { Button } from "@/components/common/Button";

interface FiltersDrawerProps {
  maxPrice: string;
  facilityOptions: SelectOption[];
}

export const FiltersDrawer = ({
  maxPrice,
  facilityOptions,
}: FiltersDrawerProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          variant="outline"
          className="flex xl:hidden"
          data-test="filters-drawer-button"
        >
          <Filter className="size-4" />
          Filters
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 bg-slate-950/50 data-[state=closed]:animate-overlayHide data-[state=open]:animate-overlayShow"
          data-test="filters-drawer-overlay"
        />

        <Dialog.Content
          onOpenAutoFocus={(e) => e.preventDefault()}
          className="fixed right-0 top-0 h-dvh overflow-auto bg-white p-8 data-[state=closed]:animate-drawerHide data-[state=open]:animate-drawerShow"
          aria-describedby={undefined}
        >
          <Dialog.Title className="mb-8 text-xl font-semibold">
            Filters
          </Dialog.Title>

          <Filters
            maxPrice={maxPrice}
            facilityOptions={facilityOptions}
          />

          <Dialog.Close asChild>
            <Button
              className="mt-8"
              data-test="filters-drawer-close-button"
            >
              Confirm
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

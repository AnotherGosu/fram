import { useState } from "react";
import { toast } from "sonner";

import { signOut } from "@/api/auth";

export const useComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSignOut = async () => {
    try {
      setIsLoading(true);

      await signOut();
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, onSignOut };
};

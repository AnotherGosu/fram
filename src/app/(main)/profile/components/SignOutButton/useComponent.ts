import { useState } from "react";

import { signOut } from "@/api/auth";

export const useComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSignOut = async () => {
    try {
      setIsLoading(true);

      await signOut();
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, onSignOut };
};

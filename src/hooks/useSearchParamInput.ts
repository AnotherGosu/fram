import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

/**
 * Allows input component to read and modify search param
 *
 * @param param - name of search param
 * @param defaultValueFallback - default value if param is not present in search query
 * @param wait - delay (ms) between param updates
 * @returns default search param value and debounced callback to modify it
 *
 * @example
 * const { defaultValue, onChange } = useSearchParamInput("search", "", 300)
 */
export const useSearchParamInput = (
  param: string,
  defaultValueFallback = "",
  wait = 0,
) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const defaultValue = searchParams.get(param) || defaultValueFallback;

  const onChange = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    value ? params.set(param, value) : params.delete(param);

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, wait);

  return { defaultValue, onChange };
};

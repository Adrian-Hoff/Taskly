import { useToast } from "native-base";
import { TypeUseToast } from "../../types/@hooks/TypeUseToast/TypeUseToast";

export function useToastHook() {
  const toast = useToast();

  function showToast({ message, type }: TypeUseToast) {
    toast.show({
      bg: type === "ERROR" ? "red.500" : "green.400",
      placement: "top",
      title: message,
      duration: 3000,
    });
  }

  return showToast;
}

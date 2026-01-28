import { useCallback, useState } from "react";

import { callAllFn } from "@/utils/fn";
import type { UseDisclosureOptions } from "./types";

function useDisclosure(options: UseDisclosureOptions = {}) {
  const {
    defaultIsOpen = false,
    isOpen: isOpenProp,
    onClose: onCloseProp,
    onOpen: onOpenProp,
  } = options;

  const [isOpenState, setIsOpen] = useState(defaultIsOpen);

  const isControlled = isOpenProp !== undefined;
  const isOpen = isControlled ? isOpenProp : isOpenState;

  const onOpen = useCallback(() => {
    if (!isControlled) {
      setIsOpen(true);
    }
  }, [isControlled]);

  const onClose = useCallback(() => {
    if (!isControlled) {
      setIsOpen(false);
    }
  }, [isControlled]);

  return {
    isOpen,
    onClose: callAllFn(onClose, onCloseProp),
    onOpen: callAllFn(onOpen, onOpenProp),
  };
}

export default useDisclosure;

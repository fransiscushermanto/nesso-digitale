export interface UseDisclosureOptions {
  isOpen?: boolean;
  onClose?(): void;
  onOpen?(): void;
  defaultIsOpen?: boolean;
}

import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

/**
 * @function CloseButton - componente que representa o botão de fechar o popover
 */

export function CloseButton() {
  return (
    <Popover.Button
      className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100"
      title="Close form feedback"
    >
      <X weight="bold" className="w-4 h-4" />
    </Popover.Button>
  );
}

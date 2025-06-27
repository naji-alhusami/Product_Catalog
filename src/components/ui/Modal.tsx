import { createPortal } from "react-dom";

import { type ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return createPortal(
    <>
      <div className="inset-0 z-40" />
      <dialog
        id="modal"
        className="z-50 p-6 fixed w-full sm:w-[450px] md:w-[500px] bg-white rounded-lg shadow-md"
        open
      >
        <div className="flex flex-col">{children}</div>
      </dialog>
    </>,
    document.getElementById("modal")!
  );
}

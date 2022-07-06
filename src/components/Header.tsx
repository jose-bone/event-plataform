import { List, X } from "phosphor-react";
import { Logo } from "./Logo";

interface HeaderProps {
  modalState: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export function Header(props: HeaderProps) {
  return (
    <header className="w-full py-5 flex items-center justify-between md:justify-center px-6 bg-gray-700 border-b border-gray-600">
      <div className="inline md:hidden">
        <Logo width="167px" />
      </div>
      <div className="hidden md:inline">
        <Logo />
      </div>
      <div className="flex justify-center items-center gap-2 md:hidden">
        <span className="text-gray-200 font-normal text-sm">Aulas</span>
        {!props.modalState ? (
          <List size={32} color="#81D8F7" onClick={props.openModal} />
        ) : (
          <X size={32} color="#81D8F7" onClick={props.closeModal} />
        )}
      </div>
    </header>
  );
}

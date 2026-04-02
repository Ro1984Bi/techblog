import { LuX } from "react-icons/lu";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ children, isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex z-50 items-center justify-center px-4">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/90"
        onClick={onClose}
      />

      {/* modal */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-secondary-background border border-white/10 px-6 py-12 shadow-xl">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition cursor-pointer"
          aria-label="Close Modal"
          onClick={onClose}
        >
          <LuX size={25} />
        </button>

        {children}
      </div>
    </div>
  );
}

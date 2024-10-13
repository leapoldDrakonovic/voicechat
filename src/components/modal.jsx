import { Button } from "./ui/buttons";

export const Modal = ({ children, isOpen, onClose, ...props }) => {
  return (
    <dialog
      className="w-[400px] h-[400px] border bg-slate-400 rounded-lg shadow-2xl"
      open={isOpen}
      {...props}
    >
      <div>
        <div>
          <Button onClick={onClose}>Close</Button>
        </div>

        {children}
      </div>
    </dialog>
  );
};

import { Button } from "./ui/buttons";

export const Modal = ({ children, isOpen, onClose, ...props }) => {
  return (
    <dialog
      className="w-[400px] h-[400px]  bg-[rgba(209,209,209,0.39)] rounded-lg shadow-2xl border-0 absolute left-0 bottom-1/2 translate-y-1/2"
      open={isOpen}
      {...props}
    >
      <div className="h-full w-full">
        <div className="ml-2 mt-2">
          <Button className="text-red-500 border-2 border-red-500 rounded-lg pl-4 pr-4 pt-2 pb-2 hover:bg-white hover:text-black" onClick={onClose}>Close</Button>
        </div>


        {children}


      </div>
    </dialog>
  );
};

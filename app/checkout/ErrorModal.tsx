"use client";

type ErrorModalProps = {
  title: string,
  message: string;
  onClose: () => void;
};

export default function ErrorModal({ message,title, onClose }: ErrorModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative bg-white w-[90%] max-w-md p-6 rounded-lg z-10">
        <h2 className="text-lg font-bold mb-4 text-red-600">{title}</h2>

        <p className="text-sm opacity-80">{message}</p>

        <button
          onClick={onClose}
          className="mt-6 w-full h-12 bg-[#D87D4A] text-white font-bold hover:bg-[#FBAF85]"
        >
          OK
        </button>
      </div>
    </div>
  );
}

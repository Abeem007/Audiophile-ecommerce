"use client";
import { useRouter } from "next/navigation";
export default function GoBackButton() {
    const router = useRouter();

    const handleGoBack = () => {
        if (window.history.length > 1) {
            router.back();
        } else{router.push("/")}
    }
    return (
        <button
            type="button"
            onClick={handleGoBack}
            aria-label="Go back to previous page"
        className="text-[15px] leading-[25px] text-black opacity-50 pl-3 lg:pl-0 xl:pl-0 hover:opacity-80 hover:text-[#D87D4A]  cursor-pointer transition focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
      >
        Go Back
      </button>
    );
}
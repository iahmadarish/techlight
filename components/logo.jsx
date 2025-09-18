import Image from "next/image";
import adust from "@/public/logo/logo (1).png";
import Link from "next/link";

export const Logo = () => {
    return (
        <Link href={"/"} className="flex items-center gap-1">
            <Image className=" h-10 w-full " src={adust} alt="logo" />
        </Link>
    );
};

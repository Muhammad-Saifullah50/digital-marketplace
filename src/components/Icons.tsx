import { LucideProps } from "lucide-react";
import Image from "next/image";

export const Icons = {
    logo: (props: LucideProps) => (
        <Image
            src="/bluelogo.png"
            alt="logo"
            // @ts-ignore
            width={100 as number}
            // @ts-ignore
            height={100 as number}
            {...props}
        />
    )
}
import Image from "next/image"

const Logo = () => {
    return (
        <>
            <Image src={"/focal_point_logo.svg"} alt="" width={150} height={36} />
        </>
    );
}

export { Logo };
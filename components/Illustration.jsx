import Image from "next/image";

export default function Illustration({ src, alt = "Photo", round = true, priority = true }) {
    return (
        <div className="w-full flex justify-center mb-6 sm:mb-8">
            <div
                className="relative overflow-hidden w-full max-w-[320px] min-h-[200px]"
                style={{ aspectRatio: "1" }}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={320}
                    height={320}
                    className="object-cover w-full h-full opacity-95"
                    priority={priority}
                    sizes="(max-width: 640px) 100vw, 320px"
                />
            </div>
        </div>
    );
}

import Image from "next/image";

export default function Illustration({ src, alt = "Photo", round = true, priority = true }) {
    return (
        <div className="w-full flex justify-center mb-6 sm:mb-8">
            <div
                className={`relative overflow-hidden ${round ? "rounded-[1.25rem] sm:rounded-[1.5rem] shadow-xl shadow-[#c45c6a]/15" : ""}`}
                style={{ aspectRatio: "1" }}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={320}
                    height={320}
                    className="object-cover w-full h-full opacity-95"
                    priority={priority}
                    sizes="(max-width: 640px) 280px, 320px"
                />
            </div>
        </div>
    );
}

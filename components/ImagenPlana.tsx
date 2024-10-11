import Image from 'next/image';

interface ImagenPlanaProps {
    src: string;
    alt: string;
}

export function ImagenPlana({ src, alt }: ImagenPlanaProps) {
    return (
        <Image
            src={src}
            alt={alt}
            width={300}
            height={200}
            layout="responsive"
            objectFit="cover"
        />
    );
}
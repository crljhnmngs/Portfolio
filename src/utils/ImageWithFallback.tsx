import React, { useState, useEffect } from 'react';
import { quantum } from 'ldrs';
quantum.register();

const LoadingSpinner: React.FC = () => (
    <l-quantum
        size="45"
        speed="1.75"
        color="black"
    ></l-quantum>
);


const LazyImage = React.lazy(() => import('../components/ImageLoader'));

interface ImageWithFallbackProps {
    src: string;
    alt: string;
    loaderColor: string;
    [key: string]: any;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt, loaderColor, ...props }) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setHasError(false);
        img.onerror = () => setHasError(true);
    }, [src]);

    if (hasError) {
        return <div>Error loading image</div>;
    }

    return (
        <React.Suspense fallback={<LoadingSpinner />}>
            <LazyImage src={src} alt={alt} loaderColor={loaderColor} {...props} />
        </React.Suspense>
    );
};

export default ImageWithFallback;
import React, { useState } from 'react';

interface ImageComponentProps {
    src: string;
    alt: string;
    [key: string]: any;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
    src,
    alt,
    loaderColor,
    ...props
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    return (
        <React.Fragment>
            {isLoading && !hasError && (
                <div className="size-full object-fill flex items-center justify-center bg-opacity-75 z-50">
                    <l-quantum
                        size="50"
                        speed="1.75"
                        color={loaderColor}
                    ></l-quantum>
                </div>
            )}
            {hasError ? (
                <div className="size-full object-fill flex items-center justify-center bg-opacity-75 z-50">
                    <div>Error loading image</div>
                </div>
            ) : (
                <img
                    src={src}
                    alt={alt}
                    onLoad={() => setIsLoading(false)}
                    onError={() => {
                        setIsLoading(false);
                        setHasError(true);
                    }}
                    {...props}
                    style={{ display: isLoading ? 'none' : 'block' }}
                />
            )}
        </React.Fragment>
    );
};

export default ImageComponent;

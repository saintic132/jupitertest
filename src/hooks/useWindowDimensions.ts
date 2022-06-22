import {useEffect, useState} from 'react';

const getWindowDimensions = () => {

    const {innerWidth: width, innerHeight: height} = window;

    return {
        width,
        height,
    };
};

type IWindowDimensionSizeType = {
    width: number | null;
    height: number | null;
}

export const useWindowDimensions = () => {
    const initialDimensions = {width: null, height: null};
    const [windowDimensions, setWindowDimensions] = useState<IWindowDimensionSizeType>(initialDimensions);

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const {width, height} = windowDimensions;

    return {
        width,
        height
    };
};

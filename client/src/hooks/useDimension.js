import {useState,useEffect} from 'react';

export const useDimension = (innerDimension) => {
    const [width,setWidth] = useState(innerDimension);

        useEffect(() => {
            function handleResize() {
                setWidth(window.innerWidth);
            }

            window.addEventListener('resize', handleResize);
            return function cleanup(){
                window.removeEventListener('resize',handleResize,false);
            }
        })

    return width;
}
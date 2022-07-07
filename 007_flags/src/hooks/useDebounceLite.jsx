import { useEffect, useState } from 'react';

const useDebounceLite = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handleTime = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(handleTime);
        };
    }, [value, delay]);
    return debounceValue;
};
export default useDebounceLite;

import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay?: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => { setDebouncedValue(value) }, delay || 500)

        return () => {
            clearTimeout(timer)
        }
    }, [value,delay])

    return debouncedValue;
}


// A hook to debounce a value, delaying its updates to avoid overwhelming the database with queries
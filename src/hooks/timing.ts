import { useState, useEffect } from "react";

/**
 * @returns a knock-off of the setTimeout function that's safe to use in react components.
 * Any timeouts created will be automatically cleared when the calling component de-renders.
 */
export function useTimeout() {
    // id list
    const [IDs] = useState([] as NodeJS.Timeout[]);

    // destructor
    //     clears all timeouts
    useEffect(
        () => () => {
            for (const id of IDs) {
                clearTimeout(id);
            }
        },
        []
    );

    return function reactTimeout(
        callback: (...args: any[]) => void,
        ms: number,
        ...args: any[]
    ) {
        const id = setTimeout(callback, ms, ...args);
        IDs.push(id);
        return id;
    };
}

/**
 * @returns a knock-off of the setInterval function that's safe to use in react components.
 * Any intervals created will be automatically cleared when the calling component de-renders.
 */
export function useInterval() {
    // id list
    const [IDs] = useState([] as NodeJS.Timeout[]);

    // destructor
    //     clears all intervals
    useEffect(
        () => () => {
            for (const id of IDs) {
                clearInterval(id);
            }
        },
        []
    );

    return function reactInterval(
        callback: (...args: any[]) => void,
        ms: number,
        ...args: any[]
    ) {
        const id = setInterval(callback, ms, ...args);
        IDs.push(id);
        return id;
    };
}

export function useSleep() {
    const reactTimeout = useTimeout();

    return function reactSleep(ms: number) {
        return new Promise((resolve) => reactTimeout(resolve, ms));
    };
}

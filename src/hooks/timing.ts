import { useEffect, useRef } from "react";
import { applyCallback } from "../utils/functionUtils";

/**
 * React safe version of setTimeout.
 * @returns The id of the created timeout or undefined if the component has unmounted.
 */
export type HookedSetTimeout = (
    handler: (...args: any) => any,
    timeout?: number,
    options?: HookedSetTimeoutOptions
) => number | undefined;

export interface HookedSetTimeoutOptions {
    onCleared?: (...args: any) => any;
    finally?: (...args: any) => any;
}

/**
 * Creates a react-safe version of setTimeout. All timeouts created will be cleared if the component unmounts.
 * Once that component has unmounted, no new timeouts can be made.
 */
export function useTimeout(): HookedSetTimeout {
    const { current: timeouts } = useRef(
        new Map<number, HookedSetTimeoutOptions | undefined>()
    );

    const isUnMountedRef = useRef(false);

    useEffect(
        () => () => {
            isUnMountedRef.current = true;

            for (const [id, options] of timeouts.entries()) {
                clearTimeout(id);
                applyCallback(options?.onCleared);
                applyCallback(options?.finally);
            }
        },
        []
    );

    return function hookedSetTimeout(handler, timeout, options) {
        // Don't set the timeout if the component has unmounted.
        if (isUnMountedRef.current) {
            applyCallback(options?.onCleared);
            applyCallback(options?.finally);
            return undefined;
        }

        // Add ids.delete to the handler so that it's id is removed from the set once it runs
        // since a timeout handler can't run more than once like an interval handler.
        const selfClearHandler = () => {
            const options = timeouts.get(id);
            timeouts.delete(id);

            try {
                handler();
            } finally {
                applyCallback(options?.finally);
            }
        };

        const id = window.setTimeout(selfClearHandler, timeout);
        timeouts.set(id, options);
        return id;
    };
}

/**
 * React safe version of setInterval.
 * @returns The id of the created interval or undefined if the component has unmounted.
 */
export type HookedSetInterval = (
    handler: (...args: any) => any,
    interval?: number,
    options?: HookedSetIntervalOptions
) => number | undefined;

export interface HookedSetIntervalOptions {
    onCleared?: (...args: any) => any;
}

/**
 * Creates a react-safe version of setTimeout. All timeouts created will be cleared if the component unmounts.
 * Once that component has unmounted, no new timeouts can be made.
 */
export function useInterval(): HookedSetInterval {
    const { current: intervals } = useRef<
        { id: number; options?: HookedSetIntervalOptions }[]
    >([]);

    const isUnMountedRef = useRef(false);

    useEffect(
        () => () => {
            isUnMountedRef.current = true;

            for (const interval of intervals) {
                clearInterval(interval.id);
                applyCallback(interval.options?.onCleared);
            }
        },
        [intervals]
    );

    return function hookedSetInterval(handler, interval, options) {
        // Don't set the interval if the component has unmounted.
        if (isUnMountedRef.current) {
            // Also call it's onCleared callback since it's basically cleared instantly.
            applyCallback(options?.onCleared);
            return undefined;
        }

        const id = window.setInterval(handler, interval);
        intervals.push({ id, options });

        return id;
    };
}

/**
 * Runs the given handler function at the given interval for the lifespan of the component.
 */
export function useLifespanInterval(
    handler: (...args: any) => any,
    interval?: number
) {
    useEffect(() => {
        const id = setInterval(handler, interval);
        return () => clearInterval(id);
    });
}

export type HookedSleep = (timeout: number) => Promise<void> | undefined;

/**
 * @returns React safe sleep function. The returned promise will resolved either: after the timeout; or once the component unmounts; whichever happens first.
 */
export function useSleep(): HookedSleep {
    const hookedTimeout = useTimeout();

    return function hookedSleep(timeout: number) {
        return new Promise((resolve) =>
            hookedTimeout(resolve, timeout, { onCleared: resolve })
        );
    };
}

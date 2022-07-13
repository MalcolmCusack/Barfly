/** @returns A Promise that resolves after the specified timeout. */
export function sleep(timeout: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, timeout));
}

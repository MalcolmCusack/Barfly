/** Runs the given callback function and captures and logs any error thrown, keeping the error from propogating up. */
export function applyCallback(callback?: (...args: any) => any) {
    if (callback === undefined) return;

    let output;

    try {
        output = callback();
    } catch (e) {
        console.error(e);
    }

    if (output instanceof Promise) {
        output.catch((e) => console.log(e));
    }
}

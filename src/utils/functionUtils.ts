/** Runs the given callback function and logs any error thrown. */
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

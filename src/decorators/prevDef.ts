export default function prevDef<E>(
    eventHandler: E
): E {
    //@ts-ignore
    return function (event, ...rest) {
        if (typeof (event as any).preventDefault === "function") {
            (event as any).preventDefault();
        }
        (event as any).preventDefault();
        //@ts-ignore
        return eventHandler(event, ...rest);
    };
}

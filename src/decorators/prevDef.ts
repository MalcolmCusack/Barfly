export default function prevDef<E extends { preventDefault: () => any }>(
    eventHandler: (event: E) => any
) {
    return (event: E) => {
        event.preventDefault();
        return eventHandler(event);
    };
}

interface EventLike{
    preventDefault: () => any,
}

export default function prevDef(eventHandler: (event: EventLike) => any){
    return (event: EventLike) => {
        event.preventDefault();
        return eventHandler(event);
    }
}
import React, { useRef, useImperativeHandle } from 'react'

const StripeInput = ({ component: Component, inputRef, ...other }) => {
    const inputStyle= {
        color: '#fcba03'
    }

    const elementRef = useRef();
    useImperativeHandle(inputRef, () => ({
        focus: () => elementRef.current.focus
    }));

    return (
        <Component onReady={element => (elementRef.current = element)} {...other} 
            options={{
                style: {
                    base: inputStyle,
                },
            }}
        />
    );
}

export default StripeInput 
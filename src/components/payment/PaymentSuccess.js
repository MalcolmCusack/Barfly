import React, {useContext, useEffect, useState} from 'react'
import { Button } from '@mui/material'
import { useStateValue } from '../../state/StateProvider'
import { API, graphqlOperation } from "aws-amplify";
import { NavigateContext } from '../../App';

const PaymentSuccess = () => {

    const [{ order, user }, dispatch ] = useStateValue()

    const navigator = useContext(NavigateContext);

    function navigate(destination) {
        navigator(destination)
    }

    

    return (
        <div>
            <h2>Your order has been Recieved!</h2>
    
            <Button variant="outlined" onClick={() => navigate("/")} >Back To Menu</Button>
        </div>
    )
}

export default PaymentSuccess

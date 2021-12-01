import { Button, ButtonGroup } from "@mui/material";

import { useNavigate } from "react-router";

const PaymentSuccess = () => {

    const navigator = useNavigate();

    function navigate(destination) {
        navigator(destination);
    }



    return (
        <div>
            <h2>Your order has been Recieved!</h2>

            <ButtonGroup>
                <Button variant="outlined" onClick={() => navigate("/")}>
                    Back To Menu
                </Button>
                <Button
                    variant="contained"
                    onClick={() => navigate("/orderstatus")}
                >
                    See Order Status
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default PaymentSuccess;

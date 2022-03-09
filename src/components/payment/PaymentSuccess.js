import { Button, ButtonGroup } from "@mui/material";

import { useNavigate } from "react-router";
import { useStateValue } from "../../state/StateProvider";

const PaymentSuccess = () => {

    const [{currentBar }] = useStateValue();
 

    const navigator = useNavigate();

    function navigate(destination) {
        navigator(destination);
    }



    return (
        <div>
            <h2>Order Recieved!</h2>

            <ButtonGroup>
                <Button variant="outlined" onClick={() => navigate(`/${currentBar.id}/menu`)} style={{ backgroundColor:'#292929'}}>
                    Back To Menu
                </Button>
                <Button
                    variant="contained"
                    onClick={() => navigate(`/${currentBar.id}/orderstatus`)}
                >
                    See Order Status
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default PaymentSuccess;

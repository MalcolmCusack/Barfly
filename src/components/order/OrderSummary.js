import { Button, ButtonGroup } from "@mui/material";
import { useStateValue } from "../../state/StateProvider";
import OrderItem from "./OrderItem";
import { getOrderTotal } from "../../state/reducer";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
    const [{ order, currentBar }] = useStateValue();

    const navigator = useNavigate();

    function navigate(destination) {
        navigator(destination);
    }

    const uniqueOrder = [
        ...new Map(order.map((item) => [item["name"], item])).values(),
    ];

    return (
        <div>
            <h2>Summary</h2>
            <div>
                {uniqueOrder.map((item) => {
                    var count = order.filter(
                        (v) => v.name === item.name
                    ).length;
                    return (
                        <OrderItem key={item.id} item={item} count={count} />
                    );
                })}
            </div>

            <h4>Order Total: ${getOrderTotal(order).toFixed(2)}</h4>

            <ButtonGroup
                style={{ padding: "15px" }}
                disableElevation
                variant="outlined"
            >
                <Button
                    className="buttons"
                    style={{ backgroundColor: "#292929" }}
                    onClick={() => navigate(-1)}
                >
                    Back to Menu
                </Button>
                <Button
                    className="buttons"
                    variant="contained"
                    onClick={() => navigate(`/${currentBar.id}/payment`)}
                    disabled={order.length === 0}
                >
                    Checkout (${getOrderTotal(order).toFixed(2)})
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default OrderSummary;

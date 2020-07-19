import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{ basket }] = useStateValue();

    return (
        <div className="subtotal">
            {/* Price */}

            <CurrencyFormat
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'£'}
                renderText={value =>
                    <div>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </div>
                }
            />

            {/* <CurrencyFormat
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayText={'text'}
                thousandSeparator={true}
                prefix={'£'}
                renderText={(value) => (<div><p>{value}</p></div>)}
            // renderText={(value) => (
            //     <div>
            //         <p>
            //             Subtotal ({basket.length} items: <strong>{'£{value}`}</strong>)
            //                 </p>
            //         <small className="subtotal__gift">
            //             <input type="checkbox">This order contains a gift</input>
            //         </small>
            //     </div>
            // )}
            /> */}
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal

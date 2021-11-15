import React from "react";
import { CurrencyServiceConsumer } from "../components/currency-service-context";

const withCurrencyService = () => (Wrapped) => {
    return (props) => {
        return (
            <CurrencyServiceConsumer>
                {
                    (currencyService) => {
                        return (<Wrapped {...props}
                            currencyService={currencyService} />)
                    }
                }
            </CurrencyServiceConsumer>
        )
    }
}

export default withCurrencyService
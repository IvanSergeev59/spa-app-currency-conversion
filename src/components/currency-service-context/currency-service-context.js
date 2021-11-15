import React from "react";

const {
    Provider: CurrencyServiceProvider,
    Consumer: CurrencyServiceConsumer
} = React.createContext()

export {
    CurrencyServiceProvider,
    CurrencyServiceConsumer
}
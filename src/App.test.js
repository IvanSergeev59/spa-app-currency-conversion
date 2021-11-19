import React from "react";
import { render, screen } from "@testing-library/react";
import {UserCurrencyContainer} from "./components/user-currency/user-currency.js";

// check text UserCurrencyContainer component
test('UserCurrencyContainer renders Ваша валюта:', () => {
    const {getByText} = render(<UserCurrencyContainer />); 
    const linkElement = getByText(/Ваша валюта:/i);
    expect(linkElement).toBeInTheDocument();
  });

test('UserCurrencyContainer snapshot', () => {
    const {asFragment} = render(<UserCurrencyContainer />);
    expect(asFragment(<UserCurrencyContainer />)).toMatchSnapshot();
})
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {UserCurrencyContainer} from "./components/user-currency/user-currency.js";

// check text UserCurrencyContainer component
test('UserCurrencyContainer renders Ваша валюта:', () => {
    const {getByText} = render(<UserCurrencyContainer />); 
    const linkElement = getByText(/Ваша валюта:/i);
    expect(linkElement).toBeInTheDocument();
  });

  // check UserCurrencyContainer render component
test('UserCurrencyContainer snapshot', () => {
    const {asFragment} = render(<UserCurrencyContainer />);
    expect(asFragment(<UserCurrencyContainer />)).toMatchSnapshot();
})

describe("UserCurrencyContainer", () => {
    it("renders UserCurrencyContainer component", () => {
    render(<UserCurrencyContainer />);
    expect(screen.getByText("USD")).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByLabelText(/Default select example/i)).toBeInTheDocument();
    })
});



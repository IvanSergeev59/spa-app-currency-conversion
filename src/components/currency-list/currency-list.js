import {React, Component} from "react";
import { Form} from "react-bootstrap";
import { connect } from "react-redux";
import './currency-list.css'

const CurrencyList = ( {currentUsd, totalUsd}) => { 
    return (        

        <div className="currency-list">
            <Form className="form" >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>USD in RUB</Form.Label>
                    <Form.Control placeholder="Введите количество" />
                   
                </Form.Group>
                
            </Form>
            <p className="result-block">Result:</p>
            <p className="result-field">{totalUsd}</p>
        </div>
    )
}

class CurrencyListContainer extends Component {   

    render () {
        const {currentUsd, totalUsd} = this.props
        return (
            <CurrencyList currentUsd={currentUsd} totalUsd={totalUsd}/>
        )
    }
}

const mapStateToProps = ({currentUsd, totalUsd}) => {
    return {currentUsd, totalUsd}
} 

export default connect(mapStateToProps)(CurrencyListContainer)
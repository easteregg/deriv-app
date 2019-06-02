import PropTypes         from 'prop-types';
import React             from 'react';
import { localize }      from '_common/localize';
import Money             from 'App/Components/Elements/money.jsx';
import { IconPriceMove } from 'Assets/Trading/icon-price-move.jsx';

class IndicativeCell extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            movement: null,
            amount  : 0,
        };
    }

    componentWillReceiveProps(props) {
        this.setState(() => ({
            movement: props.amount >= this.state.amount ? 'profit' : 'loss',
            amount  : props.amount,
        }));
    }

    render() {
        const { amount, currency, status } = this.props;
        const { movement } = this.state;
        return (
            <div className='open-positions__indicative' >
                <Money amount={Math.abs(amount)} currency={currency} />
                <div className='open-positions__indicative--movement'>
                    <IconPriceMove type={movement} />
                </div>
                {status === 'no-resale' &&
                <div className='indicative__no-resale-msg'>
                    {localize('Resale not offered')}
                </div>
                }
            </div>
        );
    }
}

IndicativeCell.propTypes = {
    amount  : PropTypes.number,
    currency: PropTypes.string,
    status  : PropTypes.string,
};

export default IndicativeCell;
import PropTypes            from 'prop-types';
import React                from 'react';
import ChartLoader          from 'App/Components/Elements/chart-loader.jsx';
import { getPropertyValue } from '_common/utility';
import UILoader             from 'App/Components/Elements/ui-loader.jsx';
import { connect }          from 'Stores/connect';
import PositionsDrawer      from 'App/Components/Elements/PositionsDrawer';
import MarketIsClosedOverlay from 'App/Components/Elements/market-is-closed-overlay.jsx';
import NotificationMessages from 'App/Containers/notification-messages.jsx';
import Test                 from './test.jsx';
import FormLayout           from '../Components/Form/form-layout.jsx';
import Digits               from '../../Contract/Containers/digits.jsx';
import InfoBox              from '../../Contract/Containers/info-box.jsx';
import { isDigitTradeType } from '../Helpers/digits';

const SmartChart = React.lazy(() => import(/* webpackChunkName: "smart_chart" */'../../SmartChart'));

class Trade extends React.Component {
    componentDidMount() {
        this.props.showPositions();
        this.props.onMount();
    }

    componentWillUnmount() {
        this.props.hidePositions();
        if (this.props.is_contract_mode) {
            this.props.onCloseContract();
        }
        this.props.onUnmount();
    }

    render() {
        const contract_id                  = getPropertyValue(this.props.purchase_info, ['buy', 'contract_id']);
        const form_wrapper_class           = this.props.is_mobile ? 'mobile-wrapper' : 'sidebar__container desktop-only';
        const should_show_bottom_widgets   = this.props.is_digit_contract && this.props.is_contract_mode;
        const should_show_last_digit_stats = isDigitTradeType(this.props.contract_type) && !this.props.is_contract_mode;
        const is_chart_visible             = (this.props.is_chart_loading || !this.props.is_chart_ready);

        return (
            <div id='trade_container' className='trade-container'>
                <PositionsDrawer />
                <div className='chart-container'>
                    <NotificationMessages />
                    { this.props.symbol &&
                        <React.Suspense fallback={<UILoader />} >
                            <ChartLoader is_visible={is_chart_visible} />
                            <SmartChart
                                chart_id={this.props.chart_id}
                                chart_type={this.props.chart_type}
                                Digits={<Digits is_trade_page />}
                                InfoBox={<InfoBox is_trade_page />}
                                end_epoch={this.props.end_epoch}
                                granularity={this.props.granularity}
                                is_trade_page
                                onSymbolChange={this.props.onSymbolChange}
                                scroll_to_epoch={this.props.scroll_to_epoch}
                                scroll_to_offset={this.props.scroll_to_offset}
                                start_epoch={this.props.start_epoch}
                                should_show_bottom_widgets={should_show_bottom_widgets}
                                should_show_last_digit_stats={should_show_last_digit_stats}
                                symbol={this.props.symbol}
                            />
                        </React.Suspense>
                    }
                    {/* Remove Test component for debugging below for production release */}
                    <Test />
                </div>
                <div
                    className={form_wrapper_class}
                    onClick={this.props.is_contract_mode ? (e) => {
                        this.props.onCloseContract();
                        this.props.onClickNewTrade(e);
                    } : null}
                    style={{ cursor: this.props.is_contract_mode ? 'pointer' : 'initial' }}
                >
                    { this.props.is_market_closed && <MarketIsClosedOverlay />}
                    <FormLayout
                        is_mobile={this.props.is_mobile}
                        is_contract_visible={!!contract_id || this.props.is_contract_mode}
                        is_trade_enabled={this.props.is_trade_enabled}
                        is_blurred={this.props.is_market_closed}
                    />
                </div>
            </div>
        );
    }
}

Trade.propTypes = {
    chart_id         : PropTypes.string,
    chart_type       : PropTypes.string,
    contract_type    : PropTypes.string,
    end_epoch        : PropTypes.number,
    granularity      : PropTypes.number,
    hidePositions    : PropTypes.func,
    is_chart_loading : PropTypes.bool,
    is_chart_ready   : PropTypes.bool,
    is_contract_mode : PropTypes.bool,
    is_digit_contract: PropTypes.bool,
    is_market_closed : PropTypes.bool,
    is_mobile        : PropTypes.bool,
    is_trade_enabled : PropTypes.bool,
    onClickNewTrade  : PropTypes.func,
    onCloseContract  : PropTypes.func,
    onMount          : PropTypes.func,
    onSymbolChange   : PropTypes.func,
    onUnmount        : PropTypes.func,
    purchase_info    : PropTypes.object,
    scroll_to_epoch  : PropTypes.number,
    scroll_to_offset : PropTypes.number,
    showPositions    : PropTypes.func,
    start_epoch      : PropTypes.number,
    symbol           : PropTypes.string,
};

export default connect(
    ({ modules, ui }) => ({
        is_digit_contract                  : modules.contract.is_digit_contract,
        onCloseContract                    : modules.contract.onCloseContract,
        chart_id                           : modules.smart_chart.chart_id,
        chart_type                         : modules.smart_chart.chart_type,
        scroll_to_epoch                    : modules.smart_chart.scroll_to_left_epoch,
        scroll_to_offset                   : modules.smart_chart.scroll_to_left_epoch_offset,
        granularity                        : modules.smart_chart.granularity,
        end_epoch                          : modules.smart_chart.end_epoch,
        start_epoch                        : modules.smart_chart.start_epoch,
        is_chart_loading                   : modules.smart_chart.is_chart_loading,
        is_chart_ready                     : modules.smart_chart.is_chart_ready,
        is_contract_mode                   : modules.smart_chart.is_contract_mode,
        contract_type                      : modules.trade.contract_type,
        is_market_closed                   : modules.trade.is_market_closed,
        is_trade_enabled                   : modules.trade.is_trade_enabled,
        onClickNewTrade                    : modules.trade.onClickNewTrade,
        onMount                            : modules.trade.onMount,
        onSymbolChange                     : modules.trade.onChange,
        onUnmount                          : modules.trade.onUnmount,
        purchase_info                      : modules.trade.purchase_info,
        symbol                             : modules.trade.symbol,
        hidePositions                      : ui.hidePositionsFooterToggle,
        showPositions                      : ui.showPositionsFooterToggle,
        has_only_forward_starting_contracts: ui.has_only_forward_starting_contracts,
        is_mobile                          : ui.is_mobile,
        setHasOnlyForwardingContracts      : ui.setHasOnlyForwardingContracts,
    })
)(Trade);

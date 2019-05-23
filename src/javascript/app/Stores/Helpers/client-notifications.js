import React            from 'react';
import { formatDate }   from 'Utils/Date';
import { WS }           from 'Services';
import { getRiskAssessment,
    isAccountOfType,
    shouldAcceptTnc,
    shouldCompleteTax } from '_common/base/client_base';
import { localize }     from '_common/localize';
import {
    LocalStore,
    State }             from '_common/storage';
import { urlFor }       from '_common/url';
import Localize         from '../../App/Components/Elements/localize.jsx';

// TODO: Update links to app_2 links when components are done.
/* eslint-disable react/jsx-no-target-blank */
const client_notifications = {
    currency: {
        header : localize('Set Currency'),
        message: (
            <Localize
                str='Please set the [_1]currency[_2] of your account to enable trading.'
                replacers={{ '1_2': <a className='link link--white' target='_blank' href={urlFor('user/set-currency', undefined, undefined, true)} /> }}
            />
        ),
        type: 'danger',
    },
    self_exclusion: (excluded_until) => ({
        header : localize('Self-exclusion Detected'),
        message: (
            <Localize
                str='You have opted to be excluded from Binary.com until [_1]. Please [_2]contact us[_3] for assistance.'
                replacers={{
                    '1'  : formatDate(excluded_until, 'DD/MM/YYYY'),
                    '2_3': <a className='link link--white' target='_blank' href={urlFor('contact', undefined, undefined, true)} /> }}
            />
        ),
        type: 'danger',
    }),
    authenticate: {
        header : localize('Account Authentication'),
        message: (
            <Localize
                str='[_1]Authenticate your account[_2] now to take full advantage of all payment methods available.'
                replacers={{ '1_2': <a className='link link--white' target='_blank' href={urlFor('user/authenticate', undefined, undefined, true)} /> }}
            />
        ),
        type: 'info',
    },
    document_review: {
        header : localize('Documents in review'),
        message: (
            <Localize
                str='We are reviewing your documents. For more details [_1]contact us[_2].'
                replacers={{ '1_2': <a className='link link--white' target='_blank' href={urlFor('contact', undefined, undefined, true)} /> }}
            />
        ),
        type: 'info',
    },
    cashier_locked: {
        header : localize('Cashier Disabled'),
        message: localize('Deposits and withdrawals have been disabled on your account. Please check your email for more details.'),
        type   : 'warning',
    },
    withdrawal_locked: {
        header : localize('Withdrawal Disabled'),
        message: localize('Withdrawals have been disabled on your account. Please check your email for more details.'),
        type   : 'warning',
    },
    mt5_withdrawal_locked: {
        header : localize('MT5 Withdrawal Disabled'),
        message: localize('MT5 withdrawals have been disabled on your account. Please check your email for more details.'),
        type   : 'warning',
    },
    document_needs_action: {
        header : localize('Authentication Failed'),
        message: (
            <Localize
                str='[_1]Your Proof of Identity or Proof of Address[_2] did not meet our requirements. Please check your email for further instructions.'
                replacers={{ '1_2': <a className='link link--white' target='_blank' href={urlFor('user/authenticate', undefined, undefined, true)} /> }}
            />
        ),
        type: 'warning',
    },
    unwelcome: {
        header : localize('Trading and Deposits Disabled'),
        message: (
            <Localize
                str='Trading and deposits have been disabled on your account. Kindly contact [_1]customer support[_2] for assistance.'
                replacers={{ '1_2': <a className='link link--white' target='_blank' href={urlFor('contact', undefined, undefined, true)} /> }}
            />
        ),
        type: 'danger',
    },
    mf_retail: {
        header : localize('Binary Options Trading Disabled'),
        message: (
            <Localize
                str='Binary Options Trading has been disabled on your account. Kindly contact [_1]customer support[_2] for assistance.'
                replacers={{ '1_2': <a className='link link--white' target='_blank' href={urlFor('contact', undefined, undefined, true)} /> }}
            />
        ),
        type: 'danger',
    },
    financial_limit: {
        header : localize('Remove Deposit Limits'),
        message: (
            <Localize
                str='Please set your [_1]30-day turnover limit[_2] to remove deposit limits.'
                replacers={{ '1_2': <a className='link link--white' target='_blank' href={urlFor('user/security/self_exclusionws', undefined, undefined, true)} /> }}
            />
        ),
        type: 'warning',
    },
    risk: {
        header : localize('Withdrawal and Trading Limits'),
        message: (
            <Localize
                str='Please complete the [_1]Financial Assessment form[_2] to lift your withdrawal and trading limits.'
                replacers={{ '1_2': <a className='link link--white' target='_blank' href={urlFor('user/settings/assessmentws', undefined, undefined, true)} /> }}
            />
        ),
        type: 'info',
    },
    tax: {
        header : localize('Complete your personal details'),
        message: (
            <Localize
                str='Please complete your [_1]Personal Details[_2] before you proceed.'
                replacers={{ '1_2': <a className='link link--white' target='_blank' href={urlFor('user/settings/detailsws', undefined, undefined, true)} /> }}
            />
        ),
        type: 'danger',
    },
    tnc: {
        header : localize('Terms & Conditions Updated'),
        message: (
            <Localize
                str='Please [_1]accept the updated Terms and Conditions[_2] to enable deposit and trading.'
                replacers={{ '1_2': <a className='link link--white' target='_blank' href={urlFor('user/tnc_approvalws', undefined, undefined, true)} /> }}
            />
        ),
        type: 'danger',
    },
    required_fields: {
        header : localize('Complete your personal details'),
        message: (
            <Localize
                str='Please complete your [_1]Personal Details[_2] before you proceed.'
                replacers={{ '1_2': <a className='link link--white' target='_blank' href={urlFor('user/settings/detailsws', undefined, undefined, true)} /> }}
            />
        ),
        type: 'danger',
    },
};

const hasMissingRequiredField = (response, client) => {
    if (!response.get_settings) return false;

    const { landing_company_shortcode } = client;
    const is_svg = (landing_company_shortcode === 'svg' || landing_company_shortcode === 'costarica');

    let required_fields;
    if (is_svg) {
        required_fields = getSVGRequiredFields();
    } else {
        required_fields = getRequiredFields();
    }

    const get_settings = response.get_settings;
    return required_fields.some(field => !get_settings[field]);

    function getSVGRequiredFields() {
        const necessary_withdrawal_fields = State.getResponse('landing_company.financial_company.requirements.withdrawal');
        const necessary_signup_fields     = State.getResponse('landing_company.financial_company.requirements.signup')
            .map(field => (field === 'residence' ? 'country' : field));

        return [...necessary_withdrawal_fields, ...necessary_signup_fields];
    }

    function getRequiredFields() {
        if (!isAccountOfType('financial')) return [];
        const { residence } = client;

        const required_settings_fields = [
            'account_opening_reason',
            'address_line_1',
            'address_city',
            'phone',
            'tax_identification_number',
            'tax_residence'];
        const address_postcode_is_required = (residence === 'gb' || landing_company_shortcode === 'iom');
        if (address_postcode_is_required) required_settings_fields.push('address_postcode');

        return [...required_settings_fields];
    }
};

const checkAccountStatus = (response, client, addNotification, loginid) => {
    if (!response.get_account_status) return;
    if (loginid !== LocalStore.get('active_loginid')) return;

    const { prompt_client_to_authenticate, status } = response.get_account_status;

    const {
        document_under_review,
        cashier_locked,
        withdrawal_locked,
        mt5_withdrawal_locked,
        document_needs_action,
        unwelcome,
        ukrts_max_turnover_limit_not_set,
        professional,
    } = getStatusValidations(status);
    const is_mf_retail = client.landing_company_shortcode === 'maltainvest' && !professional;

    if (document_under_review) addNotification(client_notifications.document_review);
    if (cashier_locked)        addNotification(client_notifications.cashier_locked);
    if (withdrawal_locked)     addNotification(client_notifications.withdrawal_locked);
    if (mt5_withdrawal_locked) addNotification(client_notifications.mt5_withdrawal_locked);
    if (document_needs_action) addNotification(client_notifications.document_needs_action);
    if (unwelcome)             addNotification(client_notifications.unwelcome);
    if (is_mf_retail)          addNotification(client_notifications.mf_retail);
    if (ukrts_max_turnover_limit_not_set) {
        addNotification(client_notifications.financial_limit);
    }
    if (getRiskAssessment()) addNotification(client_notifications.risk);
    if (shouldCompleteTax()) addNotification(client_notifications.tax);

    if (prompt_client_to_authenticate && !(document_under_review || document_needs_action)) {
        addNotification(client_notifications.authenticate);
    }

    function getStatusValidations(status_arr) {
        return status_arr.reduce((validations, account_status) => {
            validations[account_status] = true;
            return validations;
        }, {});
    }
};

export const handleClientNotifications = (client, addNotification, loginid) => {
    const { currency, excluded_until } = client;
    if (!currency)         addNotification(client_notifications.currency);
    if (excluded_until)    addNotification(client_notifications.self_exclusion(excluded_until));

    WS.getAccountStatus().then((response) => checkAccountStatus(response, client, addNotification, loginid));

    WS.sendRequest({ get_settings: 1 }, { forced: true }).then((response) => {
        if (loginid !== LocalStore.get('active_loginid')) return;

        if (shouldAcceptTnc()) addNotification(client_notifications.tnc);

        if (hasMissingRequiredField(response, client)) {
            addNotification(client_notifications.required_fields);
        }
    });
};

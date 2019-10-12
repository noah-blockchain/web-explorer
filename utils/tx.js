import { txTypeList, TX_TYPE_MULTISEND, TX_TYPE_BUY, TX_TYPE_SELL, TX_TYPE_SELL_ALL } from 'noahjs-tx'
import Big from 'big.js'
import prettyNum, {PRECISION_SETTING} from 'pretty-num';
import decode from 'entity-decode';


export function txTypeFilter(value) {
  value = txTypeList[value].name // get type name
  value = value.charAt(0).toUpperCase() + value.slice(1) // capitalize the first letter
  return value
}

export function isMultisend(tx) {
  return tx.type === Number(TX_TYPE_MULTISEND)
}

export function getConvertCoinSymbol(tx) {
  if (tx.type === Number(TX_TYPE_SELL) || tx.type === Number(TX_TYPE_SELL_ALL)) {
    return tx.data.coin_to_sell
  }
  if (tx.type === Number(TX_TYPE_BUY)) {
    return tx.data.coin_to_buy
  }
}

export function pretty(value) {
  const PRECISION = 2;
  if (value >= 1 || value <= -1 || Number(value) === 0) {
    return decode(prettyNum(value, {precision: PRECISION, precisionSetting: PRECISION_SETTING.FIXED, thousandsSeparator: '&#x202F;'}));
  } else {
    value = decode(prettyNum(value, {precision: PRECISION, precisionSetting: PRECISION_SETTING.REDUCE_SIGNIFICANT, thousandsSeparator: '&#x202F;'}));
    value = value.substr(0, 10);
    if (value === '0.00000000') {
      return '0.00';
    }
    return value;
  }
}

export function getMultisendCoin(tx) {
  if (!isMultisend(tx)) {
    return
  }
  if (!isMultisendMultipleCoin(tx)) {
    return getMultisendDeliveryList(tx)[0].coin
  }
}

export function getMultisendDeliveryList(tx) {
  return tx.data.list || []
}

export function isMultisendMultipleCoin(tx) {
  if (!isMultisend(tx)) {
    return
  }
  const currentUserDeliveryList = getMultisendDeliveryList(tx)
  return currentUserDeliveryList.some((delivery) => {
    return delivery.coin !== currentUserDeliveryList[0].coin
  })
}

export function getConvertValue(tx) {
  if (tx.type === Number(TX_TYPE_SELL) || tx.type === Number(TX_TYPE_SELL_ALL)) {
    return tx.data.value_to_sell
  }
  if (tx.type === Number(TX_TYPE_BUY)) {
    return tx.data.value_to_buy
  }
}

export function getMultisendValue(tx) {
  if (!isMultisend(tx)) {
    return
  }
  const currentUserDeliveryList = getMultisendDeliveryList(tx)
  if (isMultisendMultipleCoin(tx)) {
    return '...'
  } else {
    return currentUserDeliveryList.reduce((accumulator, delivery) => accumulator.plus(new Big(delivery.value)), new Big(0)).toFixed()
  }
}

export function getAmount(tx) {
  return tx.data.value
    || getConvertValue(tx)
    || tx.data.stake
    || tx.data.initial_amount
    || (tx.data.check && tx.data.check.value)
    || getMultisendValue(tx)
}

export function getAmountWithCoin(tx) {
  if (isMultisend(tx) && isMultisendMultipleCoin(tx)) {
    return 'Multiple coins'
  } else {
    return (tx.data.coin || tx.data.symbol || getConvertCoinSymbol(tx) || (tx.data.check && tx.data.check.coin) || getMultisendCoin(tx)) + ' ' + pretty(getAmount(tx) || 0)
  }
}


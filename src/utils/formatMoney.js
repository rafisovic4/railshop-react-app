const formatMoney = (value) => {
    return `${Intl.NumberFormat('ru-Ru').format(parseInt(value))}`
}

export default formatMoney;
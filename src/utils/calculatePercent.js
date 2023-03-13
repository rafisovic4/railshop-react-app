const calculatePercent = (value, percent) => {
    console.log(value, percent);
    if(percent > 0) {
        percent = percent / 100;
    }

    return Math.ceil(value * percent);
}

export default calculatePercent;
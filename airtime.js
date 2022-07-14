function enoughAirtime(data, amount) {
    let num = data.split(",");
    let calls = 0;
    let msg = 0;
    let dataUsage = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i].trim() == "call") {
            calls += 1.88;
        } else if (num[i].trim() == "sms") {
            msg += 0.75;
        } else if (num[i].trim() == "data") {
            dataUsage += 12;
        }
    }
    let sum = calls + msg + dataUsage
    let remaining = amount - sum
    if (remaining <= 0)
        return "R0.00"
    else
        return "R" + remaining.toFixed(2)
}
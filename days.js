function weekOrWeekend(day) {
    if (day.startsWith("Sun") || day.startsWith("Sat")) {
        return "weekend";
    } else {
        return "week day";
    }
}
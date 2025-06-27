export function milliSecondsToHours(ms) {
    if (ms > 0) {
        const totalMinutes = ms / (1000 * 60);
        const hours = Math.floor(totalMinutes / 60);
        const minutes = Math.round(totalMinutes % 60);

        if (hours === 0) {
            return `${minutes}min`;
        } else if (minutes === 0) {
            return `${hours}h`;
        } else {
            return `${hours}h ${minutes}min`;
        }
    }
    else return "0min"
}

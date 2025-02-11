/**
 * Compares two dates by date only (ignoring time).
 * @param date1 - The first date to compare.
 * @param date2 - The second date to compare.
 * @returns true if the dates are the same, false otherwise.
 */

export default function compareDatesByDate(date1, date2) {
    const date1WithoutTime = new Date(date1.setHours(0, 0, 0, 0));
    const date2WithoutTime = new Date(date2.setHours(0, 0, 0, 0));
    return date1WithoutTime.getTime() === date2WithoutTime.getTime();
}
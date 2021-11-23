/**
 * @returns the amount in cents formatted in a string of form: d.cc where d in dollars and c is cents. example: 5.34
 */
 export function formatMoney(amount_cents: number) {
    const dollars = Math.trunc(amount_cents / 100);
    const cents = amount_cents % 100;
    return `${dollars}.${`${cents}`.padStart(2, "0")}`;
}
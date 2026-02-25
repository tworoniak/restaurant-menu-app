import type { Money } from '../types/menu';

export function usd(cents: number): Money {
  return { amount: cents, currency: 'USD' };
}

export function formatMoney(m: Money): string {
  // cents -> "$12.00"
  const dollars = (m.amount / 100).toFixed(2);
  return `$${dollars}`;
}

export function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(' ');
}
export function formatPriceGNF(value: number): string {
  return new Intl.NumberFormat('fr-FR').format(value) + ' GNF';
}

export const formatToColombianPesos = (amount: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0, // Puedes ajustar esto según tus necesidades
  }).format(amount);
};

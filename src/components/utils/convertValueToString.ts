export function convertValueToString(value: number) {
  const result = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  return result;
}

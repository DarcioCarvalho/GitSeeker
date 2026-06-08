export function formatStrValue(value: string | number | null | undefined): string | number {
  // Trata string vazia ou cheia de espaços
  if (typeof value === 'string' && value.trim() === '') {
    return 'Não informado';
  }

  // Trata null, undefined e mantém o 0 (zero) intacto
  return value ?? 'Não informado';
}

export function isNotEmpty(value: string): boolean {
  return value.trim().length > 0;
}

export function isPhoneValid(value: string): boolean {
  return value.replace(/\D/g, "").length >= 10;
}
export function validator<T>(
  valid: string[],
  value: T | undefined,
  defaultValue: T
) {
  if (!value) return defaultValue;
  return (valid as unknown as T[]).includes(value) ? value : defaultValue;
};

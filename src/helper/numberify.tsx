/**
 * Simple helper to change "," in a nimber to "." for decimal values. This is useful for locales that use "," as a decimal separator.
 */

export const numberify = (value: string): number => {
  const normalizedValue = value.replace(",", ".");
  const parsedValue = parseFloat(normalizedValue);
  return isNaN(parsedValue) ? 0 : parsedValue;
};

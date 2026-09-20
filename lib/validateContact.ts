/**
 * Loose validation: accepts a WhatsApp-style number (digits, spaces, +, -)
 * or an Instagram-style handle (@handle or plain handle). The PRD explicitly
 * warns against over-enforcing format since that hurts conversion — this only
 * rejects empty/junk input, not near-misses.
 */
export function validateContact(raw: string): { valid: boolean; error?: string } {
  const value = raw.trim();

  if (value.length < 6) {
    return { valid: false, error: "That looks too short — add a bit more." };
  }
  if (value.length > 60) {
    return { valid: false, error: "That looks too long for a number or handle." };
  }

  const phoneLike = /^[+\d][\d\s-]{5,}$/;
  const handleLike = /^@?[a-zA-Z0-9._]{3,30}$/;

  if (!phoneLike.test(value) && !handleLike.test(value)) {
    return {
      valid: false,
      error: "Enter a WhatsApp number or an Instagram handle.",
    };
  }

  return { valid: true };
}

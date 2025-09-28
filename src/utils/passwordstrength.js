export function checkPasswordStrength(password) {
  if (password.length < 8) return { label: "Too short", score: 0 };

  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  let score = 0;
  if (hasUpper) score++;
  if (hasLower) score++;
  if (hasNumber) score++;
  if (hasSymbol) score++;

  if (score === 4) return { label: "Strong", score: 3 };
  if (score === 3) return { label: "Medium", score: 2 };
  return { label: "Weak", score: 1 };
}

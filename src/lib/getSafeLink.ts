/**
 * Central Link Validation Utility
 *
 * Rules:
 * 1. Read URL from portfolioData.
 * 2. If empty → return null.
 * 3. If null → return null.
 * 4. If invalid → do not render the button.
 * 5. Never replace an invalid URL with a fake URL.
 * 6. Never invent a URL.
 * 7. External links should use appropriate target/rel behavior.
 * 8. Internal section links should use smooth scrolling.
 */
export function getSafeLink(url?: string | null): string | null {
  if (!url || typeof url !== 'string') return null;
  const trimmed = url.trim();
  if (!trimmed || trimmed === '#' || trimmed === '/') return null;

  // Safe internal section anchors
  if (trimmed.startsWith('#') && trimmed.length > 1) {
    return trimmed;
  }

  // Safe mailto links
  if (trimmed.startsWith('mailto:')) {
    const email = trimmed.replace('mailto:', '').trim();
    if (email && email.includes('@') && email.includes('.')) {
      return trimmed;
    }
    return null;
  }

  // Safe external URLs
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return trimmed;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Helper to check if a valid link exists
 */
export function hasValidLink(url?: string | null): boolean {
  return getSafeLink(url) !== null;
}

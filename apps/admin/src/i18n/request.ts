import { getRequestConfig } from 'next-intl/server';
import en from '@mycms/i18n/locales/en.json';
import fr from '@mycms/i18n/locales/fr.json';

// Map locales to their messages
const messages = { en, fr };

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that the incoming locale is valid
  if (!locale || !messages[locale as keyof typeof messages]) {
    locale = 'en'; // Fallback to English
  }

  return {
    locale,
    messages: messages[locale as keyof typeof messages]
  };
});

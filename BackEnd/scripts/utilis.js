export default class Utilis {
  constructor() {
    this.timestamp = this.formatTimestamp(new Date().toISOString());
  }

  formatTimestamp(isoString, locale = 'en-US', options = {}) {
    const date = new Date(isoString);
    const defaultOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    };
    return date.toLocaleString(locale, { ...defaultOptions, ...options });
  }

  getCurrentTimestamp(locale = 'en-US', options = {}) {
    return this.formatTimestamp(new Date().toISOString(), locale, options);
  }
}

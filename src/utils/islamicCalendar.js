/**
 * Islamic Calendar Utilities
 * Provides functions to calculate Islamic dates and Ramadan timing
 */

/**
 * Calculate the next Ramadan date
 * Note: This is an approximation. For production, use a proper Islamic calendar API
 * @returns {Date} The approximate start date of the next Ramadan
 */
export function getNextRamadanDate() {
    const now = new Date();
    const currentYear = now.getFullYear();

    // Ramadan dates for upcoming years (approximate, based on astronomical calculations)
    // In production, this should be fetched from an API like Aladhan or IslamicFinder
    const ramadanDates = {
        2025: new Date('2025-02-28T00:00:00'),
        2026: new Date('2026-02-17T00:00:00'),
        2027: new Date('2027-02-07T00:00:00'),
        2028: new Date('2028-01-27T00:00:00'),
        2029: new Date('2029-01-16T00:00:00'),
        2030: new Date('2030-01-05T00:00:00'),
    };

    // Find the next Ramadan date
    for (let year = currentYear; year <= currentYear + 10; year++) {
        const ramadanDate = ramadanDates[year];
        if (ramadanDate && ramadanDate > now) {
            return ramadanDate;
        }
    }

    // Fallback to 2026 if no date found
    return ramadanDates[2026];
}

/**
 * Convert Gregorian date to Islamic date (Hijri) using Intl.DateTimeFormat
 * @param {Date} date - Gregorian date
 * @returns {Object} Islamic date with year, month, and day
 */
export function gregorianToHijri(date = new Date()) {
    const formatter = new Intl.DateTimeFormat('en-US-u-ca-islamic-umalqura', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    });

    const parts = formatter.formatToParts(date);
    const dayPart = parts.find(p => p.type === 'day').value;
    const monthPart = parts.find(p => p.type === 'month').value;
    const yearPart = parts.find(p => p.type === 'year').value;

    const islamicMonths = [
        "Muharram", "Safar", "Rabi Al-Awwal", "Rabi Al-Thani",
        "Jumada Al-Awwal", "Jumada Al-Thani", "Rajab", "Sha'ban",
        "Ramadan", "Shawwal", "Dhul-Qi'dah", "Dhul-Hijjah"
    ];

    // Extract numeric values
    const year = parseInt(yearPart.split(' ')[0]);
    const monthIndex = parseInt(monthPart) - 1; // 0-based index
    const monthName = islamicMonths[monthIndex] || monthPart;
    const day = parseInt(dayPart);

    return {
        year: year,
        month: monthName,
        day: day,
        formatted: `${day} ${monthName} ${year}`
    };
}

/**
 * Get days until Ramadan
 * @returns {number} Number of days until Ramadan
 */
export function getDaysUntilRamadan() {
    const now = new Date();
    const ramadanDate = getNextRamadanDate();
    const difference = ramadanDate.getTime() - now.getTime();
    return Math.ceil(difference / (1000 * 60 * 60 * 24));
}

/**
 * Check if currently in Ramadan
 * @returns {boolean} True if currently in Ramadan
 */
export function isRamadan() {
    const now = new Date();
    const ramadanStart = getNextRamadanDate();
    const ramadanEnd = new Date(ramadanStart);
    ramadanEnd.setDate(ramadanEnd.getDate() + 30); // Ramadan is 29-30 days

    return now >= ramadanStart && now <= ramadanEnd;
}

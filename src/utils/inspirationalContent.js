/**
 * Inspirational Quranic verses and Hadiths about Ramadan
 */

export const quranVerses = [
    {
        text: "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous.",
        reference: "Quran 2:183",
        arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ"
    },
    {
        text: "The month of Ramadan in which was revealed the Quran, a guidance for the people and clear proofs of guidance and criterion.",
        reference: "Quran 2:185",
        arabic: "شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ وَبَيِّنَاتٍ مِّنَ الْهُدَىٰ وَالْفُرْقَانِ"
    },
    {
        text: "And when My servants ask you concerning Me - indeed I am near. I respond to the invocation of the supplicant when he calls upon Me.",
        reference: "Quran 2:186",
        arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ"
    },
    {
        text: "Indeed, We sent the Quran down during the Night of Decree. And what can make you know what is the Night of Decree? The Night of Decree is better than a thousand months.",
        reference: "Quran 97:1-3",
        arabic: "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ"
    }
];

export const hadiths = [
    {
        text: "When Ramadan begins, the gates of Paradise are opened and the gates of Hell are closed, and the devils are chained.",
        reference: "Sahih Bukhari",
        narrator: "Abu Hurairah (RA)"
    },
    {
        text: "Whoever fasts during Ramadan with faith and seeking his reward from Allah will have his past sins forgiven.",
        reference: "Sahih Bukhari",
        narrator: "Abu Hurairah (RA)"
    },
    {
        text: "Whoever stands (in prayer) during Laylat al-Qadr with faith and seeking reward, his previous sins will be forgiven.",
        reference: "Sahih Bukhari",
        narrator: "Abu Hurairah (RA)"
    },
    {
        text: "Fasting is a shield with which a servant protects himself from the Fire.",
        reference: "Musnad Ahmad",
        narrator: "Jabir (RA)"
    }
];

/**
 * Get a random Quranic verse
 * @returns {Object} Random verse with text, reference, and Arabic
 */
export function getRandomVerse() {
    return quranVerses[Math.floor(Math.random() * quranVerses.length)];
}

/**
 * Get a random Hadith
 * @returns {Object} Random hadith with text, reference, and narrator
 */
export function getRandomHadith() {
    return hadiths[Math.floor(Math.random() * hadiths.length)];
}

/**
 * Get random inspirational content (verse or hadith)
 * @returns {Object} Random content with type indicator
 */
export function getRandomContent() {
    const useVerse = Math.random() > 0.5;
    if (useVerse) {
        return { type: 'verse', content: getRandomVerse() };
    } else {
        return { type: 'hadith', content: getRandomHadith() };
    }
}

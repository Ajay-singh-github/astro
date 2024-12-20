import article1 from "../assets/article1.svg";
import article2 from "../assets/article2.svg";
import article3 from "../assets/article3.svg";
import article4 from "../assets/article4.svg";
import article5 from "../assets/article5.svg";

export const articlesList = [
  {
    key: "1",
    image: article1,
    title: "Astrology: The Ancient Science of Cosmic Influence",
    Date: "Oct 19, 2024",
    desc: "Astrology, a practice that Dates back thousands of years, connects human experiences to the movements of celestial bodies. Rooted in the belief that the position of planets and stars at the moment of birth influences our lives, astrology has long been a tool for understanding personality, predicting future events, and guiding spiritual growth. Astrology works on the principle that the universe is interconnected. The movement of the planets affects not only the physical world but also the emotional and psychological states of individuals. By creating a birth chart, or Janam Kundli, astrologers can map out the sky at the exact moment of your birth, offering a unique perspective on your strengths, challenges, and life purpose. Today, astrology is more accessible than ever, offering daily, weekly, and yearly horoscopes, as well as detailed analyses based on personal birth charts. Modern astrology has evolved to help people not only understand their fate but also to empower them to make conscious choices. Whether you are seeking answers about love, career, or self-development, astrology can provide valuable insights into the energies shaping your path.",
  },
  {
    key: "2",
    image: article2,
    title: "The Zodiac Signs: Understanding Their Influence on Our Lives",
    Date: "Oct 19, 2024",
    desc: "The twelve zodiac signs are the foundation of astrology, each representing distinct personality traits, behaviors, and life patterns. Your sun sign, determined by your birth Date, is often the most recognizable, but astrology goes far beyond this. It encompasses the positions of the moon, planets, and other cosmic factors that make your astrological profile unique. The zodiac signs are divided into four elements: fire, earth, air, and water, each influencing the signs in unique ways. Fire signs (Aries, Leo, Sagittarius) are known for their passion, energy, and enthusiasm. Earth signs (Taurus, Virgo, Capricorn) are practical, grounded, and reliable. Air signs (Gemini, Libra, Aquarius) are intellectual, communicative, and curious, while water signs (Cancer, Scorpio, Pisces) are emotional, intuitive, and empathetic. While your sun sign gives insight into your core personality, your moon sign reveals your emotional nature, and your rising sign reflects how others perceive you. Together, these elements create a complex, multi-layered profile that can explain everything from your relationships to your professional tendencies. Exploring your full astrological chart helps you understand why you respond to life's challenges in a particular way and how you can work with your cosmic influences to lead a more fulfilled life.",
  },
  {
    key: "3",
    image: article3,
    title: "The Importance of Janam Kundli in Vedic Astrology",
    Date: "Oct 19, 2024",
    desc: "In Vedic astrology, a Janam Kundli, or birth chart, serves as a cosmic blueprint that captures the positions of the planets and stars at the time of your birth. This chart offers deep insight into your life's purpose, destiny, and the obstacles or blessings you are likely to encounter. Vedic astrology holds that each planet governs different aspects of life—like wealth, relationships, career, and health—and their positions in specific houses of the Kundli determine the flow of your life in those areas. The Kundli also highlights specific planetary periods, known as dashas, that influence certain phases of your life, dictating the opportunities and challenges you may face. One of the most popular uses of the Kundli is in marriage compatibility. Vedic astrologers compare the birth charts of two individuals to assess their compatibility across various factors like temperament, life goals, and values. This process, known as Kundli matching, can predict potential conflicts and harmony in the relationship, offering remedies to strengthen the bond if necessary. Whether you're looking to understand your life path or seeking guidance on major life decisions, the Janam Kundli provides a valuable resource in navigating life's complexities.",
  },
  {
    key: "4",
    image: article4,
    title: "Numerology: Decoding Life's Mysteries Through Numbers",
    Date: "Oct 19, 2024",
    desc: "Numerology is an ancient practice that assigns mystical significance to numbers, offering insight into a person's character, life path, and destiny. By analyzing the numbers associated with your birth Date and name, numerology helps reveal hidden patterns and influences that shape your life. Each number holds a unique vibration. For instance, the numbers in your birth Date can be reduced to a single digit, known as your Life Path Number, which reflects your core personality and life's mission. Similarly, your name can be converted into numbers, offering further insight into your identity and how you interact with the world. For example, someone with a Life Path Number 1 is often a natural leader, driven by ambition and independence, while a Life Path Number 7 is associated with introspection, spirituality, and wisdom. Understanding these numbers can help you navigate life more effectively, aligning your actions with the energies that are most harmonious for you. Numerology goes beyond simple predictions, providing a framework for understanding your inner strengths, challenges, and how you can best utilize your potential. It can be used to make informed decisions in various aspects of life, including career choices, relationships, and personal development.",
  },
  {
    key: "5",
    image: article5,
    title: "The Art of Tarot: A Journey Through the Cards",
    Date: "Oct 19, 2024",
    desc: "Tarot reading is a centuries-old practice that uses a deck of 78 cards to provide guidance and insight into the past, present, and future. Each card in the Tarot deck carries symbolic meanings, and when laid out in a spread, these cards offer a narrative that can help you make sense of your life's circumstances and challenges. The Tarot deck is divided into two main sections: the Major Arcana and the Minor Arcana. The Major Arcana represents significant life events and themes, such as change, transformation, and personal growth. Cards like The Fool, The Lovers, and The Tower often point to major shifts or decisions in your life journey. The Minor Arcana, on the other hand, represents day-to-day influences, including relationships, work, and emotions, divided into four suits—Wands, Cups, Swords, and Pentacles. Tarot readings are not about predicting the future with absolute certainty, but rather offering insight into your current path and potential outcomes based on the energies around you. Each reading is unique to the moment, reflecting the influences that are currently at play in your life. Whether you are seeking answers to specific questions or looking for general guidance, Tarot can provide a mirror into your subconscious, helping you to see your situation from a new perspective and make empowered decisions for the future."
  },
];

export const moreItems = [
  {
    name: "Dosha",
    content: [
      {
        key: "Mangal Dosh",
        link: "https://api.vedicastroapi.com/v3-json/dosha/mangal-dosh?dob=Dateofbirth&tob=timeofbirth&lat={{lat}}&lon={{lon}}&tz=5.5&api_key=YOUR_API_KEY&lang=en",
      },
      {
        key: "Kaalsarp Dosh",
        link: "https://api.vedicastroapi.com/v3-json/dosha/kaalsarp-dosh?dob=Dateofbirth&tob=timeofbirth&lat={{lat}}&lon={{lon}}&tz=5.5&api_key=YOUR_API_KEY&lang=en",
      },
      {
        key: "Manglik Dosh",
        link: "https://api.vedicastroapi.com/v3-json/dosha/manglik-dosh?dob=Dateofbirth&tob=timeofbirth&lat={{lat}}&lon={{lon}}&tz=5.5&api_key=YOUR_API_KEY&lang=en",
      },
      {
        key: "Pitra Dosh",
        link: "https://api.vedicastroapi.com/v3-json/dosha/pitra-dosh?dob=Dateofbirth&tob=timeofbirth&lat={{lat}}&lon={{lon}}&tz=5.5&api_key=YOUR_API_KEY&lang=en",
      },
      {
        key: "Papasamaya",
        link: "https://api.vedicastroapi.com/v3-json/dosha/papasamaya?dob=Dateofbirth&tob=timeofbirth&lat={{lat}}&lon={{lon}}&tz=5.5&api_key=YOUR_API_KEY&lang=en",
      },
    ],
  },
  {
    name: "Dashas",
    content: [
      {
        key: "Mahadasha",
        link: "https://api.vedicastroapi.com/v3-json/dashas/current-mahadasha-full?dob=Dateofbirth&tob=timeofbirth&lat={{lat}}&lon={{lon}}&tz=5.5&api_key=YOUR_API_KEY&lang=en",
      },
      {
        key: "Antardasha",
        link: "https://api.vedicastroapi.com/v3-json/dashas/antar-dasha?dob=Dateofbirth&tob=timeofbirth&lat={{lat}}&lon={{lon}}&tz=5.5&api_key=YOUR_API_KEY&lang=en",
      },
      {
        key: "chardasha",
        link: "https://api.vedicastroapi.com/v3-json/dashas/char-dasha-main?dob=Dateofbirth&tob=timeofbirth&lat={{lat}}&lon={{lon}}&tz=5.5&api_key=YOUR_API_KEY&lang=en",
      },
      {
        key: "Prayantardasha",
        link: "https://api.vedicastroapi.com/v3-json/dashas/paryantar-dasha?dob=Dateofbirth&tob=timeofbirth&lat={{lat}}&lon={{lon}}&tz=5.5&api_key=YOUR_API_KEY&lang=en",
      },
      {
        key: "Yoginidasha",
        link: "https://api.vedicastroapi.com/v3-json/dashas/yogini-dasha-main?dob=Dateofbirth&tob=timeofbirth&lat={{lat}}&lon={{lon}}&tz=5.5&api_key=YOUR_API_KEY&lang=en",
      },
    ],
  },
  {
    name: "Extended Horoscope",
    content: [
      {
        key: "Yoga",
        link: "https://api.vedicastroapi.com/v3-json/extended-horoscope/yoga-list?dob=Dateofbirth&tob=timeofbirth&lat={{lat}}&lon={{lon}}&tz=5.5&api_key=YOUR_API_KEY&lang=en",
      },
      {
        key: "Shad Bala",
        link: "https://api.vedicastroapi.com/v3-json/extended-horoscope/shad-bala?dob=Dateofbirth&tob=timeofbirth&lat={{lat}}&lon={{lon}}&tz=5.5&api_key=YOUR_API_KEY&lang=en",
      },
      {
        key: "Gem Suggestion",
        link: "https://api.vedicastroapi.com/v3-json/extended-horoscope/gem-suggestion?dob=Dateofbirth&tob=timeofbirth&lat={{lat}}&lon={{lon}}&tz=5.5&api_key=YOUR_API_KEY&lang=en",
      },
      {
        key: "Rudraksh Suggestion",
        link: "https://api.vedicastroapi.com/v3-json/extended-horoscope/rudraksh-suggestion?dob=Dateofbirth&tob=timeofbirth&lat={{lat}}&lon={{lon}}&tz=5.5&api_key=YOUR_API_KEY&lang=en",
      },
      {
        key: "Varshapal Details",
        link: "https://api.vedicastroapi.com/v3-json/extended-horoscope/varshapal-details?dob=Dateofbirth&tob=timeofbirth&lat={{lat}}&lon={{lon}}&tz=5.5&api_key=YOUR_API_KEY&lang=en",
      },
    ],
  },
];

export type MonthKeys =
  | "Jan"
  | "Feb"
  | "Mar"
  | "Apr"
  | "May"
  | "Jun"
  | "Jul"
  | "Aug"
  | "Sep"
  | "Oct"
  | "Nov"
  | "Dec";

  interface MuhratDetails {
    Date: string;
    Time: string;
  }

  interface Muhrat {
    Jan?: MuhratDetails[];
    Feb?: MuhratDetails[];
    Mar?: MuhratDetails[];
    Apr?: MuhratDetails[];
    May?: MuhratDetails[];
    Jun?: MuhratDetails[];
    Jul?: MuhratDetails[];
    Aug?: MuhratDetails[];
    Sep?: MuhratDetails[];
    Oct?: MuhratDetails[];
    Nov?: MuhratDetails[];
    Dec?: MuhratDetails[];
  }

  interface ShubhMuhrat {
    Annanprashan?: Muhrat;
    GrihaPravesh?: Muhrat;
    Namkaran? : Muhrat;
    Mundan?: Muhrat;
    Vehicle?: Muhrat;
    Marriage?: Muhrat;
  }


export const shubhMuhrat: ShubhMuhrat = {
  Annanprashan: {
    Jan: [
      {
        Date: "Jan 3, 2024 Wednesday",
        Time: "Morning: 07:45 AM - 10:17 AM",
      },
      {
        Date: "Jan 12, 2024 Friday",
        Time: "Evening: 06:20 PM - Night: 10:57 PM",
      },
      {
        Date: "Jan 15, 2024 Monday",
        Time: "Morning: 07:46 AM - 09:30 AM",
      },
      {
        Date: "Jan 17, 2024 Wednesday",
        Time: "Morning: 07:46 AM - Afternoon: 12:15 PM",
      },
      {
        Date: "Jan 25, 2024 Thursday",
        Time: "	Afternoon: 01:19 PM - Evening: 07:49 PM",
      },
    ],
    Feb: [
      {
        Date: "Feb 2, 2024 Friday",
        Time: "Morning: 07:40 AM - 09:47 AM",
      },
      {
        Date: "Feb 8, 2024 Thursday",
        Time: "Morning: 07:56 AM - Afternoon: 12:24 PM",
      },
      {
        Date: "Feb 12, 2024 Monday",
        Time: "Evening: 04:18 PM - Evening: 06:38 PM",
      },
      {
        Date: "Feb 14, 2024 Wednesday",
        Time: "Morning: 07:32 AM - 10:25 AM",
      },
      {
        Date: "Feb 19, 2024 Monday",
        Time: "Morning: 07:28 AM - 08:40 AM",
      },
      {
        Date: "Feb 21, 2024 Wednesday",
        Time: "Afternoon: 01:28 PM - Evening: 06:03 PM",
      },
    ],
    Mar: [
      {
        Date: "Mar 8, 2024 Friday",
        Time: "Morning: 07:29 AM - Afternoon: 12:25 PM",
      },
      {
        Date: "Mar 11, 2024 Monday",
        Time: "Afternoon: 12:13 PM - Evening: 04:48 PM",
      },
      {
        Date: "Mar 27, 2024 Wednesday",
        Time: "Morning: 07:40 AM - Afternoon: 01:25 PM",
      },
    ],
    Apr: [
      {
        Date: "Apr 15, 2024 Monday",
        Time: "Morning: 06:26 AM - 12:10 PM",
      },
      {
        Date: "Apr 26, 2024 Friday",
        Time: "Morning: 07:17 AM - 01:47 PM",
      },
    ],
    May: [
      {
        Date: "May 3, 2024 Friday",
        Time: "Morning: 06:49 AM - 11:00 AM",
      },
      {
        Date: "May 6, 2024 Monday",
        Time: "Morning: 06:38 AM - 01:08 PM",
      },
      {
        Date: "May 9, 2024 Thursday",
        Time: "Afternoon: 12:56 PM - Evening: 05:30 PM",
      },
      {
        Date: "May 20, 2024 Monday",
        Time: "Night: 09:25 PM - 11:29 PM",
      },
      {
        Date: "May 23, 2024 Thursday",
        Time: "Afternoon: 02:19 PM - Night: 09:13 PM",
      },
      {
        Date: "May 27, 2024 Monday",
        Time: "Evening: 06:39 PM - Night: 11:01 PM",
      },
      {
        Date: "May 30, 2024",
        Time: "Morning: 06:59 AM - 09:13 AM",
      },
    ],
    Jun: [
      {
        Date: "Jun 10, 2024 Monday",
        Time: "5:44 PM - 8:02 PM",
      },
      {
        Date: "Jun 19, 2024 Wednesday",
        Time: "9:31 PM - 11:13 PM",
      },
      {
        Date: "Jun 20, 2024 Thursday",
        Time: "5:55 AM - 10:11 AM",
      },
      {
        Date: "Jun 24, 2024 Monday",
        Time: "7:35 AM - 2:29 PM",
      },
      {
        Date: "Jun 26, 2024 Wednesday",
        Time: "9:48 AM - 4:41 PM",
      },
    ],
    Jul: [
      {
        Date: "Jul 12, 2024 Friday",
        Time: "3:38 PM - 9:43 PM",
      },
      {
        Date: "Jul 15, 2024 Monday",
        Time: "9:31 PM - 10:58 PM",
      },
      {
        Date: "Jul 22, 2024 Monday",
        Time: "2:58 PM - 9:03 PM",
      },
      {
        Date: "Jul 25, 2024 Thursday",
        Time: "7:09 PM - 10:19 PM",
      },
    ],
    Aug: [
      {
        Date: "Aug 2, 2024 Friday",
        Time: "11:56 AM - 2:15 PM",
      },
      {
        Date: "Aug 7, 2024 Wednesday",
        Time: "9:28 PM - 10:36 PM",
      },
      {
        Date: "Aug 9, 2024 Friday",
        Time: "6:55 AM - 11:28 AM",
      },
      {
        Date: "Aug 12, 2024 Monday",
        Time: "6:43 AM - 9:00 AM",
      },
      {
        Date: "Aug 14, 2024 Wednesday",
        Time: "11:09 AM - 1:28 PM",
      },
      {
        Date: "Aug 19, 2024 Monday",
        Time: "3:27 PM - 7:13 PM",
      },
      {
        Date: "Aug 23, 2024 Friday",
        Time: "12:53 PM - 3:11 PM",
      },
      {
        Date: "Aug 28, 2024 Wednesday",
        Time: "6:28 AM - 12:33 PM",
      },
    ],
    Sep: [
      {
        Date: "Sep 4, 2024 Wednesday",
        Time: "12:05 PM - 6:10 PM",
      },
      {
        Date: "Sep 5, 2024 Thursday",
        Time: "7:26 AM - 9:42 AM",
      },
      {
        Date: "Sep 6, 2024 Friday",
        Time: "7:22 AM - 9:38 AM",
      },
      {
        Date: "Sep 16, 2024 Monday",
        Time: "6:42 AM - 11:18 AM",
      },
    ],
    Oct: [
      {
        Date: "Oct 4, 2024 Friday",
        Time: "6:47 AM - 10:08 AM",
      },
      {
        Date: "Oct 7, 2024 Monday",
        Time: "2:18 PM - 6:53 PM",
      },
      {
        Date: "Oct 17, 2024 Thursday",
        Time: "7:18 AM - 11:35 AM",
      },
      {
        Date: "Oct 21, 2024 Monday",
        Time: "9:01 PM - 3:05 AM",
      },
      {
        Date: "Oct 23, 2024 Wednesday",
        Time: "2:58 PM - 4:25 PM",
      },
      {
        Date: "Oct 30, 2024 Wednesday",
        Time: "8:25 AM - 2:30 PM",
      },
    ],
    Nov: [
      {
        Date: "Nov 4, 2024 Monday",
        Time: "7:07 AM - 10:24 AM",
      },
      {
        Date: "Nov 8, 2024 Friday",
        Time: "7:50 AM - 1:55 PM",
      },
      {
        Date: "Nov 11, 2024 Monday",
        Time: "9:57 AM - 12:00 PM",
      },
      {
        Date: "Nov 13, 2024 Wednesday",
        Time: "1:35 PM - 4:27 PM",
      },
      {
        Date: "Nov 14, 2024 Thursday",
        Time: "7:26 AM - 11:49 AM",
      },
      {
        Date: "Nov 20, 2024 Wednesday",
        Time: "11:25 AM - 4:00 PM",
      },
      {
        Date: "Nov 25, 2024 Monday",
        Time: "7:23 AM - 12:48 PM",
      },
      {
        Date: "Nov 28, 2024 Thursday",
        Time: "8:50 AM - 2:04 PM",
      },
      {
        Date: "Nov 29, 2024 Friday",
        Time: "8:46 AM - 10:50 AM",
      },
    ],
    Dec: [
      {
        Date: "Dec 5, 2024 Thursday",
        Time: "1:36 PM - 6:32 PM",
      },
      {
        Date: "Dec 6, 2024 Friday",
        Time: "7:32 AM - 12:05 PM",
      },
      {
        Date: "Dec 25, 2024 Wednesday",
        Time: "7:43 AM - 10:50 AM",
      },
    ],
  },
  Namkaran: {
    Jan: [
      { Date: "Wed, Jan 03", Time: "07:14:25 - 31:14:24" },
      { Date: "Thu, Jan 04", Time: "07:14:37 - 22:07:18" },
      { Date: "Sun, Jan 07", Time: "22:08:43 - 31:15:05" },
      { Date: "Mon, Jan 08", Time: "07:15:10 - 22:03:36" },
      { Date: "Thu, Jan 11", Time: "17:39:31 - 31:15:20" },
      { Date: "Fri, Jan 12", Time: "07:15:19 - 31:15:20" },
      { Date: "Wed, Jan 17", Time: "07:14:53 - 31:14:54" },
      { Date: "Thu, Jan 18", Time: "07:14:44 - 20:46:54" },
      { Date: "Sun, Jan 21", Time: "07:14:04 - 31:14:04" },
      { Date: "Mon, Jan 22", Time: "07:13:48 - 28:59:04" },
      { Date: "Thu, Jan 25", Time: "08:17:31 - 31:12:49" },
      { Date: "Wed, Jan 31", Time: "07:10:10 - 31:10:11" },
    ],

    Feb: [
      { Date: "Thu, Feb 01", Time: "07:09:40 - 31:09:40" },
      { Date: "Fri, Feb 02", Time: "07:09:06 - 29:57:18" },
      { Date: "Sun, Feb 04", Time: "17:52:10 - 31:07:57" },
      { Date: "Thu, Feb 08", Time: "07:05:20 - 11:19:37" },
      { Date: "Sun, Feb 11", Time: "07:03:11 - 17:40:20" },
      { Date: "Wed, Feb 14", Time: "07:00:50 - 31:00:51" },
      { Date: "Sun, Feb 18", Time: "08:17:53 - 30:57:28" },
      { Date: "Wed, Feb 21", Time: "14:18:35 - 30:54:45" },
      { Date: "Thu, Feb 22", Time: "06:53:49 - 13:24:29" },
      { Date: "Sun, Feb 25", Time: "25:25:26 - 30:50:55" },
      { Date: "Mon, Feb 26", Time: "06:49:56 - 30:49:56" },
      { Date: "Thu, Feb 29", Time: "06:46:55 - 30:46:55" },
    ],
    Mar: [
      { Date: "Thu, Mar 02", Time: "07:00:55 - 29:50:00" },
      { Date: "Mon, Mar 06", Time: "18:03:25 - 30:58:10" },
      { Date: "Wed, Mar 08", Time: "06:58:50 - 30:54:55" },
      { Date: "Sun, Mar 12", Time: "11:15:35 - 30:51:42" },
      { Date: "Thu, Mar 16", Time: "06:49:30 - 30:47:40" },
      { Date: "Sat, Mar 18", Time: "10:43:12 - 31:11:53" },
      { Date: "Tue, Mar 21", Time: "12:15:00 - 31:05:29" },
      { Date: "Fri, Mar 24", Time: "07:21:20 - 30:59:30" },
      { Date: "Sun, Mar 26", Time: "18:22:42 - 30:53:17" },
      { Date: "Tue, Mar 28", Time: "07:46:55 - 30:50:55" },
    ],
    Apr: [
      { Date: "Sat, Apr 01", Time: "08:01:10 - 31:10:05" },
      { Date: "Mon, Apr 03", Time: "16:35:30 - 30:55:20" },
      { Date: "Wed, Apr 05", Time: "07:52:10 - 30:58:50" },
      { Date: "Fri, Apr 07", Time: "17:24:15 - 31:03:10" },
      { Date: "Thu, Apr 13", Time: "07:18:19 - 30:49:42" },
      { Date: "Mon, Apr 17", Time: "09:10:55 - 30:46:11" },
      { Date: "Fri, Apr 21", Time: "12:22:25 - 30:58:20" },
      { Date: "Sun, Apr 23", Time: "18:33:45 - 31:01:15" },
      { Date: "Tue, Apr 25", Time: "08:42:30 - 30:51:20" },
      { Date: "Thu, Apr 27", Time: "07:50:50 - 30:49:55" },
    ],
    May: [
      { Date: "Tue, May 02", Time: "06:30:45 - 30:45:50" },
      { Date: "Fri, May 05", Time: "07:50:30 - 30:55:35" },
      { Date: "Mon, May 08", Time: "11:15:20 - 31:00:15" },
      { Date: "Thu, May 11", Time: "17:30:55 - 30:55:20" },
      { Date: "Sun, May 14", Time: "14:20:00 - 31:10:50" },
      { Date: "Wed, May 17", Time: "07:20:45 - 30:45:50" },
      { Date: "Sat, May 20", Time: "08:15:15 - 30:50:45" },
      { Date: "Tue, May 23", Time: "16:25:10 - 31:05:20" },
      { Date: "Thu, May 25", Time: "06:40:30 - 30:50:35" },
      { Date: "Sun, May 28", Time: "09:50:25 - 30:55:15" },
    ],
    Jun: [
      { Date: "Fri, Jun 02", Time: "06:20:15 - 30:45:30" },
      { Date: "Mon, Jun 05", Time: "08:10:25 - 30:55:10" },
      { Date: "Thu, Jun 08", Time: "12:35:50 - 31:00:45" },
      { Date: "Sun, Jun 11", Time: "16:50:20 - 30:50:55" },
      { Date: "Wed, Jun 14", Time: "07:05:35 - 30:45:30" },
      { Date: "Sat, Jun 17", Time: "09:25:50 - 30:55:15" },
      { Date: "Tue, Jun 20", Time: "14:15:30 - 31:10:25" },
      { Date: "Fri, Jun 23", Time: "18:40:10 - 31:00:45" },
      { Date: "Mon, Jun 26", Time: "06:55:55 - 30:50:20" },
      { Date: "Thu, Jun 29", Time: "11:10:35 - 30:55:05" },
    ],
    Jul: [
      { Date: "Tue, Jul 04", Time: "08:25:15 - 30:45:50" },
      { Date: "Fri, Jul 07", Time: "10:15:35 - 31:00:25" },
      { Date: "Mon, Jul 10", Time: "14:30:45 - 30:55:15" },
      { Date: "Thu, Jul 13", Time: "16:20:50 - 30:50:10" },
      { Date: "Sun, Jul 16", Time: "06:35:30 - 30:45:35" },
      { Date: "Wed, Jul 19", Time: "12:25:15 - 31:10:30" },
      { Date: "Sat, Jul 22", Time: "08:45:10 - 30:50:25" },
      { Date: "Tue, Jul 25", Time: "10:55:35 - 30:55:05" },
      { Date: "Fri, Jul 28", Time: "15:40:55 - 31:05:15" },
      { Date: "Mon, Jul 31", Time: "07:15:25 - 30:45:50" },
    ],
    Aug: [
      { Date: "Wed, Aug 02", Time: "09:05:50 - 31:00:30" },
      { Date: "Sat, Aug 05", Time: "11:35:10 - 30:55:20" },
      { Date: "Tue, Aug 08", Time: "13:20:55 - 31:10:25" },
      { Date: "Fri, Aug 11", Time: "07:45:35 - 30:50:10" },
      { Date: "Mon, Aug 14", Time: "08:55:15 - 30:45:50" },
      { Date: "Thu, Aug 17", Time: "10:25:10 - 31:05:35" },
      { Date: "Sun, Aug 20", Time: "12:50:45 - 30:55:15" },
      { Date: "Wed, Aug 23", Time: "06:30:50 - 30:45:10" },
      { Date: "Sat, Aug 26", Time: "16:25:25 - 31:10:15" },
      { Date: "Tue, Aug 29", Time: "18:45:30 - 30:50:25" },
    ],
    Sep: [
      { Date: "Fri, Sep 01", Time: "06:40:55 - 30:45:30" },
      { Date: "Mon, Sep 04", Time: "09:20:15 - 31:00:35" },
      { Date: "Thu, Sep 07", Time: "10:50:10 - 30:55:05" },
      { Date: "Sun, Sep 10", Time: "12:45:35 - 31:10:20" },
      { Date: "Wed, Sep 13", Time: "06:55:30 - 30:45:50" },
      { Date: "Sat, Sep 16", Time: "08:10:25 - 30:50:35" },
      { Date: "Tue, Sep 19", Time: "11:35:50 - 31:05:20" },
      { Date: "Fri, Sep 22", Time: "16:50:15 - 30:55:10" },
      { Date: "Mon, Sep 25", Time: "07:25:35 - 30:45:55" },
      { Date: "Thu, Sep 28", Time: "13:30:45 - 31:00:50" },
    ],
    Oct: [
      { Date: "Sun, Oct 01", Time: "06:50:25 - 30:45:10" },
      { Date: "Wed, Oct 04", Time: "08:30:50 - 31:10:35" },
      { Date: "Sat, Oct 07", Time: "11:15:10 - 30:55:20" },
      { Date: "Tue, Oct 10", Time: "13:40:45 - 31:05:50" },
      { Date: "Fri, Oct 13", Time: "06:20:55 - 30:45:25" },
      { Date: "Mon, Oct 16", Time: "08:50:35 - 31:00:30" },
      { Date: "Thu, Oct 19", Time: "10:45:15 - 30:55:05" },
      { Date: "Sun, Oct 22", Time: "16:15:50 - 31:10:15" },
      { Date: "Wed, Oct 25", Time: "07:55:10 - 30:45:55" },
      { Date: "Sat, Oct 28", Time: "12:35:25 - 31:05:50" },
    ],
    Nov: [
      { Date: "Wed, Nov 01", Time: "09:10:35 - 30:50:15" },
      { Date: "Sat, Nov 04", Time: "11:55:10 - 31:10:25" },
      { Date: "Tue, Nov 07", Time: "14:30:25 - 30:55:35" },
      { Date: "Fri, Nov 10", Time: "06:40:45 - 30:45:20" },
      { Date: "Mon, Nov 13", Time: "08:25:10 - 31:05:50" },
      { Date: "Thu, Nov 16", Time: "10:35:50 - 30:55:45" },
      { Date: "Sun, Nov 19", Time: "12:50:35 - 31:00:15" },
      { Date: "Wed, Nov 22", Time: "06:30:25 - 30:45:30" },
      { Date: "Sat, Nov 25", Time: "13:20:10 - 31:05:20" },
      { Date: "Tue, Nov 28", Time: "17:15:45 - 30:50:25" },
    ],
    Dec: [
      { Date: "Fri, Dec 01", Time: "07:05:35 - 30:45:10" },
      { Date: "Mon, Dec 04", Time: "09:50:10 - 31:00:20" },
      { Date: "Wed, Dec 06", Time: "11:15:25 - 30:55:45" },
      { Date: "Sat, Dec 09", Time: "07:45:10 - 30:50:20" },
      { Date: "Tue, Dec 12", Time: "12:05:30 - 31:05:25" },
      { Date: "Fri, Dec 15", Time: "08:35:50 - 30:45:35" },
      { Date: "Mon, Dec 18", Time: "10:25:10 - 30:55:20" },
      { Date: "Thu, Dec 21", Time: "14:15:35 - 31:10:45" },
      { Date: "Sun, Dec 24", Time: "06:50:45 - 30:45:50" },
      { Date: "Wed, Dec 27", Time: "16:05:30 - 30:50:15" },
    ],
  },
  Mundan: {
    Feb: [
      { Date: "Wed, Feb 14", Time: "10:43 AM - 12:10 PM" },
      { Date: "Mon, Feb 19", Time: "06:33 AM - 10:33 AM" },
      { Date: "Wed, Feb 21", Time: "11:28 AM - 01:22 PM" },
      { Date: "Tue, Feb 27", Time: "04:30 AM - 06:29 AM" },
      { Date: "Thu, Feb 29", Time: "04:19 AM - 06:22 AM" },
    ],

    Mar: [
      { Date: "Fri, Mar 08", Time: "01:20 AM - 09:58 PM" },
      { Date: "Mon, Mar 18", Time: "10:49 PM - 06:17 AM" },
      { Date: "Wed, Mar 20", Time: "06:16 AM - 01:19 PM" },
      { Date: "Wed, Mar 27", Time: "06:11 AM - 06:05 AM" },
    ],

    Apr: [
      { Date: "Wed, Apr 03", Time: "09:47 PM - 05:26 AM" },
      { Date: "Thu, Apr 04", Time: "04:14 PM - 01:29 PM" },
      { Date: "Mon, Apr 15", Time: "05:59 AM - 12:12 PM" },
    ],

    May: [
      { Date: "Fri, May 03", Time: "01:53 AM - 12:41 PM" },
      { Date: "Fri, May 03", Time: "11:24 PM - 12:06 AM" },
      { Date: "Fri, May 10", Time: "10:47 AM - 02:50 AM" },
      { Date: "Tue, May 14", Time: "02:50 AM - 05:47 AM" },
      { Date: "Mon, May 20", Time: "03:59 PM - 05:45 AM" },
      { Date: "Fri, May 24", Time: "07:25 PM - 05:45 AM" },
      { Date: "Thu, May 30", Time: "12:43 AM - 11:44 AM" },
    ],

    Jun: [
      { Date: "Fri, Jun 07", Time: "04:45 PM - 07:43 PM" },
      { Date: "Mon, Jun 10", Time: "04:15 PM - 09:39 PM" },
      { Date: "Mon, Jun 17", Time: "05:46 AM - 05:39 PM" },
      { Date: "Wed, Jun 26", Time: "05:48 AM - 08:55 PM" },
    ],

    Jul: [
      { Date: "Thu, Jul 04", Time: "04:07 AM - 05:54 AM" },
      { Date: "Mon, Jul 08", Time: "05:51 AM - 06:02 AM" },
      { Date: "Fri, Jul 12", Time: "04:08 PM - 05:53 AM" },
      { Date: "Mon, Jul 15", Time: "07:19 PM - 12:29 AM" },
    ],
  },
  Vehicle: {
    Jan: [
      { Date: "Wed, Jan 03", Time: "21:18 - 09:53, Jan 07" },
      { Date: "Thu, Jan 04", Time: "09:53 - 23:34" },
      { Date: "Sun, Jan 07", Time: "23:38 - 02:16, Jan 08" },
      { Date: "Wed, Jan 17", Time: "23:36 - 05:03, Jan 18" },
      { Date: "Sun, Jan 21", Time: "09:38 - 20:56" },
      { Date: "Mon, Jan 22", Time: "21:21 - 06:38, Jan 23" },
      { Date: "Wed, Jan 24", Time: "23:19 - 09:32, Jan 25" },
      { Date: "Thu, Jan 25", Time: "09:32 - 09:31, Jan 26" },
      { Date: "Fri, Jan 26", Time: "07:12 - 10:28" },
      { Date: "Wed, Jan 31", Time: "07:10 - 07:10, Feb 01 (overnight)" },
    ],

    Feb: [
      { Date: "Thu, Feb 01", Time: "07:10 - 02:03, Feb 02" },
      { Date: "Fri, Feb 02", Time: "04:02 - 05:57, Feb 03" },
      { Date: "Sun, Feb 04", Time: "05:49 - 07:07, Feb 05" },
      { Date: "Mon, Feb 05", Time: "07:07 - 07:54" },
      { Date: "Wed, Feb 14", Time: "07:01 - 10:43" },
    ],

    Mar: [
      { Date: "Fri, Mar 01", Time: "06:46 - 12:48" },
      { Date: "Fri, Mar 15", Time: "04:08 - 10:09" },
      { Date: "Fri, Mar 29", Time: "08:36 - 06:13, Mar 30 (overnight)" },
    ],

    Apr: [
      { Date: "Fri, Apr 12", Time: "01:11 - 05:58, Apr 13" },
      { Date: "Fri, Apr 26", Time: "07:45 - 03:40, Apr 27" },
    ],

    May: [
      { Date: "Thu, May 23", Time: "09:15 - 05:26, May 24" },
      { Date: "Fri, May 31", Time: "05:24 - 06:14" },
    ],

    Jun: [
      { Date: "Sun, Jun 09", Time: "05:23 - 03:44" },
      { Date: "Wed, Jun 19", Time: "05:23 - 05:24, Jun 20" },
      { Date: "Thu, Jun 27", Time: "05:26 - 11:36" },
    ],

    Jul: [
      { Date: "Wed, Jul 03", Time: "07:10 - 05:28, Jul 04" },
      { Date: "Fri, Jul 26", Time: "02:30 - 11:30" },
    ],

    Aug: [
      { Date: "Fri, Aug 09", Time: "05:47 - 05:48, Aug 10" },
      { Date: "Thu, Aug 29", Time: "04:39 - 01:37, Aug 30" },
    ],

    Sep: [{ Date: "Fri, Sep 06", Time: "06:02 - 03:01" }],

    Oct: [{ Date: "Thu, Oct 24", Time: "06:28 - 01:58, Oct 25" }],

    Nov: [{ Date: "Wed, Nov 20", Time: "06:48 - 06:49, Nov 21" }],

    Dec: [
      { Date: "Wed, Dec 18", Time: "07:08 - 10:06" },
      { Date: "Wed, Dec 25", Time: "07:12 - 07:12, Dec 26" },
    ],
  },
  Marriage: {
    Jan: [
      {
        Date: "16 Jan 2024, Tuesday",
        Time: "20:01 - 17 Jan 07:15",
      },
      {
        Date: "17 Jan 2023, Wednesday",
        Time: "07:15 - 21:50",
      },
      {
        Date: "20 Jan 2024, Saturday",
        Time: "03:09 - 21 Jan 07:14",
      },
      {
        Date: "21 Jan 2024, Sunday",
        Time: "07:14 - 07:23",
      },
      {
        Date: "22 Jan 2024, Monday",
        Time: "07:14 - 23 Jan 04:58",
      },
      {
        Date: "27 Jan 2024, Saturday",
        Time: "19:44 - 28 Jan 07:12",
      },
      {
        Date: "28 Jan 2024, Sunday",
        Time: "07:12 - 15:53",
      },
      {
        Date: "30 Jan 2024, Tuesday",
        Time: "10:43 - 31 Jan 07:10",
      },
      {
        Date: "31 Jan 2024, Wednesday",
        Time: "07:10 - 1 Feb 01:08",
      },
    ],

    Feb: [
      {
        Date: "4 Feb 2024, Sunday",
        Time: "07:21 - 05 Feb 05:44",
      },
      {
        Date: "6 Feb 2024, Tuesday",
        Time: "13:18 - 07 Feb 06:27",
      },
      {
        Date: "7 Feb 2024, Wednesday",
        Time: "04:37 - 08 Feb 07:05",
      },
      {
        Date: "8 Feb 2024, Thursday",
        Time: "07:05 - 11:17 Uttarashada",
      },
      {
        Date: "12 Feb 2024, Monday",
        Time: "14:56 - 13 Feb 07:02",
      },
      {
        Date: "13 Feb 2024, Tuesday",
        Time: "14:41 - 14 Feb 05:11",
      },
      {
        Date: "17 Feb 2024, Saturday",
        Time: "08:46 - 13:44",
      },
      {
        Date: "24 Feb 2024, Saturday",
        Time: "13:35 - 22:20",
      },
      {
        Date: "25 Feb 2024, Sunday",
        Time: "01:24 - 26 Feb 06:50",
      },
      {
        Date: "26 Feb 2024, Monday",
        Time: "06:50 - 15:27",
      },
      {
        Date: "29 Feb 2024, Thursday",
        Time: "10:22 - 01 Mar 06:46",
      },
    ],

    Mar: [
      { Date: "1 Mar 2024, Friday", Time: "06:46 - 12:48" },
      {
        Date: "2 Mar 2024, Saturday",
        Time: "20:24 - 03 Mar 06:44",
      },
      { Date: "Mar 3, 2024, Sunday", Time: "06:44 - 15:55" },
      {
        Date: "4 Mar 2024, Monday",
        Time: "22:16 - 05 Mar 06:42",
      },
      { Date: "5 Mar 2024, Tuesday", Time: "06:42 - 14:09" },
      {
        Date: "6 Mar 2024, Wednesday",
        Time: "14:52 - 07 Mar 06:40",
      },
      {
        Date: "7 Mar 2024, Thursday",
        Time: "06:40 - 08:24",
      },
      {
        Date: "10 Mar 2024, Sunday",
        Time: "01:55 - 11 Mar 06:35",
      },
      {
        Date: "11 Mar 2024, Monday",
        Time: "06:35 - 12 Mar 06:34",
      },
      {
        Date: "12 Mar 2024, Tuesday",
        Time: "06:34 - 15:08",
      },
    ],

    Apr: [
      {
        Date: "18 Apr 2024, Thursday",
        Time: "00:44 - 19 Apr 05:51",
      },
      { Date: "19 Apr 2024, Friday", Time: "05:51 - 06:46" },
      {
        Date: "20 Apr 2024, Saturday",
        Time: "14:04 - 21 Apr 02:48",
      },
      {
        Date: "21 Apr 2024 Sunday",
        Time: "03:45 - 22 Apr 05:48",
      },
      { Date: "22 Apr 2024, Monday", Time: "05:48 - 20:00" },
    ],

    Jul: [
      { Date: "9 Jul 2024, Tuesday", Time: "14:28 - 18:56" },
      {
        Date: "11 Jul 2024, Thursday",
        Time: "13:04 - 12 Jul 04:09",
      },
      {
        Date: "12 Jul 2024, Friday",
        Time: "05:15 - 13 Jul 05:32",
      },
      {
        Date: "13 Jul 2024, Saturday",
        Time: "05:32 - 15:05",
      },
      {
        Date: "14 Jul 2024, Sunday",
        Time: "22:06 - 15 Jul 05:33",
      },
      {
        Date: "15 Jul 2024, Monday",
        Time: "05:33 - 16 Jul 00:30",
      },
    ],

    Nov: [
      {
        Date: "12 Nov 2024, Tuesday",
        Time: "16:04 - 19:10",
      },
      {
        Date: "13 Nov 2024 Wednesday",
        Time: "15:26 - 21:48",
      },
      {
        Date: "16 Nov 2024 Saturday",
        Time: "23:48 - 17 Nov 06:45",
      },
      {
        Date: "17 Nov 2024, Sunday",
        Time: "06:45 - 18 Nov 06:46",
      },
      {
        Date: "18 Nov 2024, Monday",
        Time: "06:46 - 07:56",
      },
      {
        Date: "22 Nov 2024, Friday",
        Time: "23:44 - 23 Nov 06:50",
      },
      {
        Date: "23 Nov 2024, Saturday",
        Time: "06:50 - 11:42",
      },
      {
        Date: "25 Nov 2024, Monday",
        Time: "01:01 - 26 Nov 06:53",
      },
      {
        Date: "26 Nov 2024, Tuesday",
        Time: "06:53 - 27 Nov 04:35",
      },
      {
        Date: "28 Nov 2024, Thursday",
        Time: "07:36 - 29 Nov 06:55",
      },
      {
        Date: "29 Nov 2024, Friday",
        Time: "06:55 - 08:39",
      },
    ],

    Dec: [
      {
        Date: "4 Dec 2024, Wednesday",
        Time: "17:15 - 05 Dec 01:02",
      },
      {
        Date: "5 Dec 2024, Thursday",
        Time: "12:49 - 17:26",
      },
      {
        Date: "9 Dec 2024, Monday",
        Time: "14:56 - 10 Dec 01:06",
      },
      {
        Date: "10 Dec 2024, Tuesday",
        Time: "22:03 - 11 Dec 06:13",
      },
      {
        Date: "14 Dec 2024, Saturday",
        Time: "07:06 - 16:58",
      },
      {
        Date: "15 Dec 2024, Sunday",
        Time: "03:42 - 07:06",
      },
    ],
  },
  GrihaPravesh: {
    Jan: [{ Date: "Jan 3, 2024", Time: "7:14 AM - 2:46 PM" }],

    Feb: [
      { Date: "Feb 12, 2024", Time: "2:56 PM - 5:44 PM" },
      { Date: "Feb 14, 2024", Time: "7:01 AM - 10:43 AM" },
      { Date: "Feb 19, 2024", Time: "6:57 AM - 10:33 AM" },
      { Date: "Feb 26, 2024", Time: "6:50 AM - 4:30 AM" },
      { Date: "Feb 28, 2024", Time: "4:18 AM - 6:47 AM" },
      { Date: "Feb 29, 2024", Time: "6:47 AM - 10:22 AM" },
    ],

    Mar: [
      { Date: "Mar 2, 2024", Time: "2:42 PM - 6:44 AM" },
      { Date: "Mar 6, 2024", Time: "2:52 PM - 4:13 AM" },
      { Date: "Mar 11, 2024", Time: "10:44 AM - 6:34 AM" },
      { Date: "Mar 15, 2024", Time: "10:09 PM - 6:39 AM" },
      { Date: "Mar 16, 2024", Time: "6: 29 AM - 9:38 PM" },
      { Date: "Mar 27, 2024", Time: "6: 17 AM - 4:16 PM" },
      { Date: "Mar 29, 2024", Time: "8:36 PM - 6:13 AM" },
      { Date: "Mar 30, 2024", Time: "6:13 AM - 9:13 AM" },
    ],

    Apr: [{ Date: "Apr 3, 2024", Time: "6:29 PM - 9:47 PM" }],

    Nov: [
      { Date: "Nov 2, 2024", Time: "5: 58 AM - 6:35 AM" },
      { Date: "Nov 4, 2024", Time: "6:35 AM - 8:04 AM" },
      { Date: "Nov 7, 2024", Time: "12:34 AM - 6:38 AM" },
      { Date: "Nov 8, 2024", Time: "6:38 AM - 12:03 PM" },
      { Date: "Nov 13, 2024", Time: "1:01 PM - 3:11 AM" },
      { Date: "Nov 16, 2024", Time: "7:28 PM - 6:45 AM" },
      { Date: "Nov 18, 2024", Time: "6:46 AM - 3:49 PM" },
      { Date: "Nov 25, 2024", Time: "6:52 AM - 1:24 AM" },
    ],

    Dec: [
      { Date: "Dec 5, 2024", Time: "12: 40 PM - 5:26 PM" },
      { Date: "Dec 11, 2024", Time: "7:04 AM - 11:48 AM" },
      { Date: "Dec 21, 2024", Time: "6:14 AM - 7:10 AM" },
      { Date: "Dec 25, 2024", Time: "7:12 AM - 3:22 PM" },
    ],
  },
};
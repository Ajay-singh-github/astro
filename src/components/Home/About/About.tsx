import moon from "../../../assets/moon.svg";
import about from "../../../assets/about.svg";
import choose1 from "../../../assets/choose1.svg";
import choose2 from "../../../assets/choose2.svg";
import choose3 from "../../../assets/choose3.svg";
import choose4 from "../../../assets/choose4.svg";
import calendar from "../../../assets/calendar.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [selIt] = useState("1");
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      value: "Todays Panchang",
      navigate: "/panchang"
    },
    {
      key: "2",
      value: "Panchang 2024",
      navigate: "/panchang?year=2024"
    },
    {
      key: "3",
      value: "Panchang 2025",
      navigate: "/panchang?year=2025"
    },
    {
      key: "4",
      value: "Chogadiya Timings",
      navigate: "/panchang?chogadiya=true"
    },
  ];
  return (
    <div className="text-primary-300">
      <div className="font-bold w-max">
        <div className="text-xl md:text-xl flex gap-2">
          <span>Unlock the Mysteries</span>
          <span className="hidden md:block">
            of Your Life Through Astrology
          </span>
        </div>
        <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
          <div className="absolute -top-4 bg-primary-100">
            <img src={moon} className="text-xs" />
          </div>
        </div>
      </div>

      <div className="text-sm md:text-xl flex flex-col lg:flex-row items-center justify-between my-3 md:my-6">
        <div className="flex flex-col gap-4">
          <div>
            Discover what the stars have in store for you with our comprehensive
            astrology services. Whether you're seeking daily guidance, exploring
            your future with personalized horoscopes, or diving deep into your
            birth chart, we are here to help you align with the cosmic forces.
            Gain insights into your love life, career, health, and more, and
            embark on a journey of self-discovery and spiritual growth.
          </div>
        </div>
        <div className="p-2 md:p-4 w-full flex items-center justify-center">
          <img src={about} className="w-[50%]" />
        </div>
      </div>

      <div>
        <div className="text-sm md:text-xl my-4 md:my-[vw] flex flex-col gap-4 md:gap-8">
          <div className="my-6 md:my-[vw] w-full">
            <div className="font-bold w-max">
              <div className="text-xl md:text-3xl ">OUR SERVICES</div>
              <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
                <div className="absolute -top-4 bg-primary-100">
                  <img src={moon} className="text-xs" />
                </div>
              </div>
            </div>
          </div>

          <ol className="flex flex-col gap-8 text-sm md:text-xl mx-4 mb-6 md:mb-[10vw] list-decimal">
            <li className="">
              <span className="font-bold">
                Daily, Weekly, Monthly, and Yearly Horoscopes
              </span>{" "}
              Get personalized horoscopes for all zodiac signs. Whether you want
              insights into today's events, or a forecast for the coming week,
              month, or year, our accurate and detailed readings can help you
              navigate life's ups and downs.
            </li>
            <li className="">
              <span className="font-bold">
                Janam Kundali (Birth Chart Analysis)
              </span>{" "}
              Unlock the secrets of your birth chart with our detailed Janam
              Kundali service. Understand the planetary influences at the time
              of your birth and how they shape your personality, relationships,
              and destiny.
            </li>
            <li className="">
              <span className="font-bold">Kundli Matching</span> Ensure a
              harmonious relationship with Kundli matching services. Compare the
              birth charts of you and your partner to assess compatibility and
              ensure a prosperous and loving union.
            </li>
            <li className="">
              <span className="font-bold">Tarot Card Readings</span> Gain
              clarity and guidance with our Tarot card readings. Whether you're
              seeking advice on your love life, career, or personal challenges,
              our tarot experts provide insight into the past, present, and
              future.
            </li>
            <li className="">
              <span className="font-bold">Numerology Calculator</span> Find out
              how numbers influence your life with our numerology calculator.
              Your birth date and name hold secrets that can reveal your life’s
              purpose, strengths, and challenges.
            </li>
            <li className="">
              <span className="font-bold">Panchang & Shubhmuhurat</span> Plan
              your important events with our detailed Panchang and Shubhmuhurat
              services. Choose the most auspicious dates for weddings,
              ceremonies, and other life events to ensure success and harmony.
            </li>
            <li className="">
              <span className="font-bold">Astrological Remedies</span> Facing
              challenges in life? Our expert-recommended remedies, including
              gemstones, mantras, and rituals, can help alleviate negative
              influences and bring balance, prosperity, and well-being.
            </li>
            <li className="">
              <span className="font-bold">Vastu Consultation</span> Harmonize
              your living and working spaces with the principles of Vastu
              Shastra. Let our experts help you design your home or office for
              greater peace, success, and positivity
            </li>
            <li className="">
              <span className="font-bold">Yog, Dosh, and Dasha Analysis</span> s
              Discover if planetary alignments or specific doshas (afflictions)
              are affecting your life. We provide in-depth analysis of yogs
              (auspicious combinations) and doshas, along with remedies to
              mitigate their effects.
            </li>
          </ol>
        </div>

        <div className="flex items-center justify-center gap-4 md:gap-8 text-sm md:text-xl px-2 flex-wrap">
          {items.map((item) => (
            <div
              className={`p-1 px-4 md:p-2 md:px-8 ${
                selIt === item.key
                  ? "bg-secondary-100 text-primary-200"
                  : "bg-secondary-200"
              } rounded-full cursor-pointer`}
              onClick={() => navigate(item.navigate)}
            >
              {item.value}
            </div>
          ))}
        </div>

        <div className="my-4 md:my-[6vw] text-sm md:text-xl">
          <div className="mb-3 md:mb-8 w-full text-center">
            Calendar 2024 is shown with important dates displayed in{" "}
            <span className="text-red-600 font-semibold">red.</span> Click on a
            date to get panchangam for that day.
          </div>
          <div className="w-full flex items-center justify-center p-2">
            <img src={calendar} className="md:w-[50%]" />
          </div>
        </div>

        <div className="bg-secondary-700 md:p-[5vw] pd-4  rounded-3xl">
          <div className="w-full text-center font-bold text-xl md:text-3xl mb-2 md:mb-6">
            Explore Your Cosmic Journey
          </div>
          <div className="w-full text-center md:text-xl">
            Astrology is not just about predicting the future; it's a tool for
            self-reflection and understanding. It offers insights into the
            forces that shape your destiny, helping you make informed decisions
            and take control of your life's journey.
          </div>
          <div className="w-full my-4 md:mt-[7vw] flex flex-col items-center justify-center">
            <div className="font-bold">
              <div className="text-xl md:text-3xl ">WHY CHOOSE US?</div>
              <div className="w-full relative my-3 border-b border-primary-300 flex justify-center">
                <div className="absolute -top-4 bg-secondary-700">
                  <img src={moon} className="text-xs" />
                </div>
              </div>
            </div>
            <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <img src={choose1} />
              <img src={choose2} />
              <img src={choose3} />
              <img src={choose4} />
            </div>
          </div>
        </div>

        <div className="text-sm md:text-xl my-4 md:my-[4vw] flex flex-col gap-4 md:gap-8">
          <div className="my-6 md:my-[vw] w-full">
            <div className="font-bold w-max">
              <div className="text-xl md:text-3xl flex gap-2">
                FREQUENTLY ASKED QUESTIONS{" "}
                <span className="hidden md:inline">(FAQS)</span>
              </div>
              <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
                <div className="absolute -top-4 bg-primary-100">
                  <img src={moon} className="text-xs" />
                </div>
              </div>
            </div>
          </div>

          <ul className="flex flex-col gap-8 text-sm md:text-xl mb-6 md:mb-[4vw]">
            <li>
              <div className="font-bold">
                Q: What is a Birth Chart (Janam Kundali)?
              </div>
              <div>
                A birth chart, or Janam Kundali, is a map of the sky at the
                exact time and location of your birth. It reveals the positions
                of the planets and stars, which influence various aspects of
                your life, including personality, relationships, and career.
              </div>
            </li>
            <li>
              <div className="font-bold">Q: How accurate are horoscopes?</div>
              <div>
                Horoscopes are based on the alignment of celestial bodies and
                their influence on each zodiac sign. While they provide valuable
                insights, individual experiences may vary. For a more
                personalized reading, we recommend a detailed birth chart
                analysis.
              </div>
            </li>
            <li>
              <div className="font-bold">
                Q: What is the benefit of Kundli matching?
              </div>
              <div>
                Kundli matching assesses compatibility between two individuals
                based on their birth charts. This helps in predicting the
                success of the relationship, ensuring harmony and reducing
                potential conflicts.
              </div>
            </li>
          </ul>
        </div>

        <div className="w-full p-2 md:px-[10vw] mb-4 md:mb-[10vw]">
          <div className="flex flex-col gap-4 md:gap-6 bg-gradient-to-b from-primary-400 to-primary-500 rounded-xl p-4 md:p-8">
            <div className="font-bold text-xl md:text-3xl">
              Start Your Journey Today
            </div>
            <div className="text-primary-300/60 md:text-xl font-semibold">
              Explore the world of astrology and unlock your potential. Whether
              you're seeking guidance, clarity, or spiritual growth, our expert
              astrologers are here to help you navigate life's challenges. Sign
              up for your personalized reading and take the first step toward a
              brighter future.
            </div>
            <div className="md:text-xl text-primary-300 font-semibold">
              For any queries or personalized consultations, feel free to reach
              out to our expert astrologers. We're here to guide you every step
              of the way.
            </div>
            <div className="rounded-lg bg-secondary-100 text-primary-200 p-2 px-4 md:p-4 md:px-8 md:text-xl w-max">
              Consult now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

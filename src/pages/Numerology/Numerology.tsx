import { useState } from "react";
import moon from "../../assets/moon.svg";
import Articles from "../../components/common/Articles/Articles";
import axios from "axios";

const Numerology = () => {

  const [date,setDate]=useState<Date|null>()
  const [data,setData]=useState("")
  const [load, setLoad] = useState("");
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const handleSubmit =async()=>{
    setLoad("Loading...")
    console.log(date, firstName, lastName)
    await axios
      .get(
        `https://api.vedicastroapi.com/v3-json/prediction/numerology?name=${firstName}${lastName}&date=${date?.getDate()}/${
          date!?.getMonth() + 1
        }/${date?.getFullYear()}&api_key=${process.env.VITE_API_KEY}&lang=en`
      )
      .then((res) => {
        setData(res.data.response);
        console.log(data);
        setLoad("");
      });
  }
  return (
    <div className="px-2 md:px-8 py-8 md:py-20 flex flex-col items-center justify-center bg-primary-100">
      <div className="font-bold mb-4 md:mb-10">
        <div className="text-xl md:text-5xl mb-6">Numerology Calculator</div>
        <div className="w-full relative my-3 border-b border-primary-300 flex justify-center">
          <div className="absolute -top-4 bg-primary-100">
            <img src={moon} className="text-xs" />
          </div>
        </div>
      </div>

      <div className="px-2 md:px-8 my-6 md:my-[6vw]">
        <div className="font-bold w-max">
          <div className="text-xl md:text-3xl ">UNDERSTANDING NUMEROLOGY</div>
          <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
            <div className="absolute -top-4 bg-primary-100">
              <img src={moon} className="text-xs" />
            </div>
          </div>
        </div>
        <div className="text-sm md:text-xl flex flex-col gap-4 items-center justify-between my-3 md:my-6">
          <div>
            Numerology is a fascinating practice that explores the hidden
            meanings and vibrations associated with numbers. It posits that each
            number, from your birth date to the letters in your name, carries
            unique energies that can influence your personality, destiny, and
            life's path. By understanding the numerical vibrations that surround
            you, you can gain valuable insights into your strengths, weaknesses,
            and the opportunities that await you.
          </div>
          <div>
            Numerology offers a framework for understanding the underlying
            patterns and influences that shape your life. Through the study of
            numbers, you can identify your natural talents, potential
            challenges, and the karmic lessons you are here to learn. This
            ancient practice provides a valuable tool for self-discovery and
            personal growth.
          </div>
        </div>
      </div>
      <div className="">
        <div className="my-6 md:my-[2vw] w-full px-4 md:px-8">
          <div className="font-bold w-max">
            <div className="text-xl md:text-3xl ">
              CALCULATE YOUR NUMEROLOGY
            </div>
            <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
              <div className="absolute -top-4 bg-primary-100">
                <img src={moon} className="text-xs" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6 md:my-[4vw] w-full px-4 md:px-[25vw]">
        <div className="rounded-lg bg-secondary-600 p-2 px-4 md:p-4 md:px-6 flex flex-col gap-4 md:gap-6">
          <div className="flex flex-col gap-2 md:gap-4 w-full">
            <label className="md:text-xl">
              Date of Birth for Life Path Number
            </label>
            <input
              type="date"
              className="w-full rounded-md p-2 px-4 focus:outline-none focus:ring-0"
              onChange={(e) => setDate(e.target.valueAsDate)}
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-4 w-full">
            <label className="md:text-xl">
              To Calcultate Personality, Destiny and Soul Number
            </label>
            <div className="flex gap-2 w-full">
              <input
                type="text"
                className="w-[50%] rounded-md p-2 px-4 focus:outline-none focus:ring-0"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                className="w-[50%] rounded-md p-2 px-4 focus:outline-none focus:ring-0"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <div
              className="p-2 px-6 cursor-pointer rounded-md bg-secondary-100 text-primary-200"
              onClick={handleSubmit}
            >
              Submit
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-10">
          <div className="w-full text-center text-xl md:text-3xl">{load}</div>
          {data && (
            <div className="rounded-lg bg-primary-200 p-2 md:p-6">
              <div className="flex flex-col gap-2 md:gap-4">
                {/* Iterate through the keys in the data object to display the content */}
                {Object.keys(data).map((key: any) => {
                  const item: any = data[key];
                  console.log(item);
                  return (
                    <div className="category-section">
                      <h2 className="text-xl md:text-3xl font-bold">
                        {item.title}
                      </h2>
                      <h3>Category: {item.category}</h3>
                      <p>
                        <strong>Number:</strong> {item.number}{" "}
                        {item.master ? "(Master Number)" : ""}
                      </p>
                      <p>
                        <strong>Meaning:</strong> {item.meaning}
                      </p>
                      <p>
                        <strong>Description:</strong> {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="px-2 md:px-8 my-6 md:my-[6vw]">
        <div className="font-bold w-max">
          <div className="text-xl md:text-3xl flex gap-2">
            HOW{" "}
            <span className="hidden md:block">THE NUMEROLOGY CALCULATOR</span>
            <span className="md:hidden">IT</span> WORKS
          </div>
          <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
            <div className="absolute -top-4 bg-primary-100">
              <img src={moon} className="text-xs" />
            </div>
          </div>
        </div>
        <div className="text-sm md:text-xl flex flex-col gap-4 items-center justify-between my-3 md:my-6">
          <div>
            Our Numerology Calculator is a powerful tool that allows you to
            delve into the depths of your numerical vibrations. By simply
            entering your birth date and name, you can unlock a personalized
            numerology reading that reveals your unique Life Path Number,
            Destiny Number, Soul Urge Number, and other significant digits.
          </div>
          <div>
            These numbers serve as a roadmap, guiding you towards understanding
            your personality, strengths, weaknesses, and life's purpose. By
            exploring the meanings behind these numbers, you can gain valuable
            insights into how to navigate life's challenges, align with your
            true potential, and make informed decisions that support your
            journey.
          </div>
        </div>
      </div>

      <div className=" w-full px-4 md:px-8">
        <div className="my-6 md:my-[4vw] w-full">
          <div className="font-bold w-max">
            <div className="text-xl md:text-3xl flex gap-2">
              NUMEROLOGY NUMBERS{" "}
              <span className="hidden md:block">AND THEIR SIGNIFICANCE</span>
            </div>
            <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
              <div className="absolute -top-4 bg-primary-100">
                <img src={moon} className="text-xs" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <ul className="flex flex-col gap-8 text-sm md:text-xl mb-6 md:mb-[10vw]">
            <li>
              <div className="font-bold">Life Path Number:</div>
              <div>
                This number is derived from your birth date and represents your
                life's journey, challenges, and opportunities.
              </div>
            </li>
            <li>
              <div className="font-bold">Destiny Number:</div>
              <div>
                Calculated from your full name at birth, this number reveals
                your life's purpose and the goals you are meant to achieve.
              </div>
            </li>
            <li>
              <div className="font-bold">Soul Urge Number:</div>
              <div>
                This number is based on the vowels in your name and reflects
                your inner desires, motivations, and what truly drives you.
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full">
        <Articles />
      </div>
      <div className="">
        <div className="my-6 md:my-[4vw] w-full px-4 md:px-8">
          <div className="font-bold w-max">
            <div className="text-xl md:text-3xl ">NUMEROLOGY - FAQS</div>
            <div className="relative my-3 border-b w-full border-primary-300 flex justify-center">
              <div className="absolute -top-4 bg-primary-100">
                <img src={moon} className="text-xs" />
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-8">
          <ul className="flex flex-col gap-8 text-sm md:text-xl mb-6 md:mb-[10vw]">
            <li>
              <div className="font-bold">
                Q: Can numerology predict my future?
              </div>
              <div>
                A: Numerology provides insights into your potential future based
                on the vibrations of your numbers. It helps guide your
                decisions, but it doesn't predict specific events.
              </div>
            </li>
            <li>
              <div className="font-bold">Q: How accurate is numerology?</div>
              <div>
                A: Numerology is a centuries-old practice with a strong
                spiritual foundation. Its accuracy depends on the interpretation
                of numbers and how they align with your life experiences.
              </div>
            </li>
            <li>
              <div className="font-bold">
                Q: Can numerology help with decision-making?
              </div>
              <div>
                A: Yes, numerology can provide clarity and direction, helping
                you make informed decisions in various areas of your life,
                including career, relationships, and personal growth.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Numerology;

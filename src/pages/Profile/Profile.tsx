import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("booked"); // 'booked' or 'previous'
  const [name, setName] = useState("Shorya Jain");
  const [gender, setGender] = useState("male");
  const [language, setLanguage] = useState("english");
  const [email, setEmail] = useState("shoryajain0708@gmail.com");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const [house, setHouse] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [pin, setPin] = useState("");
  const [edit, setEdit] = useState(false);

  // Sample data for booked and previous slots
  const bookedSlots = [
    {
      date: "2024-10-30",
      time: "10:00 AM",
      consultant: "Dr. Smith",
      specialty: "Cardiology",
      meetingLink: "https://meet.google.com/abc-defg-hij",
    },
    {
      date: "2024-11-02",
      time: "2:30 PM",
      consultant: "Dr. Johnson",
      specialty: "Neurology",
      meetingLink: "https://meet.google.com/xyz-uvwx-yz",
    },
  ];

  const previousSlots = [
    {
      date: "2024-10-15",
      time: "11:00 AM",
      consultant: "Dr. Brown",
      specialty: "Dermatology",
      duration: "30 mins",
      amount: "$150",
    },
    {
      date: "2024-10-10",
      time: "3:00 PM",
      consultant: "Dr. Davis",
      specialty: "Ophthalmology",
      duration: "45 mins",
      amount: "$200",
    },
  ];

  const handleSubmit = () => {
    setEdit(false);
  };

  return (
    <div className="">
      {/* Header section remains the same */}
      <div className="p-2 md:p-4 md:px-8 flex justify-between items-center bg-primary-400 border-b border-primary-300">
        <div className="md:px-4 md:text-3xl font-semibold text-primary-300">
          LOGO
        </div>
        <div className="flex gap-3 md:gap-8 items-center w-full justify-end text-xs md:text-base">
          <div className="rounded-full p-1 md:p-2 flex items-center justify-center md:gap-2 bg-primary-200 w-[8rem] md:w-max">
            <CiSearch className="md:text-3xl opacity-50" />
            <input
              type="text"
              className="border-none outline-none md:w-full w-1/2"
              placeholder="search"
            />
            <div className="rounded-full p-1 px-2 text-primary-200 md:px-4 md:text-md bg-secondary-100 text-center cursor-pointer">
              search
            </div>
          </div>
          <div>
            <RxAvatar className="text-2xl md:text-5xl" />
          </div>
        </div>
      </div>

      <div className="p-2 md:p-[3vw]">
        <div className="bg-primary-100 rounded-xl p-2 md:p-6">
          {/* Profile header section */}
          <div className="flex md:flex-row md:justify-between flex-col gap-6">
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <div>
                <RxAvatar className="text-6xl md:text-[10vw]" />
              </div>
              <div className="flex flex-col gap-2 md:gap-4 md:text-2xl">
                <div className="font-bold">{name}</div>
                <div>{email}</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div
                className="cursor-pointer bg-secondary-100 text-primary-200 rounded-lg font-bold p-2 px-6"
                onClick={() => setEdit(!edit)}
              >
                {edit ? "Cancel" : "Edit"}
              </div>
            </div>
          </div>

          {/* Profile form section */}
          <div className="my-4 md:my-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 md:text-xl">
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="flex flex-col gap-2 md:gap-4 w-full">
                <label>Full Name</label>
                <input
                  type="text"
                  value={name}
                  placeholder="Your Full Name"
                  onChange={(e) => setName(e.target.value)}
                  className="p-2 bg-primary-200 border rounded-lg"
                  readOnly={!edit}
                />
              </div>
              <div className="flex flex-col gap-2 md:gap-4 w-full">
                <label>Gender</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="p-2 bg-primary-200 border rounded-lg"
                  disabled={!edit}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 md:gap-4 w-full">
                <label>Language</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="p-2 bg-primary-200 border rounded-lg"
                  disabled={!edit}
                >
                  <option value="hindi">Hindi</option>
                  <option value="english">English</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="flex flex-col gap-2 md:gap-4 w-full">
                <label>Email Address</label>
                <input
                  type="email"
                  value={email}
                  placeholder="Your email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2 bg-primary-200 border rounded-lg"
                  readOnly={!edit}
                />
              </div>
              <div className="flex flex-col gap-2 md:gap-4 w-full">
                <label>Country</label>
                <input
                  type="text"
                  value={country}
                  placeholder="Your country"
                  onChange={(e) => setCountry(e.target.value)}
                  className="p-2 bg-primary-200 border rounded-lg"
                  readOnly={!edit}
                />
              </div>
              <div className="flex flex-col gap-2 md:gap-4 w-full">
                <label>Date of Birth</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="p-2 bg-primary-200 border rounded-lg"
                  readOnly={!edit}
                />
              </div>
            </div>
          </div>

          {/* Address section */}
          <div className="md:text-xl mb-4 md:mb-6">Address</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 md:text-xl">
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="flex flex-col gap-2 md:gap-4 w-full">
                <input
                  type="text"
                  value={house}
                  placeholder="House Number"
                  onChange={(e) => setHouse(e.target.value)}
                  className="p-2 bg-primary-200 border rounded-lg"
                  readOnly={!edit}
                />
              </div>
              <div className="flex flex-col gap-2 md:gap-4 w-full">
                <input
                  type="text"
                  value={street}
                  placeholder="Street / Area"
                  onChange={(e) => setStreet(e.target.value)}
                  className="p-2 bg-primary-200 border rounded-lg"
                  readOnly={!edit}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="flex flex-col gap-2 md:gap-4 w-full">
                <input
                  type="text"
                  value={city}
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                  className="p-2 bg-primary-200 border rounded-lg"
                  readOnly={!edit}
                />
              </div>
              <div className="flex flex-col gap-2 md:gap-4 w-full">
                <input
                  type="text"
                  value={pin}
                  placeholder="Pincode"
                  onChange={(e) => setPin(e.target.value)}
                  className="p-2 bg-primary-200 border rounded-lg"
                  readOnly={!edit}
                />
              </div>
            </div>
          </div>

          {edit && (
            <div
              className="cursor-pointer my-8 md:my-12 text-center bg-secondary-100 text-primary-200 rounded-lg font-bold p-2 px-6"
              onClick={handleSubmit}
            >
              Save Changes
            </div>
          )}
        </div>
        <div>
          {/* Slots Section */}
          <div className="mt-8 md:mt-12">
            <div className="flex gap-4 mb-6">
              <button
                className={`px-6 py-2 rounded-sm font-bold border ${
                  activeTab === "booked"
                    ? "bg-primary-400 text-primary-200"
                    : "bg-primary-200"
                }`}
                onClick={() => setActiveTab("booked")}
              >
                Booked Slots
              </button>
              <button
                className={`px-6 py-2 rounded-sm font-bold border ${
                  activeTab === "previous"
                    ? "bg-primary-400 text-primary-200"
                    : "bg-primary-200"
                }`}
                onClick={() => setActiveTab("previous")}
              >
                Previous Slots
              </button>
            </div>

            <div className="overflow-x-auto border-2">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary-200 text-xl">
                    <th className="p-3 text-left"></th>
                    <th className="p-3 text-left">Astrologer Name</th>
                    <th className="p-3 text-left">Time Slot Booked</th>
                    {/* <th className="p-3 text-left">Specialty</th> */}
                    {activeTab === "booked" ? (
                      <th className="p-3 text-left">Google Meet Link</th>
                    ) : (
                      <>
                        <th className="p-3 text-left">Duration</th>
                        <th className="p-3 text-left">Amount</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {(activeTab === "booked" ? bookedSlots : previousSlots).map(
                    (slot: any, index) => (
                      <tr key={index} className="border-b border-primary-200">
                        <td className="p-3">
                          <RxAvatar className="text-6xl" />
                        </td>
                        <td className="p-3">{slot.consultant}</td>
                        <td className="p-3">
                          {slot.date}, {slot.time}
                        </td>
                        {/* <td className="p-3">{slot.specialty}</td> */}
                        {activeTab === "booked" ? (
                          <td className="p-3">
                            <a
                              href={slot.meetingLink}
                              className="text-primary-200 bg-secondary-100 p-3 rounded-xl hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Join Meeting
                            </a>
                          </td>
                        ) : (
                          <>
                            <td className="p-3">{slot.duration}</td>
                            <td className="p-3">{slot.amount}</td>
                          </>
                        )}
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import { CiSearch } from "react-icons/ci";
import moon from "../../assets/moon.svg";
import { useState } from "react";
import { GoStack } from "react-icons/go";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa6";

const Subscription = () => {
  const [selIt, setSelIt] = useState("1");
  const [selP, setSelP] = useState("Bronze plan");
  const [activeTab, setActiveTab] = useState("active");

  const items = [
    { key: "1", value: "Weekly" },
    { key: "2", value: "Monthly" },
    { key: "3", value: "Yearly" },
  ];

  const expiredSubscriptions = [
    {
      id: 1,
      plan: "Demo Plan A",
      startDate: "29/09/24",
      endDate: "29/10/24",
      time: "3:30:10 Am",
      amount: "900.00",
    },
    {
      id: 2,
      plan: "Demo Plan B",
      startDate: "12/08/24",
      endDate: "12/09/24",
      time: "3:30:30 Am",
      amount: "800.00",
    },
    {
      id: 3,
      plan: "Demo Plan C",
      startDate: "01/06/24",
      endDate: "01/07/24",
      time: "2:10:20 Pm",
      amount: "999.00",
    },
  ];

  const activeFeatures = [
    "Basic features",
    "Basic reporting",
    "Up to 10 individual users",
    "20GB data per user",
  ];

  const plans = [
    {
      name: "Bronze plan",
      price: 10,
      features: [
        "Basic Features",
        "Basic reporting",
        "Up to 10 individual users",
        "20GB data per user",
      ],
    },
    {
      name: "Silver plan",
      price: 30,
      features: [
        "Advance Features",
        "Basic reporting",
        "Up to 20 individual users",
        "50GB data per user",
      ],
    },
    {
      name: "Gold plan",
      price: 50,
      features: [
        "Advance Features",
        "Advance reporting",
        "Up to 50 individual users",
        "100GB data per user",
      ],
    },
  ];

  const ActiveSubscriptionCard = () => (
    <div>
      <div className="bg-primary-200 rounded-xl p-4 md:p-6 border">
        <div className="bg-primary-400 text-primary-200 p-4 rounded-xl mb-6 text-lg font-semibold">
          Astroserve Gold Plan
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {activeFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-primary-300"
              >
                <IoCheckmarkCircleOutline className="text-secondary-100 text-xl" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="bg-primary-100 rounded-xl p-4">
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Payment</h3>
              <p className="text-sm text-primary-300">
                Your next bill is for Rs 299 + Tax on 30/10/2024
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-primary-300">
              <FaCreditCard />
              <div>
                <p>Mastercard ending in 1234</p>
                <p>Expiry 05/2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button className="rounded-full px-4 py-2 border bg-primary-200 border-secondary-100 text-primary-300">
          Change Plan
        </button>
      </div>
    </div>
  );

  const ExpiredSubscriptionsTable = () => (
    <div className="bg-primary-200 rounded-xl p-4 border">
      <table className="w-full">
        <thead>
          <tr className="text-left text-primary-300/70 grid grid-cols-3 md:grid-cols-6 gap-4">
            {/* <th className="p-2">
              <input type="checkbox" className="rounded" />
            </th> */}
            <th className="p-2">Sr.No</th>
            <th className="p-2">Plan</th>
            <th className="p-2 hidden md:block">Start Date</th>
            <th className="p-2 hidden md:block">End Date</th>
            <th className="p-2 hidden md:block">Time</th>
            <th className="p-2">Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          {expiredSubscriptions.map((sub) => (
            <tr key={sub.id} className="border-t border-primary-300/10 grid grid-cols-3 md:grid-cols-6 gap-4">
              {/* <td className="p-2">
                <input type="checkbox" className="rounded" />
              </td> */}
              <td className="p-2">{sub.id}</td>
              <td className="p-2">{sub.plan}</td>
              <td className="p-2 hidden md:block">{sub.startDate}</td>
              <td className="p-2 hidden md:block">{sub.endDate}</td>
              <td className="p-2 hidden md:block">{sub.time}</td>
              <td className="p-2">{sub.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="bg-primary-100">
      {/* Header */}
      <div className="p-2 md:p-4 md:px-8 flex justify-between items-center bg-primary-400 border-b border-primary-300">
        <div className="md:px-4 md:text-3xl font-semibold text-primary-300">
          LOGO
        </div>
        <div className="flex gap-3 md:gap-8 items-center w-full justify-end text-xs md:text-base">
          <div className="rounded-full p-1 md:p-2 flex items-center justify-center md:gap-2 bg-primary-200 w-[8rem] md:w-max">
            <CiSearch className="md:text-3xl opacity-50" />
            <input
              type="text"
              className="border-none outline-none md:w-full w-1/2 bg-transparent"
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

      {/* Breadcrumb */}
      {/* <div className="px-4 md:px-8 py-4 text-sm">
        <span className="text-primary-300">Home</span>
        <span className="text-primary-300/50"> / Active Subscriptions</span>
      </div> */}

      {/* Subscription Tabs and Content */}
      <div className="px-4 md:px-8 my-8 w-full md:text-xl">
        <div className="flex gap-2 mb-4 w-full justify-center">
          <button
            className={`px-6 py-2 rounded-lg ${
              activeTab === "active"
                ? "bg-primary-400 text-primary-200"
                : "bg-primary-200"
            }`}
            onClick={() => setActiveTab("active")}
          >
            Active Subscription
          </button>
          <button
            className={`px-6 py-2 rounded-lg ${
              activeTab === "expired"
                ? "bg-primary-400 text-primary-200"
                : "bg-primary-200"
            }`}
            onClick={() => setActiveTab("expired")}
          >
            Expired
          </button>
        </div>

        {/* Conditional rendering based on active tab */}
        <div className="flex w-full justify-center">
          {activeTab === "active" ? (
            <ActiveSubscriptionCard />
          ) : (
            <ExpiredSubscriptionsTable />
          )}
        </div>
      </div>

      {/* Pricing Section - only show when on active tab */}
      {/* {activeTab === "active" && ( */}
      <>
        <div className="py-8 md:py-20 px-4 md:px-8">
          <div className="font-bold flex flex-col items-center justify-center">
            <div>
              <div className="text-xl md:text-4xl">
                Affordable pricing for all Astro Services
              </div>
              <div className="w-full relative my-3 border-b border-primary-300 flex justify-center">
                <div className="absolute -top-4 bg-primary-100">
                  <img src={moon} className="text-xs" alt="moon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <div className="w-[90%] md:w-[60%] grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4 md:gap-8 text-sm md:text-xl px-2 flex-wrap">
            {items.map((item) => (
              <div
                key={item.key}
                className={`p-2 text-center ${
                  selIt === item.key
                    ? "bg-secondary-100 text-primary-200"
                    : "bg-secondary-200"
                } rounded-full cursor-pointer`}
                onClick={() => setSelIt(item.key)}
              >
                {item.value}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex my-4 md:my-[3vw] items-center justify-center">
          <div className="bg-primary-200 rounded-xl md:w-[70%]">
            <div className="p-2 md:p-4 flex gap-2 md:gap-4 border-b border-primary-300/30">
              <div className="p-2 rounded-md flex items-center border border-primary-300/30">
                <GoStack className="text-xl md:text-2xl text-primary-300/70" />
              </div>
              <div className="flex flex-col">
                <div className="md:text-xl font-bold">Select Plan</div>
                <div className="text-sm md:text-md text-primary-300/50">
                  Simple and flexible per-user pricing.
                </div>
              </div>
            </div>
            <div className="my-4 md:my-6 p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {plans.map((item) => (
                <div
                  key={item.name}
                  className={`${
                    selP === item.name
                      ? "border-secondary-100 border-2 bg-primary-100"
                      : "border border-primary-300/30"
                  } rounded-xl p-2 md:p-4 flex flex-col gap-2 cursor-pointer`}
                  onClick={() => setSelP(item.name)}
                >
                  <div className="flex justify-between text-xl md:text-3xl font-bold">
                    <div className="py-2">₹{item.price}/month</div>
                    <div className="flex items-start">
                      <div
                        className={`${
                          selP === item.name
                            ? "border-none"
                            : "border rounded-full border-primary-300/30 p-4"
                        }`}
                      >
                        <FaCircleCheck
                          className={`${
                            selP === item.name ? "text-secondary-100" : "hidden"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.name}</div>
                    <div className="text-primary-300/50">Billed annually</div>
                  </div>
                  <div className="flex flex-col gap-2 md:text-xl text-primary-300/50">
                    {item.features.map((feat, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        <div>
                          <FaRegCheckCircle className="text-secondary-100" />
                        </div>
                        <div>{feat}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-2 flex justify-center md:justify-end items-center gap-2">
              <div className="border cursor-pointer border-primary-300/30 text-primary-300/50 rounded-lg font-bold p-2 px-6">
                Cancel
              </div>
              <div className="cursor-pointer bg-secondary-100 text-primary-200 rounded-lg font-bold p-2 px-6">
                Confirm
              </div>
            </div>
          </div>
        </div>
      </>
      {/* )} */}
    </div>
  );
};

export default Subscription;

import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";

const Contact = () => {
  const [formData, setFormData] = useState({
    userName: "",
    phoneNumber: "",
    emailId: "",
    subject: "",
    description: "",
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="bg-primary-100 min-h-screen">
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
      <div className="p-4 md:p-8">
        {/* <div className="flex items-center gap-2 text-sm text-primary-300 mb-4">
          <span className="hover:text-secondary-100 cursor-pointer">Home</span>
          <span>/</span>
          <span className="text-secondary-100">Contact us</span>
        </div> */}

        {/* Contact Form Card */}
        <div className="max-w-xl mx-auto bg-primary-200 rounded-lg shadow-lg p-6 md:p-8">
          <div className="text-center mb-6">
            <div className="md:text-xl font-bold mb-2">Logo</div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm md:text-xl font-medium mb-1">
                User Name
              </label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="Enter Name"
                className="w-full p-2 rounded border border-primary-300/30 bg-primary-100"
              />
            </div>

            <div>
              <label className="block text-sm md:text-xl font-medium mb-1">
                Phone number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="91 XXXX XXXXX"
                className="w-full p-2 rounded border border-primary-300/30 bg-primary-100"
              />
            </div>

            <div>
              <label className="block text-sm md:text-xl font-medium mb-1">
                Email Id
              </label>
              <input
                type="email"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="w-full p-2 rounded border border-primary-300/30 bg-primary-100"
              />
            </div>

            <div>
              <label className="block text-sm md:text-xl font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Add Subject"
                className="w-full p-2 rounded border border-primary-300/30 bg-primary-100"
              />
            </div>

            <div>
              <label className="block text-sm md:text-xl font-medium mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Add Comment"
                rows={4}
                className="w-full p-2 rounded border border-primary-300/30 bg-primary-100 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-secondary-100 text-primary-200 py-2 rounded-lg font-medium hover:bg-secondary-100/90 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

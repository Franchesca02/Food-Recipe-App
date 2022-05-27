import React from "react";

const Contact = () => {
  const handleSubmit = (values) => {
    // console.log("values", values);
    alert("Successfully subscribed!");
  };
  return (
    <div className="px-6 font-Inter">
      <div className="text-center">
        <h2 className="text-2xl text-Yellow font-bold py-4">Contact Us On</h2>
        <p className="font-Inter font-medium text-base w-[370px] mx-auto py-2 text-Wine">
          You can subscribe to our newsletter by filling out the form below.
          Rest assured, our newsletters comes once a week and they contain
          important information about our platform and the events that are
          created to serve you better.
        </p>
      </div>
      <div className="mt-10 py-6">
        <form onSubmit={handleSubmit} className="grid py-4 bg-White">
          <div className="flex flex-wrap justify-between w-[53%] mx-auto">
            <div className="grid">
              <input
                type="text"
                placeholder="Preferred name"
                required
                className="w-[330px] h-[50px] border-none bg-Gray mt-4 outline-0 px-4 py-2"
              />
              <input
                type="number"
                placeholder="Contact number"
                required="true"
                autoComplete="true"
                className="w-[330px] h-[50px] border-none bg-Gray mt-4 outline-0 px-4 py-2"
              />
            </div>
            <div className="grid">
              <input
                type="email"
                placeholder="Email address"
                required="true"
                autoComplete="true"
                className="w-[330px] h-[50px] border-none bg-Gray mt-4 outline-0 px-4 py-2"
              />
              <input
                type="text"
                placeholder="Your expectations from us"
                className="w-[330px] h-[50px] border-none bg-Gray mt-4 outline-0 px-4 py-2"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-[120px] h-[50px] rounded-2xl bg-Wine text-Grey font-Inter font-medium mt-12 ml-2"
            >
              Subscribe
            </button>
          </div>
          <div className="flex flex-wrap justify-between px-10 w-[70%] mx-auto mt-10">
            <p className="text-base font-Inter font-medium text-Grey">
              Email us at: ihuoma.franchesca@gmail.com
            </p>
            <p className="text-base font-Inter font-medium text-Grey">
              Call us on: +234-9057-2371-73
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

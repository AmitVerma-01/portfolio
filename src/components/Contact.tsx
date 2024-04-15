const Contact = () => {
  return (
    <div
      id="Contact"
      className="  w-full flex flex-col justify-center items-center"
    >
      <div className="px-2 my-3">
        <h1 className="text-3xl font-bold text-center">Contact</h1>
        <p className="text-center">
          Let's get in touch if you have any questions or projects to work on!
        </p>
      </div>
      <form className="w-3/4 md:w-1/3 space-y-3">
        <div className="space-y-1">
          <label htmlFor="name">Full Name : </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name..."
            className="outline-none border w-full border-gray-400 rounded-md p-1"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            className="outline-none border w-full border-gray-400 rounded-md p-1"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="message">Message : </label>
          <textarea
            id="message"
            placeholder="Hey, I have a project of ... and I would like to discuss"
            className="outline-none border w-full border-gray-400 rounded-md p-1 h-1/3"
          />
        </div>
        <button className="bg-[#4D403D] py-1 rounded-md w-full text-white">
          Send
        </button>
      </form>

      <br />
    </div>
  );
};

export default Contact;

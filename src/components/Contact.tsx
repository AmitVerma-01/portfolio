const Contact = () => {
  return (
    <div
      id="Contact"
      className="  w-full flex flex-col justify-center items-center h-[calc(100vh-64px)]"

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
      <div className="h-36 w-full flex items-center justify-center gap-x-10" >
        <a href="https://github.com/AmitVerma-01/"  target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 32 32" className="hover:opacity-80">
        <path fill-rule="evenodd" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"></path>
        </svg></a>
        <a href="https://www.linkedin.com/in/amit-verma-a24038217/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 50 50" className="hover:opacity-80">
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
          </svg>
        </a>
        <a href="https://x.com/Amitvermaup57" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30" className="hover:opacity-80">
          <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8.6484375 9 L 13.259766 9 L 15.951172 12.847656 L 19.28125 9 L 20.732422 9 L 16.603516 13.78125 L 21.654297 21 L 17.042969 21 L 14.056641 16.730469 L 10.369141 21 L 8.8945312 21 L 13.400391 15.794922 L 8.6484375 9 z M 10.878906 10.183594 L 17.632812 19.810547 L 19.421875 19.810547 L 12.666016 10.183594 L 10.878906 10.183594 z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Contact;

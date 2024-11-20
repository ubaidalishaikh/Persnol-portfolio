

export default function Contact_us() {
  return (
    //  <div className="hero-section flex flex-col items-center justify-center">
    //     <div>
    //       <h1 className="text-6xl">Contact Us</h1>
    //     </div>
    //  </div>

    <div className="flex items-center justify-center min-h-screen  p-6">
    <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
      <form  className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-600 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-black"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-600 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-black"
            required
          />
        </div>
        <div>
          <label  className="block text-gray-600 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-black"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          Send Message
        </button>
        <p className="mt-4 text-center text-gray-600"></p>
      </form>
    </div>
  </div>
);
}


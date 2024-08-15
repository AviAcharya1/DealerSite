function Contact() {
    return (
      <div>
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <form className="max-w-md mx-auto p-6 bg-white text-black rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
            <input className="w-full px-3 py-2 border rounded" type="text" id="name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
            <input className="w-full px-3 py-2 border rounded" type="email" id="email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
            <textarea className="w-full px-3 py-2 border rounded" id="message"></textarea>
          </div>
          <button className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-accent">Submit</button>
        </form>
      </div>
    );
  }
  
  export default Contact;
  
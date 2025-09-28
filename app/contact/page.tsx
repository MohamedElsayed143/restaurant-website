import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaInstagram, FaFacebookF, FaGoogle } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-amber-100 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl grid md:grid-cols-2">
        {/* LEFT SIDE - Contact Info */}
        <div className="bg-amber-600 text-white p-8 rounded-l-lg flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Stay connected with us</h2>
            <p className="text-white/90 mb-8">
              Reach out for reservations, orders, or any inquiries — our team is
              always here to help.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-amber-500/40 p-3 rounded-lg hover:bg-white hover:text-amber-600 transition cursor-pointer">
                <FaPhone className="text-lg" />
                <span>+20 1032886679</span>
              </div>

              <div className="flex items-center gap-3 bg-amber-500/40 p-3 rounded-lg hover:bg-white hover:text-amber-600 transition cursor-pointer">
                <FaEnvelope className="text-lg" />
                <span>info@elkhadry.com</span>
              </div>

              <div className="flex items-center gap-3 bg-amber-500/40 p-3 rounded-lg hover:bg-white hover:text-amber-600 transition cursor-pointer">
                <FaMapMarkerAlt className="text-lg" />
                <span>Cairo, Egypt</span>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500" />
            <FaFacebookF className="text-2xl cursor-pointer hover:text-[#1877F2] hover:opacity-80" />
            <FaGoogle className="text-2xl cursor-pointer hover:text-[#DB4437]" />
          </div>
        </div>

        {/* RIGHT SIDE - Contact Form */}
        <div className="p-8">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
            ></textarea>

            <button
              type="submit"
              className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

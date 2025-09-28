import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-amber-500 text-white py-10">
      <div className="container mx-auto px-6">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Image src="/logo.png" alt="logo" width={80} height={80} />
            <p className="text-sm">Best grilled food in town.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-black transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-black transition">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="font-semibold">Contact</h3>
            <p>📍 Cairo, Egypt</p>
            <p>📞 +20 100 123 4567</p>
            <p>✉️ info@grillhouse.com</p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-[#1877F2] hover:opacity-80">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-pink-500">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-[#DB4437]">
                <FaGoogle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-white/40 mt-8 pt-4 text-center text-sm">
          © 2025 Grill House. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

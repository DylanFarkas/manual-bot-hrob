import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-10 px-6 md:px-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 text-center md:text-left">
                <div className="flex items-center gap-3">
                    <div>
                        <p className="text-lg font-semibold">Bot de WhatsApp</p>
                        <p className="text-sm text-blue-200">Hospital Raúl Orejuela Bueno ESE</p>
                    </div>
                </div>

                <div className="flex gap-6 items-center text-blue-200">

                    <a
                        href="https://www.facebook.com/hospitalraulorejuelabuenoese?_rdc=2&_rdr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                        title="Facebook"
                    >
                        <FaFacebookF className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.instagram.com/hospitalsaludable/?hl=es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                        title="Instagram"
                    >
                        <FaInstagram className="w-5 h-5" />
                    </a>
                    <a
                        href="https://x.com/hospitalpalmira"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                        title="X (Twitter)"
                    >
                        <FaXTwitter className="w-5 h-5" />
                    </a>
                </div>
            </div>

            <div className="mt-8 border-t border-blue-700 pt-4 text-center text-sm text-blue-300">
                © {new Date().getFullYear()} Hospital Raúl Orejuela Bueno ESE.
            </div>
        </footer>
    );
};

export default Footer;
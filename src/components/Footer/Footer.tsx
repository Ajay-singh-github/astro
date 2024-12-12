import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-secondary-300">
      <div className="p-2 md:p-8 flex justify-between text-primary-300 font-semibold">
        <div>
          <div className="md:text-3xl">LOGO</div>
          <div className="font-normal flex flex-col my-2">
            <p>Our vision is to provide convenience</p>
            <p>and help increase your sales</p>
            <p>buiness.</p>
          </div>
          <div className="flex gap-2 md:gap-4 md:text-2xl">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-16">
          <div>
            <div className="underline md:text-2xl">About</div>
            <div className="hidden md:flex my-4 flex-col gap-4 font-normal">
              <div>How it works</div>
              <div>Featured</div>
              <div>Partnership</div>
              <div>Business Relation</div>
            </div>
          </div>
          <div>
            <div className="underline md:text-2xl">Community</div>
            <div className="hidden md:flex my-4 flex-col gap-4 font-normal">
              <div>Events</div>
              <div>Blog</div>
              <div>Podcast</div>
              <div>Invite a friend</div>
            </div>
          </div>
          <div>
            <div className="underline md:text-2xl">Socials</div>
            <div className="hidden md:flex my-4 flex-col gap-4 font-normal">
              <div>Discord</div>
              <div>Instagram</div>
              <div>Twitter</div>
              <div>Facebook</div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 md:py-8 mx-2 md:mx-8 border-t border-primary-300 flex flex-col md:flex-row gap-2 justify-between">
        <div>
          <p>©2022 Company Name. All rights reserved</p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-12">
          <div>Privacy & Policy</div>
          <div>Terms & Conditions</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

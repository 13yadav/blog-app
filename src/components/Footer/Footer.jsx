import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden py-8 bg-[#172121]">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap">
          <p className="text-sm text-[#E5D0CC]">
            &copy; Copyright 2023. All Rights Reserved by DevUI.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;

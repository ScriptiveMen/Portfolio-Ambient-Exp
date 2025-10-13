const Footer = () => {
  return (
    <div className="w-full border-t pt-7 md:pt-9 pb-3 md:pb-5 border-[#74747483]">
      <div className="w-full flex md:flex-row flex-col gap-1 md:items-center justify-between">
        <div className="left">
          <div className="flex text-sm items-center justify-center md:justify-start gap-3">
            <span>
              <a
                href="https://www.instagram.com/satya_kumar_ram/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ➀ Instagram
              </a>
            </span>
            <span>
              <a
                href="https://x.com/Satya_Kumar_Ram"
                target="_blank"
                rel="noopener noreferrer"
              >
                ➁ Twitter
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/satyakumarram/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ➂ Linkedin
              </a>
            </span>

            <span>
              <a
                href="https://github.com/ScriptiveMen"
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden"
              >
                ➃ GitHub
              </a>
            </span>
          </div>
        </div>

        <div className="right">
          <h4 className="uppercase text-[0.70rem]  md:text-[0.75rem] text-center flex items-center justify-center gap-1">
            © 2025 SATYA KUMAR RAM — Created with{" "}
            <i className="ri-heart-line text-pink-400 text-lg"></i> by me
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;

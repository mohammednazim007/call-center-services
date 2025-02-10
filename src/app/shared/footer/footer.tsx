import { footerData } from "./data";

const Footer = () => {
  return (
    <div>
      <footer className="px-4 divide-y bg-[#c8ebff] text-gray-800">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="flex-shrink-0 w-5 h-5 rounded-full text-gray-50"
                >
                  <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                </svg>
              </div>
              <span className="self-center text-2xl font-semibold">
                Brand name
              </span>
            </a>
          </div>

          {footerData.length > 0 &&
            footerData.map((item, index) => (
              <div key={index} className="grid grid-cols-2">
                <div className="space-y-3">
                  <h3 className="tracking-wide uppercase text-[#30aefc]">
                    {item?.category}
                  </h3>
                  <ul className="space-y-1">
                    {item?.items?.map((list, index) => (
                      <li key={index}>
                        <a rel="noopener noreferrer" href="#">
                          {list?.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-600">
          © 1968 Company Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;

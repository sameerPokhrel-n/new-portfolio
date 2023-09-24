import { testimonials } from "../data";
import { style } from "../styles";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  //   cssEase: "linear",
  fade: false,
  cssEase: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
};

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className={`${style.container} ${style.paddingX} pb-4 pt-10`}
    >
      <div
        className={`${style.flexCol} place-items-center space-y-6 sm:space-y-4`}
      >
        <h4 className={`${style.h4}`}>Testimonials</h4>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:mx-12 text-center py-4">
          <Slider {...settings}>
            {testimonials.map(
              ({ id, name, position, company, details, uri }) => (
                <div
                  key={id}
                  className="relative mx-auto mt-8 rounded-lg shadow-lg max-w-2xl font-poppins border-y-2 border-secondaryDim  hover:shadow-lg p-10 bg-gray-100 text-gray-700 dark:bg-primaryDim dark:text-white leading-snug flex flex-col justify-between cursor-pointer"
                >
                  <div className="-ml-4">
                    <svg
                      className="w-8 opacity-25 text-secodary"
                      xmlns="http://www.w3.org/2000/svg"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      viewBox="0 0
                                                                                                             640 640"
                      fill="bg-secondary"
                    >
                      <path d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
                    </svg>
                  </div>

                  <div className="mt-2">{details}</div>
                  <div>
                    <div className="mx-auto w-full border border-gray-300 my-8"></div>
                    <div className="flex items-center justify-center">
                      <div>
                        <img
                          className="w-12 h-12 rounded-full border-2 border-secondary"
                          src="https://avatars2.githubusercontent.com/u/2741?s=64&v=4"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-bold">{name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          {position}, <a href={uri}>{company}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
}

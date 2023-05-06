import arrow from "../assets/icon-arrow.svg";
import left from "../assets/icon-angle-left.svg";
import right from "../assets/icon-angle-right.svg";

interface Props {
  items: {
    id: number;
    title: string;
    desc: string;
    mobile: string;
    desktop: string;
  }[];
  data: {
    id: number;
    title: string;
    desc: string;
    mobile: string;
    desktop: string;
  }[];
  slideIndex: number;
  setSlideIndex: React.Dispatch<React.SetStateAction<number>>;
  handleNextSlide: () => void;
  handlePrevSlide: () => void;
}

export default function Showcase(props: Props) {
  const { items, slideIndex, handleNextSlide, handlePrevSlide } = props;

  return (
    <>
      <section>
        {items.map((item, index) => (
          <article
            key={item.id}
            className={
              slideIndex === index + 1
                ? "grid grid-cols-1 lg:grid-cols-2 lg:place-items-center"
                : "hidden"
            }
          >
            <div className="relative">
              <picture>
                <source media="(min-width: 768px)" srcSet={item.desktop} />
                <img src={item.mobile} alt={item.title} className="w-full" />
              </picture>

              <ul className="absolute -bottom-2 right-0 flex">
                <li>
                  <button
                    onClick={handlePrevSlide}
                    className="bg-black hover:bg-neutral-700 transition-all duration-200"
                  >
                    <img src={left} alt="" className="p-6" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleNextSlide}
                    className="bg-black hover:bg-neutral-700 transition-all duration-200"
                  >
                    <img src={right} alt="" className="p-6" />
                  </button>
                </li>
              </ul>
            </div>

            <div className="p-8 lg:p-12">
              <h1 className="text-slate-900 text-3xl lg:text-5xl">
                {item.title}
              </h1>
              <p className="text-slate-900 opacity-75 my-6">{item.desc}</p>
              <button
                className="flex items-center gap-4 uppercase tracking-widest hover:opacity-75"
                style={{
                  letterSpacing: "0.7rem",
                }}
              >
                Shop Now <img src={arrow} alt="" />
              </button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

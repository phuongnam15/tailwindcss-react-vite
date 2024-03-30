// import { Card } from "./Card";

const buttons = [
  {
    id: 1,
    title: "profile",
  },
  {
    id: 1,
    title: "Newyork",
  },
  {
    id: 1,
    title: "Relaxing",
  },
  {
    id: 1,
    title: "Person",
  },
  {
    id: 1,
    title: "Fashion",
  },
];
function Colection() {
  return (
    <div className="relative flex h-5/6 w-9/12 items-center justify-center bg-[#d8dae2]">
      <div className="top-50 absolute right-0 h-14 w-14 rounded-full bg-red-400"></div>
      <div className="my-25 relative bg-[#eff0f1] p-10">
        <h1 className="text-22 mb-5 font-serif font-bold">
          Poppular Collections
        </h1>
        <div className="flex gap-2">
          {buttons.map((button) => (
            <button
              id={button.id}
              className="text- rounded-md bg-[#fff] px-2 py-2 font-medium text-black"
            >
              {button.title}
            </button>
          ))}
        </div>
        <div className="flex gap-5">
          <Card cover="" imgs={[1, 2, 3]} title="" description="" />
        </div>
      </div>
      <div className="top-50 absolute left-0 h-14 w-14 rounded-full bg-red-400"></div>
    </div>
  );
}

export default Colection;

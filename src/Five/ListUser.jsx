import { CardUser } from "./CardUser";

const buttons = ["Reputation", "New User", "Voters", "Editors", "Moderators"];

const users = [
  {
    name: "Anya Forger",
    des: "Troy, MI",
    tags: ["clothes", "stam"],
    avt: "https://i.pinimg.com/564x/b7/2b/dd/b72bdd8a37f176779edf0af4f8dd34f4.jpg",
  },
  {
    name: "Zesus Weiss",
    des: "Fort Worth, TX",
    tags: ["headset", "gadset", "speed", "winter"],
    avt: "https://i.pinimg.com/564x/a1/46/ff/a146ffe7ac1dc535ce2f8b3f10ad017d.jpg",
  },
  {
    name: "Shoto Todoroki",
    des: "Austin, TX",
    tags: ["road", "mountain", "trip", "earth", "nature"],
    avt: "https://i.pinimg.com/564x/d5/67/56/d5675621fe328f1b30b0d61d7f10ca86.jpg",
  },
  {
    name: "Toge Inumaki",
    des: "Cincinnati, OH",
    tags: ["mainternance", "gear", "frames", "repare"],
    avt: "https://i.pinimg.com/736x/5c/4c/f5/5c4cf592838168dcd491c17875da874a.jpg",
  },
  {
    name: "Killua ZolDick",
    des: "Warrior, AL",
    tags: ["music", "disk"],
    avt: "https://i.pinimg.com/564x/23/a4/85/23a485a2666ce9a49e1fbf8ccb6dbcb1.jpg",
  },
  {
    name: "Anthony S. Morin",
    des: "Lyndhurst, NJ",
    tags: ["vintage", "electric"],
    avt: "https://i.pinimg.com/736x/ce/1a/81/ce1a814b773115ad364c92f12692a8df.jpg",
  },
];
function ListUser() {
  return (
    <div className="w-[70%] rounded-lg bg-white p-24">
      <h1 className="font-meri mb-3 text-[24px] font-black">Users</h1>
      <div className="mb-7 flex flex-wrap items-center gap-7">
        <div className="relative grow">
          <input
            type="text"
            placeholder="Search users"
            className="w-[90%] rounded-sm border border-gray-200 py-3 pl-10 outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="absolute left-3 top-4 h-5 w-5 text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <div className="flex h-[50%] flex-wrap gap-2">
          {buttons.map((button) => (
            <button className="rounded-md px-2 py-2 font-popi text-[13px] font-medium hover:bg-[#849FFF] hover:text-white">
              {button}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <CardUser
            name={user.name}
            des={user.des}
            tags={user.tags}
            avt={user.avt}
          />
        ))}
      </div>
    </div>
  );
}

export default ListUser;

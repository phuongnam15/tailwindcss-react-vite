import React from "react";

interface UserProps {
  name: string;
  des: string;
  tags: [];
  avt: string;
}

export const CardUser: React.FC<UserProps> = ({
  name,
  des,
  tags,
  avt,
}): JSX.Element => {
  return (
    <div className="flex aspect-video gap-4 overflow-auto rounded-xl border border-[#FBFCFF] bg-[#FBFCFF] p-4 shadow-[#BFC8E5] transition-all duration-300 hover:border hover:border-[#BFC8E5] hover:bg-white hover:shadow">
      <img className="w-16 self-start rounded-full" src={avt} alt="" />
      <div>
        <div className="mt-2">
          <h1 className="font-meri text-[14px] font-bold">{name}</h1>
          <p className="font-popi text-[11px] font-medium">{des}</p>
        </div>
        <div className="mt-2 flex flex-wrap gap-1 pb-3 text-[10px] text-[#516FD4]">
          {tags.map((i) => (
            <span className="rounded-3xl border border-[#516FD4] px-2">
              {i}
            </span>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

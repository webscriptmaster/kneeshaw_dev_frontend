"use client";

import { useEffect } from "react";

import { LuUserSquare } from "react-icons/lu";

import useTeamMemberStore from "@/zustand/TeamMember";
import { ITeamMember } from "@/types/interfaces";

function Member({ avatar, firstName, lastName, position }: ITeamMember) {
  return (
    <div className="flex flex-col items-center">
      <img
        className="mb-2 h-[120px] w-[120px] rounded-full"
        src={`${process.env.NEXT_PUBLIC_API_SERVER}/${avatar}`}
        alt={`${firstName} ${lastName}`}
      />

      <h4 className="font-lbv mb-2 text-[16px] font-[700] md:text-[18px] lg:text-[20px]">
        {firstName} {lastName}
      </h4>

      <div className="flex items-center justify-center gap-3">
        <LuUserSquare className="h-6 w-6" />

        <span className="font-lbv text-[16px] md:text-[18px] lg:text-[20px]">
          {position}
        </span>
      </div>
    </div>
  );
}

export default function Team() {
  const teamMemberStore = useTeamMemberStore();

  useEffect(() => {
    teamMemberStore.getListAction();
  }, []);

  return (
    <div className="mb-40 flex flex-col">
      <h2 className="font-lbv mb-5 text-center text-[20px] font-[700] md:text-[30px] lg:text-[40px]">
        Our team
      </h2>

      <div className="mb-24 flex h-1 w-full items-center justify-center">
        <div className="h-0 w-[35px] border border-[#AFD276]" />
        <div className="h-0 w-[30px] border-[2px] border-[#AFD276]" />
        <div className="h-0 w-[35px] border border-[#AFD276]" />
      </div>

      <div className="flex flex-col gap-5 md:flex-row md:gap-10">
        <div className="flex flex-1 flex-col">
          <h3 className="font-lbv mb-8 text-center text-[18px] font-[400] md:text-[24px] lg:text-[30px]">
            Kneeshaw Developments Team
          </h3>

          <p className="text-center text-[16px] font-[400] md:text-[18px] lg:text-[20px]">
            Kneeshaw Game Development is home to a team of experienced and
            dedicated professionals who are passionate about creating innovative
            and engaging games for players around the world. Our development
            team is made up of skilled programmers, designers, artists, and
            writers who work together to bring our games to life. With their
            expertise in various areas of game development, our team is able to
            tackle complex challenges and create games that are both fun to play
            and visually stunning.
          </p>
        </div>

        <div className="flex flex-1 flex-wrap items-center justify-center gap-5 md:gap-10">
          {teamMemberStore.teamMembers.map((tm) => (
            <Member key={tm._id} {...tm} />
          ))}
        </div>
      </div>
    </div>
  );
}

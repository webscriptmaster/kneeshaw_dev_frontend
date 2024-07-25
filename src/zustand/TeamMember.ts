import { toast } from "sonner";
import { create } from "zustand";

import { ITeamMember } from "@/types/interfaces";
import { apiGetTeamMemberList } from "@/api/TeamMember";

interface ITeamMemberState {
  loading: boolean;
  teamMembers: ITeamMember[];

  getListAction: () => void;
}

const useTeamMemberStore = create<ITeamMemberState>()((set) => ({
  loading: false,
  teamMembers: [],

  getListAction: async () => {
    try {
      set({ loading: true });
      const response = await apiGetTeamMemberList();

      if (response && response.data) {
        set({ teamMembers: response.data.result });
      }
    } catch (err: any) {
      console.error(err);
      if (err && err.response && err.response.data && err.response.data.msg) {
        toast.error(err.response.data.msg);
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } finally {
      set({ loading: false });
    }
  }
}));

export default useTeamMemberStore;

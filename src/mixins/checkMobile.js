import { isMobile } from "mobile-device-detect";

export const checkMobile = {
  data() {
    return {
      isMobile: isMobile,
    };
  },
  created() {
    console.log(this.isMobile);
  },
};

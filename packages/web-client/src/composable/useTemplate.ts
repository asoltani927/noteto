export const useRtlDirection = () => {
  document.body.classList.add("rtl");
};

export const useLtrDirection = () => {
  document.body.classList.remove("rtl");
};

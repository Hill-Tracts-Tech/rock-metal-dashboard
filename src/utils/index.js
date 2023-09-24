import { toast } from "react-toastify";

export const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#f17422",
  "#c71585",
  "#008080",
  "#f26d6d",
  "#3cba9f",
  "#8e5ea2",
  "#e8c3b9",
  "#c45850",
  "#00CED1",
];

export const handleShowToast = (text) => {
  toast.success(text, {
    position: "top-right",
    autoClose: 3000,
  });
};

export const BACKEND_ENDPOINT = "http:/localhost:8000";

export type TDistributor = {
  id: number;
  name: string;
  type: string;
};

export const distributorData: TDistributor[] = [
  { id: 1, name: "Starlight Cafe", type: "Cafe" },
  { id: 2, name: "Cosmic Lounge", type: "Lounge" },
  { id: 3, name: "Nebula Nook", type: "Cafe" },
  { id: 4, name: "Galaxy Bistro", type: "Bistro" },
  { id: 5, name: "Lunar Latte", type: "Cafe" },
  { id: 6, name: "Comet Cafe", type: "Cafe" },
];

export type TWorkingHours = {
  open: string;
  close: string;
};

import { atom } from "recoil";

export const themeState = atom<string>({
    key: "THEME",
    default: "brown"
});

export const backgroundState = atom<string>({
    key: "BACKGROUND",
    default: "light-brown"
});
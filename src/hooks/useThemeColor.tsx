import { useRecoilState } from "recoil"
import { themeState } from "../recoil/atoms"
import LocalStorage from "../submodules/local-storage/local-storage";
import { useEffect } from "react";
import { ThemeKey } from "../settings";

const useThemeColor = () => {
    const setTheme = useRecoilState(themeState)[1];

    const ret = (colorTheme: ThemeKey) => {
        LocalStorage.set("theme", colorTheme);
        setTheme(colorTheme);
    };

    let currentTheme: ThemeKey | undefined = LocalStorage.get("theme");
    useEffect(() => {
        if (currentTheme)
            ret(currentTheme);
    }, [currentTheme]);

    return ret;
}

export default useThemeColor;
import { useRecoilState } from "recoil";
import { backgroundState } from "../recoil/atoms";
import LocalStorage from "../submodules/local-storage/local-storage";
import { useEffect } from "react";
import { BackgroundKey } from "../settings";

const useBackgroundColor = () => {
    const setBackground = useRecoilState(backgroundState)[1];
    
    const ret = (backgroundColor: BackgroundKey) => {
        LocalStorage.set("background", backgroundColor);
        setBackground(backgroundColor);
    };

    let currentBg: BackgroundKey | undefined = LocalStorage.get("background");
    useEffect(() => {
        if (currentBg) {
            ret(currentBg);
        }
    }, [currentBg]);

    return ret;
};

export default useBackgroundColor;
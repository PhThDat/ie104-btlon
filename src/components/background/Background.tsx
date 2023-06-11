import React from "react";
import { BaseProps } from "../../submodules/base-props/base-props";
import { combineClassNames } from "../../submodules/string-processing/combine-classname";
import useBackgroundColor from "../../hooks/useBackgroundColor";
import { BACKGROUNDS, BackgroundKey, THEMES, ThemeKey } from "../../settings";
import LocalStorage from "../../submodules/local-storage/local-storage";
import useThemeColor from "../../hooks/useThemeColor";

interface Props extends BaseProps {}

const Background = React.memo((props: Props) => {
    useBackgroundColor();
    useThemeColor();

    let currentTheme = THEMES[LocalStorage.get("theme") as ThemeKey];
    let currentBgOpacity = BACKGROUNDS[LocalStorage.get("background") as BackgroundKey];
    let bgColor = currentTheme.setL(currentTheme.l + 20).setA(currentBgOpacity).toString();

    return (
        <div
            className={combineClassNames(
                props.className,
                "w-screen h-screen bg-[url(/src/assets/bg.png)] bg-repeat-x"
            )}
            style={{
                ...props.style,
                backgroundColor: bgColor,
            }}
        >
            {props.children}
        </div>
    );
});

export default Background;
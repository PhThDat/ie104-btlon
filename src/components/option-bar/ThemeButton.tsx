import React from "react";
import { BaseProps } from "../../submodules/base-props/base-props";
import { combineClassNames } from "../../submodules/string-processing/combine-classname";
import { ThemeKey } from "../../settings";

interface Props extends BaseProps {
    onClick?: () => void,
    color: ThemeKey
}

const ThemeButton = React.memo((props: Props) => {
    let path = `/src/assets/theme-button/${props.color}.png`;

    return (
        <button
            className={combineClassNames(
                props.className,
                "w-5 h-5 bg-contain"
            )}
            style={{
                ...props.style, 
                backgroundImage: `url(${path})`
            }}
            onClick={props.onClick}
        />
    );
});

export default ThemeButton;
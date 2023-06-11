import React, { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { BaseProps } from "../../submodules/base-props/base-props";
import { combineClassNames } from "../../submodules/string-processing/combine-classname";
import ThemeButton from "./ThemeButton";
import { BACKGROUNDS, BackgroundKey, THEMES, ThemeKey } from "../../settings";
import useThemeColor from "../../hooks/useThemeColor";
import useBackgroundColor from "../../hooks/useBackgroundColor";
import LocalStorage from "../../submodules/local-storage/local-storage";
import RefOptionBar from "../../submodules/ref-interfaces/ref-option-bar";

interface Props extends BaseProps {}

const OptionBar = (props: Props, ref: ForwardedRef<RefOptionBar>) => {
    const setThemeColor = useThemeColor();
    const setBackgroundColor = useBackgroundColor();
    const barRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
        getHeight: () => {
            if (headerRef.current) {
                return headerRef.current.offsetHeight;
            }
            return 0;
        }
    }));

    let bgColor = THEMES[LocalStorage.get("theme") as ThemeKey].toString();

    useEffect(() => {
        if (barRef.current && logoRef.current) {
            logoRef.current.style.height = barRef.current.clientHeight + "px";
        }
    }, [barRef.current?.clientHeight]);

    return (
        <div ref={headerRef}>
            <div
                ref={barRef}
                className={combineClassNames(
                    props.className,
                    "p-2 pb-3 flex justify-between"
                )}
                style={{
                    ...props.style,
                    backgroundColor: bgColor
                }}
            >
                <div className="w-[4.3rem] flex justify-between">
                    {Object.keys(THEMES).map((k) => {
                        let color = k as ThemeKey;

                        return <ThemeButton 
                                    key={k} 
                                    color={color} 
                                    onClick={() => setThemeColor(color)}
                                />
                    })}
                </div>
                <select onChange={(e) => setBackgroundColor(e.target.value as BackgroundKey)}>
                    {Object.keys(BACKGROUNDS).map((k) => {
                        let color = k as BackgroundKey;
                        return (
                            <option 
                                key={color}
                                value={color}
                            >
                                {color}
                            </option>
                        );
                    })}
                </select>
            </div>
            {props.children}
            <div
                style={{
                    ...props.style,
                    backgroundColor: bgColor
                }}
            >
                <img 
                    ref={logoRef} 
                    className="ml-auto mr-0 relative top-[0.2rem]"
                    src="/src/assets/logo.png" 
                />
            </div>
        </div>
    );
};

export default React.memo(forwardRef(OptionBar));
import React, { ForwardedRef, forwardRef, useImperativeHandle, useRef } from "react";
import { BaseProps } from "../../submodules/base-props/base-props";
import useThemeColor from "../../hooks/useThemeColor";
import { combineClassNames } from "../../submodules/string-processing/combine-classname";
import { THEMES, ThemeKey } from "../../settings";
import LocalStorage from "../../submodules/local-storage/local-storage";
import RefFooter from "../../submodules/ref-interfaces/ref-footer";
import { Link } from "react-router-dom";

interface Props extends BaseProps {}

const Footer = (props: Props, ref: ForwardedRef<RefFooter>) => {
    useThemeColor();
    const foorterRef = useRef<HTMLElement>(null);

    useImperativeHandle(ref, () => ({
        setWidth: (newWidth: number) => {
            if (foorterRef.current) {
                foorterRef.current.style.width = newWidth + "px";
            }
        },
        getHeight: () => {
            if (foorterRef.current) {
                return foorterRef.current.offsetHeight;
            }
            return 0;
        },
        setTop: (newTop: number) => {
            if (foorterRef.current) {
                foorterRef.current.style.top = newTop + "px";
            }
        }
    }));

    let bgColor =  THEMES[LocalStorage.get("theme") as ThemeKey].toString();

    return (
        <footer 
            ref={foorterRef}
            className={combineClassNames(
                props.className,
                "text-xs p-1 px-3 flex justify-between text-[#c9921e]"
            )}
            style={{
                ...props.style,
                backgroundColor: bgColor
            }}
        >
            <div>
                <Link className="hover:text-[#dfbe78]" to="/hours">Hours</Link> |
                <Link className="hover:text-[#dfbe78]" to="/news"> News</Link> |
                <Link className="hover:text-[#dfbe78]" to="/products"> Products</Link> |
                <Link className="hover:text-[#dfbe78]" to="/services"> Services</Link> | 
                <Link className="hover:text-[#dfbe78]" to="/survey-feedback"> Survey & Feedback</Link>
            </div>
            {props.children}
            &copy; 2021
        </footer>
    );
};

export default React.memo(forwardRef(Footer));
import React, { useEffect, useRef } from "react";
import { BaseProps } from "../../submodules/base-props/base-props";
import DashedHr from "../dashed-hr/DashedHr";
import { combineClassNames } from "../../submodules/string-processing/combine-classname";
import { Link } from "react-router-dom";

interface NavProps extends BaseProps {}

const Nav = React.memo((props: NavProps) => {
    const navRef = useRef<HTMLElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const anchorContainerRef = useRef<HTMLDivElement>(null);

    const handleResizeImage = () => {
        let nav: HTMLElement | null = navRef.current;
        let img: HTMLImageElement | null = imgRef.current;
        let container: HTMLDivElement | null = anchorContainerRef.current;

        if (!nav || !img || !container) {
            return () => {};
        }

        let remainingHeight = nav.offsetHeight - container.offsetHeight;
        if (img.getBoundingClientRect().height < remainingHeight) {
            img.style.height = img.naturalHeight + "px"
        }
        else img.style.height = remainingHeight - 16 + "px";
    };

    window.addEventListener("load", handleResizeImage);
    window.addEventListener("resize", handleResizeImage);
    useEffect(handleResizeImage, [navRef.current?.offsetHeight]);

    return (
        <nav 
            ref={navRef}
            className={combineClassNames(
                props.className,
                "p-3 pb-0 bg-[#ffe8b0] text-sm font-bold text-[#512901]"
            )}
        >
            <div 
                ref={anchorContainerRef}
                className="flex flex-col"
            >
                <Anchor href="/">Home</Anchor>
                <DashedHr />
                <Anchor href="/about">About</Anchor>
                <DashedHr />
                <Anchor href="/location">Location</Anchor>
                <DashedHr />
                <Anchor href="/menu">Menu</Anchor>
                <DashedHr />
                <Anchor href="/contact">Contact</Anchor>
                <DashedHr />
            </div>
            <div className="grow shrink basis-auto overflow-hidden">
                <img 
                    ref={imgRef}
                    src="/src/assets/nav/cafe.png" 
                />
            </div>
        </nav>
    );
});

interface AnchorProps extends BaseProps {
    href?: string
}

const Anchor = React.memo((props: AnchorProps) => {
    return (
        <Link 
            className={combineClassNames(
                props.className,
                "pl-2 lg:pl-3 py-[0.65rem] hover:text-inherit hover:bg-[#cfa865] hover:bg-[url(/src/assets/nav/coffee-seed.png)] bg-right bg-no-repeat"
            )}
            style={{...props.style}}
            to={props.href ?? ""}
        >
            {props.children}
        </Link>
    )
});

export default Nav;
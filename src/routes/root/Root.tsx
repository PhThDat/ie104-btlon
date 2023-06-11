import React, { useEffect, useRef } from "react";
import { BasePropsPage } from "../../submodules/base-props/base-props";
import OptionBar from "../../components/option-bar/OptionBar";
import { Outlet } from "react-router-dom";
import { combineClassNames } from "../../submodules/string-processing/combine-classname";
import Background from "../../components/background/Background";
import Banner from "../../components/banner/Banner";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import RefFooter from "../../submodules/ref-interfaces/ref-footer";
import RefOptionBar from "../../submodules/ref-interfaces/ref-option-bar";

interface Props extends BasePropsPage {}

const Root: React.FC<Props> = React.memo((props) => {
    const footerRef = useRef<RefFooter>(null);
    const mainRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<RefOptionBar>(null);

    const handleResize = () => {
        let main: HTMLDivElement | null = mainRef.current;
        let footer: RefFooter | null = footerRef.current;
        let header: RefOptionBar | null = headerRef.current

        if (!main || !footer || !header) {
            return () => {};
        }
        
        main.style.maxHeight = window.innerHeight*99/100 - header.getHeight() - footer.getHeight() + "px";
    }

    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
    useEffect(handleResize, []);

    return (
        <Background className="flex justify-center">
            <div 
                className={combineClassNames(
                    props.className,
                    "overflow-hidden flex flex-col grow-0 w-full min-[580px]:w-[68%] md:w-[60%] min-[1185px]:w-[45%] max-h-[99vh] shadow-lg shadow-black"
                )} 
                style={{...props.style,}}
            >
                <OptionBar ref={headerRef} >
                    <Banner />
                </OptionBar>
                <div 
                    ref={mainRef}
                    className="flex grow"
                >
                    <Nav className="grow" />
                    <div
                        className="w-9/12 overflow-y-scroll bg-white"
                    >
                        <Outlet />
                    </div>
                </div>
                <Footer ref={footerRef} className="w-full"/>
            </div>
        </Background>
    );
});

export default Root
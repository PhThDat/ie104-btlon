import React, { useEffect, useRef, useState } from "react";
import { BaseProps } from "../../submodules/base-props/base-props";
import { combineClassNames } from "../../submodules/string-processing/combine-classname";
import useThemeColor from "../../hooks/useThemeColor";
import { THEMES, ThemeKey } from "../../settings";
import LocalStorage from "../../submodules/local-storage/local-storage";

interface Props extends BaseProps {}

const Banner = React.memo((props: Props) => {
    const [bannerIndex, setBannerIndex] = useState(0);
    const imgRef = useRef<HTMLImageElement>(null);
    const seasonRef = useRef<HTMLElement>(null);
    const btnContainerRef = useRef<HTMLDivElement>(null);

    const handleChangeImg = (func: (currIndex: number) => number) => {
        if (imgRef.current) {
            imgRef.current.style.opacity = "0.35";
        }
        setTimeout(() => setBannerIndex(func(bannerIndex)), 250);
    };

    useThemeColor();

    const handleResize = () => {
        let img: HTMLImageElement | null = imgRef.current;
        let container: HTMLDivElement | null = btnContainerRef.current;

        if (!img || !container) {
            return () => {};
        }
        container.style.top = (img.clientHeight - 32) / 2 + "px";
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    useEffect(() => {
        handleResize();

        const season = seasonRef.current;
        if (season) {
            season.style.top = -season.offsetHeight / 2 + 18 + "px";
        }

        if (imgRef.current) {
            imgRef.current.style.opacity = "1";
        }

        let ignore = false;
        setTimeout(() => {
            if (!ignore) {
                handleChangeImg(i => (i + 1) % 4);
            }
        }, 3000);

        return () => {ignore = true}
    }, [bannerIndex]);


    let bannerPath = (index: number) => `/src/assets/banner/banner${index}.png`;
    let seasonDescr: JSX.Element | undefined = undefined;
    switch (bannerIndex) {
        case 0:
            seasonDescr = <p className="m-0">The scent of spring invirogates her as she inhales whilst the warm breeze brings a wave of tranqility.</p>
            break;
        case 1:
            seasonDescr = (
                <>
                    <h2>Autumn Day</h2>
                    <p className="m-0">The sun peaks through the trees, a knife that cuts through the chill, crisp air.</p>
                </>
            )
            break;
        case 2:
            seasonDescr = (
                <>
                    <h3>Wind Chime</h3>
                    <p className="m-0">The bellweather of the sky, the chime speaks of impending turmoil.</p>
                </>
            )
            break;
        case 3:
            seasonDescr = <p className="m-0">Alone and Lonliness - Peace and Inner Struggle</p>
    }

    return (
        <header
            className={combineClassNames(
                props.className,
                "w-full"
            )}
            style={{
                ...props.style,
                backgroundColor: THEMES[LocalStorage.get("theme") as ThemeKey].toString()
            }}
        >
            <div 
                ref={btnContainerRef}
                className="relative z-10"
            >
                <section 
                    ref={seasonRef}
                    className="w-56 h-fit p-3 px-6 text-right font-bold text-lg text-white left-8 absolute bg-[#68400c] opacity-70"
                >
                    {seasonDescr}
                </section>
                <button
                    className="left-2 rounded-full absolute bg-[#00000000]"
                    onClick={() => handleChangeImg(i => (i - 1) < 0 ? 3 : i - 1)}
                >
                    <img 
                        className="w-8"
                        src="/src/assets/banner-arrows/left.gif" 
                    />
                </button>

                <button
                    className="right-2 rounded-full absolute bg-[#00000000]"
                    onClick={() => handleChangeImg(i => (i + 1) % 4)}
                >
                    <img
                        className="w-8"
                        src="/src/assets/banner-arrows/right.gif"
                    />
                </button>
            </div>
            <img 
                ref={imgRef}
                className="duration-300"
                src={bannerPath(bannerIndex)} 
                style={{opacity: 1}}
            />
        </header>
    );
});

export default Banner;
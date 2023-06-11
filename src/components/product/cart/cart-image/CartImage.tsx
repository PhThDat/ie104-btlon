import React from "react";
import { BaseProps } from "../../../../submodules/base-props/base-props";
import { Link } from "react-router-dom";
import { combineClassNames } from "../../../../submodules/string-processing/combine-classname";
import { MENU_OPTIONS, THEMES, ThemeKey } from "../../../../settings";
import useThemeColor from "../../../../hooks/useThemeColor";
import LocalStorage from "../../../../submodules/local-storage/local-storage";

interface Props extends BaseProps {
    menuOptionIndex?: number
}

const CartImage = React.memo((props: Props) => {
    useThemeColor();

    let index = props.menuOptionIndex ?? -1;
    const indices = index < 0 ?
        [ -1, -1, -1 ] :
        [
            index - 1 < 0 ? MENU_OPTIONS.length - 1 : index - 1,
            index,
            (index + 1) % MENU_OPTIONS.length
        ];
    
    const imgPaths = indices.map(index => `/src/assets/menu-options/${MENU_OPTIONS[index].codename}.jpg`)
    
    return (
        <div
            className={combineClassNames(
                props.className,
            )}
            style={{...props.style}}
        >
            <img 
                className="w-full border border-black shadow-[0px_0px_10px]"
                src={imgPaths[1]} 
            />
            <div
                style={{
                    backgroundColor: THEMES[LocalStorage.get("theme") as ThemeKey].toString()
                }}
            >
                <ul className="flex items-end m-auto w-9/12">
                    {imgPaths.map((path, i) => {
                        let index = indices[i];

                        return (
                            <li key={i} className="mb-1 mx-[0.1rem] mt-0 pb-1">
                                <Link 
                                    className="relative z-0 after:block after:bg-white after:h-1/3 after:z-[-1] after:w-full after:-bottom-1 after:absolute"
                                    to={`/menu/${MENU_OPTIONS[index].codename}`}
                                >
                                    <img 
                                        className="w-10/12 m-auto z-10" 
                                        src={path} 
                                    />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
});

export default CartImage;
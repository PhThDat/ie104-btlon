import React from "react";
import { BaseProps } from "../../../submodules/base-props/base-props";
import { combineClassNames } from "../../../submodules/string-processing/combine-classname";
import { Link } from "react-router-dom";

interface Props extends BaseProps {
    option?:{
        name: string,
        priceS: number,
        priceM: number,
        priceL: number,
        codename: string
    }
}

const MenuOptionCard = React.memo((props: Props) => {
    const info = props.option ? 
    {
        name: props.option.name,
        priceS: props.option.priceS.toFixed(1),
        priceM: props.option.priceM.toFixed(1),
        priceL: props.option.priceL.toFixed(1),
    } : 
    {
        name: "Drink",
        priceM: Number(0).toFixed(1),
        priceS: Number(0).toFixed(1),
        priceL: Number(0).toFixed(1)
    };

    return (
        <Link
            className={combineClassNames(
                props.className,
                "lg:p-3 m-2 lg:m-5 bg-white hover:text-inherit hover:scale-105 duration-100 border border-dashed border-[#68400c] shadow-[5px_5px_10px] shadow-[#68400c"
            )}
            style={{...props.style}}
            to={`/menu/${props.option?.codename}`}
        >
            <figure>
                <img src={`/src/assets/menu-options/${props.option?.codename}.jpg`} />
                <figcaption className="p-1 font-bold text-[0.78rem] bg-[#d7bc86]">
                    {info.name}: 
                    ${info.priceS}(S) - 
                    ${info.priceM}(M) - 
                    ${info.priceL}(L)
                </figcaption>
            </figure>
        </Link>
    );    
});

export default MenuOptionCard;
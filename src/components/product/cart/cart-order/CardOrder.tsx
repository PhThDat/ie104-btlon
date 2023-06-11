import React, { ChangeEvent, useState } from "react";
import { BaseProps } from "../../../../submodules/base-props/base-props";
import { combineClassNames } from "../../../../submodules/string-processing/combine-classname";
import { MENU_OPTIONS, THEMES, ThemeKey } from "../../../../settings";
import useThemeColor from "../../../../hooks/useThemeColor";
import LocalStorage from "../../../../submodules/local-storage/local-storage";

interface Props extends BaseProps {
    menuOptionIndex?: number
}

const CartOrder = React.memo((props: Props) => {
    useThemeColor();
    const [amount, setAmount] = useState(0);
    const [size, setSize] = useState<"s" | "m" | "l">("s");
    const product = MENU_OPTIONS[props.menuOptionIndex ?? -1];

    const handleClickBuy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        let singularPrice = 0;
        switch (size) {
            case "s": 
                singularPrice = product.priceS;
                break;
            case "m":
                singularPrice = product.priceM;
                break;
            case "l":
                singularPrice = product.priceL;
        }
        alert(`Your bill is \$${(amount * singularPrice).toFixed(1)}`);
    };

    const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
        let amt = Number(e.target.value);
        if (amt >= 0) {
            setAmount(amt);
        }
    };

    return (
        <form
            className={combineClassNames(
                props.className,
                "p-1 lg:p-2 m-auto text-sm font-medium text-black flex flex-col justify-center"
            )}
            style={{...props.style}}
        >
            <div className="flex">
                <input
                    type="number"
                    className="w-8 h-6 p-1 mr-1 mb-[0.1rem] border border-dashed border-black"
                    value={amount}
                    onChange={handleChangeAmount}
                />
                <select
                    className="w-20 h-6 p-1 bg-white border border-dashed border-black"
                    value={size}
                    onChange={(e) => {
                        setSize(e.target.value as "s" | "m" | "l")
                    }}
                >
                    <option value="s">{`\$${product.priceS.toFixed(1)} (S)`}</option>
                    <option value="m">{`\$${product.priceM.toFixed(1)} (M)`}</option>
                    <option value="l">{`\$${product.priceL.toFixed(1)} (L)`}</option>
                </select>
            </div>
            <button
                className="w-9 text-[#cca45c] border-2 border-gray-600"
                style={{
                    borderStyle: "outset",
                    backgroundColor: THEMES[LocalStorage.get("theme") as ThemeKey].toString()
                }}
                onClick={handleClickBuy}
            >
                Buy
            </button>
        </form>
    )
});

export default CartOrder;
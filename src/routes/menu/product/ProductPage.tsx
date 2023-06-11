import React from "react";
import { BasePropsPage } from "../../../submodules/base-props/base-props";
import PageLayout from "../../../components/layout/PageLayout";
import { useLoaderData } from "react-router-dom";
import CartImage from "../../../components/product/cart/cart-image/CartImage";
import { MENU_OPTIONS, PRODUCT_DETAILS } from "../../../settings";
import CartOrder from "../../../components/product/cart/cart-order/CardOrder";
import { boldString } from "../../../submodules/string-processing/bold-string";

interface Props extends BasePropsPage {}

const ProductPage: React.FC<Props> = React.memo((props) => {
    let codename = useLoaderData()

    const optionIndex = MENU_OPTIONS.findIndex(option => option.codename === codename);
    const detailIndex = PRODUCT_DETAILS.findIndex(prod => prod.codename === codename);

    let benAndEff = PRODUCT_DETAILS[detailIndex].benefitAndEffect;

    let name = MENU_OPTIONS[optionIndex].name;
    let capital = name.split(" ").map((word, index) => index === 0 ? word : word.toLowerCase()).join(" ");
    benAndEff = benAndEff === "" ? 
        `<b>${capital}</b> is delicious!` : 
        boldString(benAndEff, name.toLowerCase(), capital);

    return (
        <PageLayout
            id={props.id}
            className={props.className}
            style={props.style}
            title={MENU_OPTIONS[optionIndex].name}
        >
            <div className="flex mt-8 mb-5">
                <CartImage className="w-8/12" menuOptionIndex={optionIndex} />
                <CartOrder menuOptionIndex={optionIndex} />
            </div>
            <h2
                className="w-full text-lg p-2 my-3 font-bold bg-[#cca45c] border-dashed border-y border-[#68400c]"
            >
                Benefits & Effects
            </h2>
            <p 
                className="whitespace-pre-line"
                dangerouslySetInnerHTML={{__html: benAndEff}}
            />
            {props.children}
        </PageLayout>
    );
});

export default ProductPage;
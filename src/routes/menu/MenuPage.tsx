import React from "react";
import { BasePropsPage } from "../../submodules/base-props/base-props";
import PageLayout from "../../components/layout/PageLayout";
import MenuOptionCard from "../../components/product/card/MenuOptionCard";
import { MENU_OPTIONS } from "../../settings";

interface Props extends BasePropsPage {}

const MenuPage: React.FC<Props> = React.memo((props) => {
    return (
        <PageLayout
            {...props}
            title="Menu"
        >
            <div className="grid grid-cols-2">
                {MENU_OPTIONS.map((option, i) => <MenuOptionCard key={i} option={option} />)} 
            </div>
        </PageLayout>
    );
});

export default MenuPage;
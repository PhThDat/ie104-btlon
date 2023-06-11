import React from "react";
import { BasePropsPage } from "../../submodules/base-props/base-props";
import { combineClassNames } from "../../submodules/string-processing/combine-classname";

interface LayoutProps extends BasePropsPage {
    title?: string
}

const PageLayout: React.FC<LayoutProps> = React.memo((props) => {
    return (
        <div
            id={props.id}
            className={combineClassNames(
                props.className,
                "w-full p-3 text-[#68400c]"
            )}
            style={{...props.style}}
        >
            <h1
                className="w-full text-lg p-3 my-3 font-bold bg-[#cca45c] border-dashed border-y border-[#68400c]"
            >
                {props.title ?? "Page"}
            </h1> 
            {props.children}
        </div>
    );
});

export default PageLayout;
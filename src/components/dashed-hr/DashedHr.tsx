import React from "react";
import { BaseProps } from "../../submodules/base-props/base-props";
import { combineClassNames } from "../../submodules/string-processing/combine-classname";

interface Props extends BaseProps {}

const DashedHr = React.memo((props: Props) => {
    return (
        <hr 
            className={combineClassNames(
                props.className,
                "border-dashed border-black"
            )}
            style={{...props.style}}
        />
    )
});

export default DashedHr;
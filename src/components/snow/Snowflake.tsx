import React, { ForwardedRef, forwardRef, useImperativeHandle, useRef } from "react";
import { BaseProps } from "../../submodules/base-props/base-props";
import { combineClassNames } from "../../submodules/string-processing/combine-classname";
import RefSnowflake from "../../submodules/ref-interfaces/ref-snowflake";

interface Props extends BaseProps {}

const Snowflake = (props: Props, ref?: ForwardedRef<RefSnowflake>) => {
    const selfRef = useRef<HTMLImageElement>(null);

    useImperativeHandle(ref, () => ({
        fall: () => {
            selfRef.current?.
        },
    }));

    return (
        <img 
            ref={selfRef}
            className={combineClassNames(
                props.className,
                "pointer-events-none select-none"
            )}
            style={{...props.style}}
            src="/src/assets/snow/snow.gif" 
        />
    );
};

export default React.memo(forwardRef(Snowflake));
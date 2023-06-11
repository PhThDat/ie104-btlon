import React, { useEffect, useRef } from "react";
import { BaseProps } from "../../submodules/base-props/base-props";
import Snowflake from "./Snowflake";
import { snowDensity } from "../../snow-setting";
import { combineClassNames } from "../../submodules/string-processing/combine-classname";

interface Props extends BaseProps {}

const SnowContainer = React.memo((props: Props) => {
    const snowflakes = Array.from(
        { length: snowDensity },
        () => useRef<
    )
    useEffect(() => {
        const sf = snowflakes.current;
        if (sf) {
            sf.forEach((s, i) => s.)
        }
    }, []);

    return (
        <div
            className={combineClassNames(
                props.className,
                "top-0 left-0 absolute"
            )}
        >
            <Snowflake />
        </div>
    );
});

export default SnowContainer;
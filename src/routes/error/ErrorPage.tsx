import React from "react";
import { BasePropsPage } from "../../submodules/base-props/base-props";
import { combineClassNames } from "../../submodules/string-processing/combine-classname";
import { Link, useRouteError } from "react-router-dom";

interface Props extends BasePropsPage {}

const ErrorPage: React.FC<Props> = React.memo((props) => {
    const error:any = useRouteError();

    return (
        <div 
            className={combineClassNames(
                props.className,
                "h-screen w-screen text-[#cca45c] flex flex-col items-center justify-center bg-orange-100"
            )}
            style={{...props.style}}
        >
            <h1 className="text-4xl font-bold text-[#68400c]">Oops!</h1>
            <p className="text-xl">Something wrong has occured</p>
            <p className="text-base">{error.statusText || error.message}</p>
            {props.children}
            <p className="text-[#68400c] text-base flex flex-col items-center">
                <span>Our available sites:</span>
                <br />
                <div>
                    <Link to="/">Home</Link> | 
                    <Link to="/about"> About</Link> | 
                    <Link to="/location"> Location</Link> | 
                    <Link to="/menu"> Menu</Link> | 
                    <Link to="/contact"> Contact</Link>
                </div>
            </p>
        </div>

    );
});

export default ErrorPage;
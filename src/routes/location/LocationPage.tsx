import React, { useEffect, useRef } from "react";
import { BasePropsPage } from "../../submodules/base-props/base-props";
import PageLayout from "../../components/layout/PageLayout";

interface Props extends BasePropsPage {}

const Location: React.FC<Props> = React.memo((props) => {
    return (
        <PageLayout
            {...props}
            title="Somewhere Coffee Shop Location"
        >
            <p>
                We are conveniently located in lower manhattan with plans to expand into Brooklyn in 2013292 Union Square West at 13th St. New York, New York 10003
                <br />
                Telephone: 212.555.5555
            </p>
            <h2 className="text-lg font-bold">
                Takeout Available | Delivery Available
            </h2>
            <p>
                Delivery Payment: $12 minimum Delivery Hours: Daily, 10am-midnight
                <br />
                Delivery Area: 8th St. to 26th St., Second Ave. to Seventh Ave.
            </p>
            <div
                className="relative w-full h-96 flex items-center justify-center"
            >
                <img
                    className="absolute -z-10"
                    src="./src/assets/loading/ajaxload.gif" 
                />
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1091.4757905955623!2d106.66370583002598!3d10.783378018502765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ece2f381b6f%3A0x686df1ce3ba0ef3d!2sSomewHERE%20Cafe!5e0!3m2!1svi!2s!4v1684048194069!5m2!1svi!2s" 
                    className="w-full h-full"
                    style={{border: 0}} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                />
            </div>
        </PageLayout>
    );
});

export default Location;
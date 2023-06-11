import React from "react";
import { BasePropsPage } from "../../submodules/base-props/base-props";
import PageLayout from "../../components/layout/PageLayout";

interface Props extends BasePropsPage {}

const HomePage: React.FC<Props> = React.memo((props) => {
    return (
        <PageLayout
            {...props}
            title="Welcome To Our Coffee Shop"
        >
            <p>
                Bringing you the best coffee flavors from around the world, we specialize in organic home grown
                coffee in our quaint little mainstreet shop. Stay a while and relax in our coffee house atmosphere
                as you sip a fresh Kona blend from your mug and enjoy a summer breeze. Come sit on our comfy
                couches and curl up with some chamomile tea. Get lost in a book or grab an expresse to go on
                your way to the office.
                <br />
                Whatever your coffee conundrum commands, find it at Somewhere.
            </p>
            <li className="my-2 flex justify-between w-full h-20">
                <ul 
                    className="w-[32%] overflow-hidden"
                >
                    <img className="h-full" src="./src/assets/banner/banner1.png" />
                </ul>
                <ul
                    className="w-[32%] overflow-hidden"
                >
                    <img className="h-full" src="./src/assets/banner/banner2.png" />
                </ul>
                <ul
                    className="w-[32%] overflow-hidden"
                >
                    <img className="h-full" src="./src/assets/banner/banner3.png" />
                </ul>
            </li>
            <h2 className="text-lg font-bold">
                NEW Maui Wauwi Blends!
            </h2>
            <p className="m-0">
                Straight from the sun drenched fields of Hawaii, we are proud to bring you the very best. Our new
                Maui Wauwi blend combines the subtle Sumatra aroma with the bold taste of Kona in one single
                satisfying cup. For a limited time only.
            </p>
        </PageLayout>
    )
});

export default HomePage;
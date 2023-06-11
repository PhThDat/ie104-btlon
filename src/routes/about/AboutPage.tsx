import React from "react";
import { BasePropsPage } from "../../submodules/base-props/base-props";
import PageLayout from "../../components/layout/PageLayout";

interface Props extends BasePropsPage {}

const About: React.FC<Props> = React.memo((props) => {
    return (
        <PageLayout
            {...props}
            title="About Somewhere Coffee Shop"
        >
            <p>
                <strong>Somewhere Coffee Co.</strong> began as a small coffee cart on the corner of 28th and 3rd street. As the
                lines began to grow, we thought "why not open a coffee shop?" and expanded into our current
                location. The rest is Somewhere in history. We have been in the coffee business for 8 years and
                are masters at our craft. We select only the finest beans to go into our blends and strive for
                excellence in customer satisfaction. We offer quiet nooks for sipping and reading your favorite
                book, catching up with old friends or simply enjoying a cup outside and watching the world go by.
                <br />
                Whatever your coffee conundrum commands, find it at Somewhere.
            </p>
            <p><strong>NEW Maui Wauwi Blends!</strong></p>
            <p>
                Straight from the sun drenched fields of Hawaii, we are proud to bring you the very best. Our new
                Maui Wauwi blend combines the subtle Sumatra aroma with the bold taste of Kona in one single
                satisfying cup. For a limited time only.
            </p>
            <img src="/src/assets/cafe-breve.jpg" />
        </PageLayout>
    );
});

export default About;
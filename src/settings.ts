import { HSLA } from "./submodules/color/hsla";

export type ThemeKey = "brown" | "green" | "pink";
export const THEMES = {
    brown: new HSLA(30, 98, 16, 1),
    green: new HSLA(85, 93, 21, 1),
    pink: new HSLA(333, 62, 49, 1)
};

export type BackgroundKey = "Light Brown" | "Native Brown" | "Dark Brown";
export const BACKGROUNDS = {
    "Light Brown": 0.6,
    "Native Brown": 0.7,
    "Dark Brown": 0.9
};

export const PRODUCT_DETAILS: {
    codename: string,

    benefitAndEffect: string
}[] = [
    {
        codename: "black-coffee",
        benefitAndEffect: "You may love your black coffee in the morning to help you feel energized and get ready for the day, but how much do you know about it? Do you know how drinking black coffee affects your body and your mind? Are you aware of the benefits of black coffee and its side effects?\nBlack coffee is simply coffee that is normally brewed without the addition of additives such as sugar, milk, cream, or added flavors. While it has a slightly bitter taste compared to when it is flavored with additives, many people love a strong cup of black coffee. In fact, for some, it is part of their everyday diet.\nIn this article, we talk about the benefits of drinking black coffee, how it can help you in losing weight, potential side effects, as well as how to make the perfect cup of black coffee."
    },
    {
        codename: "cafe-breve",
        benefitAndEffect: ""
    },
    {
        codename: "espresso-coffee",
        benefitAndEffect: ""
    },
    {
        codename: "hot-chocolate",
        benefitAndEffect: ""
    },
    {
        codename: "milk-coffee",
        benefitAndEffect: ""
    },
    {
        codename: "vanilla-latte",
        benefitAndEffect: ""
    }
];

export const MENU_OPTIONS: {
    name: string,
    priceS: number,
    priceM: number,
    priceL: number
    codename: string
}[] = [
    {
        name: "Black Coffee",
        priceS: 2,
        priceM: 2.5,
        priceL: 3,
        codename: "black-coffee"
    },
    {
        name: "Cafe Breve",
        priceS: 2.5,
        priceM: 3,
        priceL: 3.5,
        codename: "cafe-breve"
    },
    {
        name: "Espresso Coffee",
        priceS: 1.5,
        priceM: 2,
        priceL: 2.5,
        codename: "espresso-coffee"
    },
    {
        name: "Hot Chocolate",
        priceS: 2.5,
        priceM: 3,
        priceL: 3.5,
        codename: "hot-chocolate"
    },
    {
        name: "Milk Coffee",
        priceS: 1.5,
        priceM: 2,
        priceL: 2.5,
        codename: "milk-coffee"
    },
    {
        name: "Vanilla Latte",
        priceS: 2,
        priceM: 2.5,
        priceL: 3,
        codename: "vanilla-latte"
    }
]
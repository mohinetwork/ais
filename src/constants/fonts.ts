import { Plus_Jakarta_Sans, Caveat, Syne } from "next/font/google";

export const heading = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-heading",
    weight: ["300", "400", "500", "600", "700", "800"],
});

export const base = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-base",
});

export const handwriting = Caveat({
    subsets: ["latin"],
    variable: "--font-handwriting",
    weight: ["400", "500", "600", "700"],
});

export const display = Syne({
    subsets: ["latin"],
    variable: "--font-display",
    weight: ["400", "500", "600", "700", "800"],
});

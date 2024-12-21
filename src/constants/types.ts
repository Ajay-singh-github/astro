export type MProps = "Marriage" | "Vehicle" | "Annanprashan" | "Namkaran" | "Mundan" | "GrihaPravesh";

export type MonthProps = "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec" | "all"

export type MonthKeys =
    | "Jan"
    | "Feb"
    | "Mar"
    | "Apr"
    | "May"
    | "Jun"
    | "Jul"
    | "Aug"
    | "Sep"
    | "Oct"
    | "Nov"
    | "Dec";

export type NumerologyData = {
    radical_number: number;
    radical_ruler: string;
    characteristics: string[];
    fav_color: string;
    fav_day: string;
    fav_god: string;
    fav_mantra: string;
    fav_metal: string;
    fav_stone: string;
    fav_substone: string;
    friendly_num: string;
    evil_num: string;
    neutral_num: string;
    destiny: number;
    name_number: number;
    date_considered: string;
}

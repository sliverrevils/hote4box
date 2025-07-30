export type IUserItemProps = {
    name: string;
    path: string;
    ico: string;
    ico2: string;
    size: number;
};

//type IMenuKeys = "orders" | "accounts" | "branches" | "tracking" | "profile" | "exit";

const menu = {
    orders: {
        name: "Мои заказы",
        path: "/user/orders",
        ico: "/ico/orders.svg",
        ico2: "/ico/orders_blue.svg",
        size: 24,
    },
    accounts: {
        name: "Счета",
        path: "/user/accounts",
        ico: "/ico/accounts.svg",
        ico2: "/ico/accounts_blue.svg",
        size: 24,
    },
    branches: {
        name: "Отделения",
        path: "/user/branches",
        ico: "/ico/branches.svg",
        ico2: "/ico/branches_blue.svg",
        size: 24,
    },
    tracking: {
        name: "Отследить посылку ",
        path: "/user/tracking",
        ico: "/ico/tracking.svg",
        ico2: "/ico/tracking_blue.svg",
        size: 24,
    },
    profile: {
        name: "Мой профиль",
        path: "/user/profile",
        ico: "/ico/profile.svg",
        ico2: "/ico/profile_blue.svg",
        size: 24,
    },
    exit: {
        name: "Выйти",
        path: "/",
        ico: "/ico/exit.svg",
        ico2: "/ico/exit_blue.svg",
        size: 24,
    },
    personal: {
        name: "Персональная информация",
        path: "/user/profile/personal",
        ico: "",
        ico2: "",
        size: 0,
    },
    adress: {
        name: "Адресная книга",
        path: "/user/profile/adress",
        ico: "",
        ico2: "",
        size: 0,
    },
    payment: {
        name: "Платежный профиль",
        path: "/user/profile/payment",
        ico: "",
        ico2: "",
        size: 0,
    },
    history: {
        name: "История баллов",
        path: "/user/profile/history",
        ico: "",
        ico2: "",
        size: 0,
    },
} as const;
type IMenuKeys = keyof typeof menu;

type IUserMenu = Record<IMenuKeys, IUserItemProps>;

export const MENU = menu as IUserMenu;

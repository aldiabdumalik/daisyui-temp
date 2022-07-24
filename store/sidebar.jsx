import { selector } from "recoil";

const list = [
    { name: "Overview", icon: "user" },
    { name: "Products", icon: "user" },
    { name: "Analytics", icon: "user" },
    { name: "Schedule", icon: "user" },
    { name: "Payout", icon: "user" },
    { name: "Statements", icon: "user" },
];

const listSidebar = selector({
    key: new Date().toString(),
    get: ({get}) => {
        return list;
    }
})

export { listSidebar }
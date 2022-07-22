import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function ListSidebar() {
    const sidebar = [
        { name: "Overview", icon: <FontAwesomeIcon icon={solid('user')} size="lg" /> },
        { name: "Products", icon: <FontAwesomeIcon icon={solid('user')} size="lg" /> },
        { name: "Analytics", icon: <FontAwesomeIcon icon={solid('user')} size="lg" /> },
        { name: "Schedule", icon: <FontAwesomeIcon icon={solid('user')} size="lg" /> },
        { name: "Payout", icon: <FontAwesomeIcon icon={solid('user')} size="lg" /> },
        { name: "Statements", icon: <FontAwesomeIcon icon={solid('user')} size="lg" /> },
    ];
    return sidebar;
}
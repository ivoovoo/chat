import React from "react";
import {Link} from "react-router-dom";
import Sprite from "../../../shared/ui/Sprite/Sprite";
import {classNames} from "../../../shared/lib/classNames/classNames";

const NavItem = ({ icon, valueFirst, valueSecond, active, ...other}) => {
    return (
        <Link className={classNames("header__link", [], {active})}  {...other}>
            {active ? valueSecond : valueFirst}
            <Sprite icon={icon} width={24} height={24}/>
        </Link>
    );
};

export default NavItem;

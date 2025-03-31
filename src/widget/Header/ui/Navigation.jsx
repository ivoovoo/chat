import React from "react";
import NavItem from "./NavItem";

const Navigation = () => {
    const [links, setLinks] = React.useState([
        {icon: 'lightning', valueFirst: 'Upgrade Plan',valueSecond:'Max Plan', to: '/', active: true},
        {icon: 'help-circle', valueFirst: 'Help', valueSecond:'ainowgo@gmail.com', to: '/'},
        {icon: 'link-angled', valueFirst: 'API', valueSecond:'ainowgo@gmail.com', to: '/'}
    ]);

    const handleClick = (i) => {
        const newLinks =  links.map((link, index) => {
            if(i === index) link.active = true;
            else link.active = false
            return link;
        })

        setLinks(newLinks);
    }
    return (
        <nav className="header__nav">

            {links.map((link, index) => (<NavItem to={link.to} icon={link.icon} valueSecond={link.valueSecond}
                                         valueFirst={link.valueFirst} active={link.active}
                                         onClick={() => handleClick(index)}
            />))}

        </nav>
    );
};

export default Navigation;

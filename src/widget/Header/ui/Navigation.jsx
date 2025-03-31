import React from "react";
import NavItem from "./NavItem";

const Navigation = () => {
    const [links, setLinks] = React.useState([
        {
            icon: 'lightning',
            activeValue: 'Upgrade Plan',
            valueFirst: 'Upgrade Plan',
            valueSecond: 'Max Plan',
            to: '/',
            active: true
        },
        {icon: 'help-circle', activeValue: 'Help', valueFirst: 'Help', valueSecond: 'ainowgo@gmail.com', to: '/'},
        {icon: 'link-angled', activeValue: 'API', valueFirst: 'API', valueSecond: 'ainowgo@gmail.com', to: '/'}
    ]);

    const handleClick = (i) => {
        const newLinks = links.map((link, index) => {
            if (i === index) {
                link.activeValue = link.valueSecond;
                link.active = true
            } else {
                link.activeValue = link.valueFirst;
                link.active = false
            }
            return link;
        })

        if (i > 0) {
            setTimeout(() => {

                const activeItem =
                    newLinks.find(link => link.active);
                activeItem.activeValue = activeItem.valueFirst;
                console.log(activeItem);
                setLinks([...newLinks]);
            }, 2000)
        }
        setLinks(newLinks);
    }
    return (
        <nav className="header__nav">

            {links.map((link, index) => (<NavItem to={link.to} icon={link.icon}
                                                  activeValue={link.activeValue} active={link.active}
                                                  onClick={() => handleClick(index)}
            />))}

        </nav>
    );
};

export default Navigation;

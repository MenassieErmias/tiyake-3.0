export default function HeaderNav({loggedIn}){


    // Arrays to make Header Navigation Dynamic
    const navItemsDefault = [
        {
            label: 'Home',
            link: '/'
        },
        {
            label: 'About Us',
            link: '#about-us'
        },
        {
            label: 'Contact',
            link: '#Contact'
        },
        {
            label: 'Login',
            link: '/login'
        },
        {
            label: 'Sign Up',
            link: '/sign-up'
        },
    ]
    const navItemsLoggedIn = [
        {
            label: 'Home',
            link: '/'
        },
        {
            label: 'About Us',
            link: '#about-us'
        },
        {
            label: 'Contact',
            link: '#contact'
        },
        {
            label: 'Sign out',
            link: '/login'
        }
    ]

    
    // Mapping Nav Items Array

    const navItemsDefaultListItems = navItemsDefault.map( (navItem, index) => {
        return (
            <li className="nav--item" key={index}>
                <a className="nav--link" href={navItem.link}>
                    {navItem.label}
                </a>
            </li>
        )
    } )

    const navItemsLoggedInListItems = navItemsLoggedIn.map( (navItem, index) => {
        return (
            <li className="nav--item" key={index}>
                <a className="nav--link" href={navItem.link}>
                    {navItem.label}
                </a>
            </li>
        )
    } )



    return(
        <nav className="nav--container">
            <div className="nav--logo">
                <img src="https://placehold.co/600x400" height={'auto'} width={'50'} />
                <h1 className="nav--title">Tiyake.</h1>
            </div>
            <ul className="nav--items">
                { loggedIn ? navItemsLoggedInListItems : navItemsDefaultListItems }
            </ul>
        </nav>
    )
}
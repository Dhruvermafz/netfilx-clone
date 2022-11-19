import './Nav.css'
const Nav = () =>{
    return <nav>
        <section>
            <div className="nav_left">
                   <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" 
                   alt="logo" 
                   className="nav_logo"/>
                   <div className="nav_links">
                    <a href="/">Home</a>
                    <a href="/">TV Shows</a>
                    <a href="/">TV Movies</a>
                    <a href="/">New & Popular</a>
                    <a href="/">My List</a>
                    <a href="/">Browse by Languages</a>
                   </div>
            </div>
            <div className="nev_right">
                <svg 
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='https://www.w3.org/2000/svg' className='search-icon'>
                   <path
                   fillRule='evenodd'
                   clipRule='evenodd'
                   d='M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20 '
                   fill='currentColor'></path>
                </svg>
            </div>
        </section>
    </nav>
}

export default Nav
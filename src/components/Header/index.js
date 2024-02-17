import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

import './index.css';

const Header=()=>{

    return(
        <>
        <nav className='header-container fixed-top'>
            <div className='title-header'>
              <h3 className='title'>T A N N <span className='title-span'>T R I M</span></h3>
              <div className='icons'>
                <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} style={{color: "#E5DFD9",}} />
                <FontAwesomeIcon className="icon" icon={faUser} style={{color: "#E5DFD9",}} />
                <FontAwesomeIcon className="icon" icon={faBookmark} style={{color: "#E5DFD9",}} />
                <FontAwesomeIcon className="icon" icon={faBagShopping} style={{color: "#E5DFD9",}} />
              </div>
            </div>
            <div className='products-headings'>
                <p className='product-heading'>Bags</p>
                <p className='product-heading'>Travel</p>
                <p className='product-heading'>Accesories</p>
                <p className='product-heading'>Gifting</p>
                <p className='product-heading'>Jewelery</p>
            </div>
        </nav>
        </>
    )

}
export default Header;
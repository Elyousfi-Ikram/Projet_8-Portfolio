import img from '../../asset/pc-portable.webp'

import './header.scss';

function Header() {
    return (
        <div id='header'>
            <img src={img} className='img-header' alt='image' />
            <div className='text'>
            <p>EL YOUSFI Ikram</p>
            <p>- Développeuse WEB -</p>
            </div>
        </div>

    )
}

export default Header;
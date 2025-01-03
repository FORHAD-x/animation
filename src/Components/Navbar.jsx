import { Link } from 'react-router-dom'
import logo from '../../public/images/logo.png'
const Navbar = () => {
  return (
    <>
    <nav className='pt-[63px] absolute top-0 left-0 z-10 w-full'>
      <div className='container'>
          <div className="menu_row flex justify-between items-center">
              <div className="menu_img"><img src={logo} alt="logo" /></div>
              <ul className='flex gap-[30px] font-ABeeZee text-[22px] text-black font-normal'>
                <li><Link to={'#'}>All Recipes</Link></li>
                <li><Link to={'#'}>Vegan</Link></li>
                <li><Link to={'#'}>Gluten-Free</Link></li>
                <li><Link to={'#'}>Shop</Link></li>
              </ul>
          </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
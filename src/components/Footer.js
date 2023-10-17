import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid footer'>

      <ul className=' navbar-nav d-flex flex-row  justify-content-center '>
        <li className='nav-item px-3 text-muted text-sm fw-info icon-link-hover link-info'>
          <a className='nav-link' href="https://www.facebook.com/MPEDAIndia">Facebook</a>
        </li>
        <li className='nav-item px-3 text-muted fw-info  icon-link-hover link-info'>
          <a  className='nav-link' href="https://twitter.com/MPEDACOCHIN">Twitter</a>

        </li>
        <li className='nav-item px-3 text-muted fw-info  icon-link-hover link-info'>
          <a  className='nav-link' href="https://www.youtube.com/channel/UC_yViTri65_fU246jqD07uA">Youtube</a>

        </li>
        <li className='nav-item px-3 text-muted fw-info  icon-link-hover link-info'>
          <a  className='nav-link' href="https://www.instagram.com/mpedaofficial/">Instagram</a>

        </li>
      </ul>
       
    </div>
  )
}

export default Footer
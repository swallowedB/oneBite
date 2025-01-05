import { memo } from 'react';
import './Header.css'

// eslint-disable-next-line react-refresh/only-export-components
const Header = () =>{
  return (
    <div className='Header'>
      <h3>오늘은 ☀</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  )
}

const memoizedHeader = memo(Header);

export default memoizedHeader;
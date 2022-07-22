import reactLogo from '../logo.svg';

export const ReactLogo = () => {
  return (
    <img 
        src={reactLogo} 
        alt="React Logo"
        draggable="false"
        style={{ 
            position: 'fixed',
            right: '20px',
            bottom: '20px',   
            width: '80px',
            height: '80px', 
        }}
     />
  )
}

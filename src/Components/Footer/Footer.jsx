import Nav from 'react-bootstrap/Nav'

const Footer = ({ children }) => {
  return (
    <div style={{display:"flex" ,height:"10vh", width:"100%", backgroundColor:"#2f6364", alignContent:"center", justifyContent:"center"}}>
      {children}
      <p style={{fontWeight:"bolder", color:"whitesmoke"}}>&copy; Julio García</p>
    </div>
  );
};

export default Footer;

import logoFooter from '../assets/LOGO2.svg'

function Footer() {

    return (
        <>
            <div className="footer">
                <img src={logoFooter} alt="Logo de Kasa" />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </>
    )
  }
  
  export default Footer;
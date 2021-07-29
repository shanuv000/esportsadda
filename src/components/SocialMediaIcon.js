import FacebookIcon from '@material-ui/icons/Facebook';
import Icon from '@material-ui/core/Icon';

const socialMediaIcon = (props) => {
    const facebook = <i className="fab fa-facebook-f"
                        style={{color: '#4267B2'}}/>;
    const instagram = <i className="fab fa-instagram" style={{color: '#fbad50'}}/>;
    const twitter = <i className="fab fa-twitter" style={{color: '#1DA1F2'}}/>;
    const discord = <i className="fab fa-discord" style={{color: '#7289d9'}}/>;
    const whatsapp = <i className="fab fa-whatsapp" style={{color: '#25D366'}}/>;
    const message = 'Hello There Join BGMI, COD TOURNAMENT AND WIN REAL MONEY INSTANTLY. Visit here:' +
        ' https//:www.gurucool.tech/';
    const whatsappLink = `https://wa.me/+916299146615?text=${message}`;
    return <>

        <div className={`d-flex justify-content-around ${props.backColor}`}>
            <div>
                <a
                    rel="noreferrer"
                    target={'_blank'} href="https://www.fb.com"><h1>{facebook}</h1></a>
            </div>
            <div><a rel="noreferrer" target={'_blank'} href="https://www.instagram.com"><h1>{instagram}</h1></a></div>
            <div><a rel="noreferrer" target={'_blank'} href="https://www.twitter.com"><h1>{twitter}</h1></a></div>
            <div><a rel="noreferrer" target={'_blank'} href="https://www.discord.com"><h1>{discord}</h1></a></div>
            <div><a rel="noreferrer" target={'_blank'} href={whatsappLink}><h1>{whatsapp}</h1></a></div>
        </div>


    </>
}
export default socialMediaIcon;
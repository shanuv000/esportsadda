import SocialMediaIcon from '../components/SocialMediaIcon';
import CopyWeb from "../components/copyWeb";

const contact = () => {
    return <>
        <div className="container-fluid bg-dark p-4 ">
        <CopyWeb/>


            <div className="row">
                <div className="col-sm-6">
                    <iframe src="https://discordapp.com/widget?id=866894226594856979&theme=dark" width="100%"
                            height="500"
                            allowTransparency="true" frameBorder="0"
                            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"/>
                </div>
                <div className="col-sm-6">


                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d534.863031198677!2d85.1827738354624!3d25.60108647489911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58b386312ae7%3A0x8d693044dcf34f4e!2sVachaspati%20Nagar%2C%20Sandalpur%2C%20Patna%2C%20Bihar%20800004!5e0!3m2!1sen!2sin!4v1626752611363!5m2!1sen!2sin"
                        width="100%" height="500" style={{border: '0'}} allowFullScreen="" loading="lazy"/>
                </div>
            </div>


        </div>
    </>
}
export default contact;
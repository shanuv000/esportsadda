const WalletCard =(props)=>{
    const walletImage ='https://images.pexels.com/photos/929288/pexels-photo-929288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
    return <>
        <div className="card" style={{width: "100%"}}>
            <img className="card-img-top" src={walletImage} alt="Card  cap"/>
                <div className="card-body">
                    <h1 className="card-text">Coin : {props.coin}</h1>
                </div>
        </div>
        </>
};
export default WalletCard;
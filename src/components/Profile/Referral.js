import {useContext, useState} from "react";
import {FireContext} from "../Firecontext";

const Referral = (props) => {
    const {newUserCollection, refNewUser} = useContext(FireContext);
    const [checkReferralInput, setCheckReferralInput] = useState('');
    const currentId = props.currentId;
    const currentIdCoin = props.coin;
    const referralValidation = props.referralValidation;
    const referralValidator = () => {
        let prevOwner = '';
        let referralMatched = false;
        let prevCoin = '';
        newUserCollection.filter((e) => e.referral === checkReferralInput)
            .map((s) => {
                prevOwner = s.id;
                prevCoin = +s.coin;
                referralMatched = true;
            });
        // console.log(referralMatched);

        if (referralMatched) {
            const currentUserRefCoin = 30;
            const prevUserRefCoin = 70;
            const updatedPrevUserCoin = prevUserRefCoin + prevCoin
            const updatedCurrentUserCoin = currentUserRefCoin + currentIdCoin;

            //For Prev Referral Owner
            const prevupdaterefferalValidation = {coin: updatedPrevUserCoin};
            refNewUser
                .doc(prevOwner)
                .update(prevupdaterefferalValidation)
                .catch((err) => {
                    console.log(err);
                });

            //For Current Referral Owner
            const CurrentupdaterefferalValidation = {coin: updatedCurrentUserCoin, referralValidation: 1};
            refNewUser
                .doc(currentId)
                .update(CurrentupdaterefferalValidation)
                .catch((err) => {
                    console.log(err);
                });
        }

        // const inputForms = if(){}


    }
    const x = referralValidation === 0 ?
        <input type="name" onChange={e => setCheckReferralInput(e.target.value)} className="form-control mt-2"
               placeholder="Enter Friend's Referral Key"/>: null;
    const y = referralValidation === 0 ?
        <button onClick={referralValidator} className={'btn btn-primary mt-3'}>Submit</button> : null;

    return <>
        <h1>
            Your Referral: {props.referral}
        </h1>

        {x}
        {y}

    </>
}
export default Referral;
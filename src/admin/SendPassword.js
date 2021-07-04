import React,{useContext,useState} from 'react';
import { FireContext } from "../components/Firecontext";

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
export const sendMessageToUser=(currentUser,pubg,user)=>{
    const items=[{}];
    const currentUserID = currentUser?currentUser.uid:null;
    let bgmiUser=null;
    let bgmiPassword=null;
    let bgmigameId=null;

    pubg.map((pubg)=>{
        user.map((user)=>{

            if(user.owner.includes(currentUserID)&&user.gameId.includes(pubg.gameId)){
                if(pubg.match_condition===1){
                    bgmiUser=      pubg.bgmiUserName;
                    bgmiPassword=  pubg.bgmiUserPassword;
                    bgmigameId= pubg.gameId;
                        items.push({"room":bgmiUser,"password":bgmiPassword,"gameIds":bgmigameId,'time':pubg.selectedDate});
                }
            }
        })
    })
return items;
}


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    }, root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default function SimpleSelect() {
    const { pubg,ref,currentUser,user } = useContext(FireContext);
    const classes = useStyles();
    const [bgmiId, setBgmiId] = useState('');
const [gameName,setGameName]=useState('');
    const [gamePassword,setGamePassword]=useState('');
const handleDisableButton = (gameName===''||gamePassword==='');
const handleDisableInput=(bgmiId==='');
const handleChange = (event) => {
        setBgmiId(event.target.value);
        /////
    resetInput();

};
    const handleUpdateGameMessage=()=>{
        const updateGameUserAndPass = { bgmiUserName:gameName,bgmiUserPassword:gamePassword};
        ref
            .doc(bgmiId.id)
            .update(updateGameUserAndPass)
            .catch((err) => {
                console.log(err);
            });
        resetInput();
    }
const resetInput=()=>{setGameName('');setGamePassword('');}

    return (
        <>
        <div>
            <FormControl className={classes.formControl}>

                    <Select
                        value={bgmiId}
                        onChange={handleChange}
                        displayEmpty
                        className={classes.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="" disabled>
                            Upcoming Game Id
                        </MenuItem>
                        {pubg.map((pubg)=>{
                        let print=false;
                        print=pubg.match_condition===1;

                        return (!!print)?<MenuItem value={pubg}>{pubg.gameId}</MenuItem>:null;

                        })}

                    </Select>

            </FormControl>
            <div className={classes.root}>
                <TextField id="outlined-basic" label={bgmiId.gameId}
                           onChange={(e)=>setGameName(e.target.value)}
                           variant="outlined"
                disabled={handleDisableInput}
                />
                <TextField id="outlined-basic"
                           label={'password'}
                           onChange={(e)=>setGamePassword(e.target.value)}
                           variant="outlined" disabled={handleDisableInput}/>
                <button className={`btn btn-lg btn-outline-${handleDisableButton?"danger":'success'}`} disabled={handleDisableButton} onClick={handleUpdateGameMessage}>Publish</button>
            </div>

        </div>
        <div className="container ">
            <h1 className={'text-danger text-center'}>{bgmiId.id}</h1>
            <h1 className={'text-info text-center'}>{bgmiId.gameId}</h1>
            <h1 className={'text-dark text-center'}>User: {bgmiId.bgmiUserName}</h1>
            <h1 className={'text-dark text-center'}>Password:{bgmiId.bgmiUserPassword}</h1>
        </div></>
    );
}

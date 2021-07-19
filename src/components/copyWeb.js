import {useState} from 'react';

const CopyWeb = () => {
    const [copied, setCopied] = useState(false);

    const copy=()=> {
        const el = document.createElement("input");
        el.value = window.location.href;
        el.value = 'https://www.gurucool.tech/';
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setCopied(true);
    }

    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-6"><input type="text" className={'form-control border border-rounded'}
                                                 value={'https://www.gurucool.tech/'} disabled={true}/></div>
                <div className="col-sm-3">
                    <button className={'btn '} onClick={copy}>
                        {!copied ? <h3><i className="far fa-copy"/></h3> : <h3><i className="fas fa-copy"/></h3>}
                    </button>
                </div>
            </div>
            {/*<button onClick={copy}>{!copied ? "Copy link" : "Copied!"}</button>*/}
        </div>
    </>
}
export default CopyWeb;
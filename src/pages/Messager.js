import React,{Fragment} from 'react';
import Inbox from './Inbox';
import {connect} from 'react-redux';
import ChatBox from './ChatBox';

 function Messager() {
    return (
        <Fragment>
            <div className={`green-belt`}/>
            <div className={`messager fixed  flex`}>
                <Inbox/>
                <ChatBox/>
            </div>
        </Fragment>
     
    )
}

const mapStateToProps = state => {
    return{
        loaded: state.App.loaded
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        setState: (loaded)=> dispatch({type: "APP_STATE",state:{loaded:loaded}})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Messager);

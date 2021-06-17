import React from 'react';
import {connect} from 'react-redux';

 function ChatBox(props) {
    return (
        <div className={`chatbox`}>
            chat box
            
        </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(ChatBox);

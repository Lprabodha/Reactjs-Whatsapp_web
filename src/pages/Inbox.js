import React from 'react';
import {connect} from 'react-redux';

 function Inbox(props) {
    return (
        <div className={`inbox rel`}>
            inbox slide bar
            
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

export default connect(mapStateToProps,mapDispatchToProps)(Inbox);

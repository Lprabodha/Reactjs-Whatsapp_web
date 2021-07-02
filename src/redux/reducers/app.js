
const initialState ={
    debug: true,
    loaded: true,
    session:false,
    codeSent: false

    }

    export default function (state = initialState, action){
        switch(action.type){
            case "APP_STATE":
                return {...state, ...action.state}
                break;
            default:
                return state;
        }
    }
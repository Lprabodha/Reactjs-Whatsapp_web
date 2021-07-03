
const initialState ={
    debug: true,
    loaded: false,
    session:false,
    codeSent: false,
    confirmation: null,
    user:null


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
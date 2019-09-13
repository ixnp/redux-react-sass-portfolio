import {toggleNav} from '../actions'
const initalState = {
    projectsItems: {
        project: {
            1: {
                name: 'proj1',
                description: 'bsakdfjhds',
                img:{
                    big: '',
                    med: '',
                    small: ''
                } 
            }
        },
        selectedProject :0
    },
    skills: {},
    navDisplay: 'closed',
    contactDisplay: false,
    form: {},
    graphType:'bar',
}

export const reducers = (state=initalState, action) => {
    switch(action.type){  
        
        case 'TOGGLE_CLOSE': {
            
    
            return {
                ...state, navDisplay: 'closed'
            }
        }
        case 'TOGGLE_OPEN': {
            
            return {
                ...state, navDisplay: action.payload
            }
        }
        case 'FORM_VALUE' : {
            return {
                ...state, form: action.payload
            }
        }
     
        default :{
            return state;
        }
     
    }
     
    
}
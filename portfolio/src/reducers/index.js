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

}

export const reducers = (state=initalState, action) => {
    console.log('hi')
    console.log(action.type)
    switch(action.type){  
        
        case 'TOGGLE_CLOSE': {
            console.log('hi')
    
            return {
                ...state, navDisplay: 'closed'
            }
        }
        case 'TOGGLE_OPEN': {
            console.log('Wwhat')
            return {
                ...state, navDisplay: action.payload
            }
        }
     
        default :{
            return state;
        }
     
    }
     
    
}
import {toggleNav} from '../actions'
const missionStatment = 'Comic lover and Artist turned software developer. My passion in coding lies in creating dynamic full stack applications using Node.js with React and Redux. Never wanting to limit myself, I prioritize being a lifelong learner and pursuing new technologies and methodologies. Currently, I am an instructor for adults looking to pivot their careers to software development. My focus is teaching the fundamentals of object oriented programming and full stack development.'
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
  missionStatment: missionStatment
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
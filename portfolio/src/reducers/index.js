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
    switch(action.type){
        
        case 'TOGGLE_CLOSE': {
            console.log('hi')
            return {
                ...state, navDisplay: 'close'
            }
        }
        case 'TOGGLE_OPEN': {
            console.log('Wwhat')
            return {
                ...state, navDisplay: 'open'
            }
        }
     
        default :{
            return state;
        }
     
    }
     
    
}
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
    navDisplay: false,
    contactDisplay: false,

}

export const reducers = (state=initalState, action) => {
    switch(action.type){
        default :
        return state;
    }
     
    
}
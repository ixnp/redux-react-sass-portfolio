export const toggleNav = (currentClass) => {
    if(currentClass === 'open'){
        return{
            type: 'TOGGLE_CLOSE',
            payload: 'close'
        }
    }else{  
        return{
            type:  'TOGGLE_OPEN',
            payload: 'open'
        
        }
    }
}

export const formAction = (formState) => {
    return{
        type: 'FORM_VALUE',
        payload: formState
    }
}


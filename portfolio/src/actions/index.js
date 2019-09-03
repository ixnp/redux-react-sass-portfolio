export const toggleNav = (currentClass) => {
    console.log(currentClass)
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


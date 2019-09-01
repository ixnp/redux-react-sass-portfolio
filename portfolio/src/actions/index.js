export const toggleNav = (currentClass) => {

    if(currentClass === 'open'){
        return{
            type: "TOGGLE_CLOSE",
    
        }
    }else{  
        return{
            type: "TOGGLE_OPEN",
        
        }
    }
}



import { getAuth } from 'firebase/auth'

export const getCurrentUser=()=>{
    const auth =getAuth()
    const user = auth.currentUser
 
    if(!user){
        //not  Signed in
        return null
    }else{
        // Signed In
        return {}
    }
    
}

// Here the getCurrentUser is a wrapper function that uses the firebase property currentUser
// currentUser get us the 

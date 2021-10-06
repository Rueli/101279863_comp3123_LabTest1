const resolvedPromise = () => { 
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
        let resolve  ={"message: ": " resolved promise!"};
        console.log(sucess);
        const error =false;
        /*if(!error){
            resolve();
        } else{
            reject("error: something went wrong");
        }*/
        }, 500);
    });
}
const rejectedPromise = () => { 
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            let reject = ({'message:': 'rejected promise!'})

        }, 500);
    });
}
rejectedPromise()
rejectedPromise()

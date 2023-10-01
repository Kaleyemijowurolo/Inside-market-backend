
exports.formatResult = (result) => {
    if(result.error){
        let message = "";
        
        for(let detail of result.error.details){
            if(message === ""){
                message = detail.message;
            }else{
                message = `${message} ${detail.message}`;
            }
        }

        return {
            error: true,
            message
        };
    }

    return {error: false}
}
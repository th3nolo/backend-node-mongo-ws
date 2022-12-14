function addMessage( user, message) {
    return new Promise((resolve, reject) => {
        if(!user || !message){
            console.error('[messageController] No hay usuario o mensaje');
            return reject('Invalid data');
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        };
        resolve(fullMessage);
    })
    
}

module.exports = { 
    addMessage,
}
// As a class 
// class Utility {

//     static getInputValue(elementID: string): string { 

//         const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
//         return inputElement.value;
//     }

// }

// As a module
function getInputValue(elementID: string): string { 
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    return inputElement.value;
}

function logger(message: string): void {
    console.log(message);
}
    

export {
    getInputValue as getValue,
    logger
}
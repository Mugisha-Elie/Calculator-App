export const wait = (delay: number) => new Promise(res => setTimeout(res, delay))

export function wrapPromise<T>(promise: Promise<T>){
    let status = "pending";
    let result: T;

    const suspender = promise.then(
        (response) => {
            status = "success";
            result = response
        },
        (error) => {
            status = "error";
            result = error
        }
    )

    return {
        read(): T {
            if(status === "pending"){
                throw suspender;
            }else if(status === "error"){
                throw result;
            }else {
                return result;
            }
        }
    }
}
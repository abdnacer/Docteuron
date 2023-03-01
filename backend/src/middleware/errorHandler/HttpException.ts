class HttpException extends Error {
    status: number
    message: string
  
    constructor(staus: number, message: string){
      super(message)
      this.status = staus
      this.message = message
    }
  }
  
  export default HttpException
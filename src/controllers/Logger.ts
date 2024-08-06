export class Logger {
  static RegisterRequestError(message: string, url: string, params: object) {
    console.log(
      `Request Error:\n\nPayload:\n\nURL: ${JSON.stringify(url)}\nParams: \n${JSON.stringify(params)}\n\nResponse Error: \n\n${JSON.stringify(message)}\n`
    )
  }

  static RegisterLog(message: string) {
    console.log(`Log Registered: \n\n${message}`)
  }
}

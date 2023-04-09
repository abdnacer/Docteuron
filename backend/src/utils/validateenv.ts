import { cleanEnv } from 'envalid'
import { str, port, email } from "envalid/dist/validators"

export default cleanEnv(process.env, {
  MONGO_DB: str(),
  PORT: port(),
  Node_ENV: str(),
  EMAIL: email(),
  PASSWORD: str()
})
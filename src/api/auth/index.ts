import { studentLogin } from './login'
import { studentRegister } from './register'
import { refresh } from './refresh'
import { logoutStudent } from "./logoutStudent"

export const auth = {
    studentLogin,
    studentRegister,
    refresh, logoutStudent
}

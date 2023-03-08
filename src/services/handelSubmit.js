import isValideNAme from './isvalideName';
import isValidePassward from './isValidePassword';
import encoder from './encoder'

export default function handelSudmit(evt) {
    evt.preventDefault()
    const data = Object.fromEntries(new FormData(evt.target))
    const validate = {
        "user-name": isValideNAme(data["user-name"]) ? data["user-name"] : null,
        "user-password": isValidePassward(data["user-password"]) ? encoder(data["user-password"]) : null
    }
    if (validate['user-name'] && validate['user-password']) setUser(validate)
    evt.target.reset()
}
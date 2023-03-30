import useUser from '../../hooks/useUser'
import FormRequest from '../FormRequest/FormRequest'

export default function RequestContent () {
  const { user } = useUser()
  if (user.departamento === 'informatica') {
    return <h1>hola Tecnico</h1>
  } else {
    return <FormRequest />
  }
}

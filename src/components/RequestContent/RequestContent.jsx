import useUser from '../../hooks/useUser'
import FormRequest from '../FormRequest/FormRequest'
import Analitics from '../Analitics/Analitics'
export default function RequestContent () {
  const { user } = useUser()
  if (user.departamento === 'informatica') {
    return <Analitics />
  } else {
    return <FormRequest />
  }
}

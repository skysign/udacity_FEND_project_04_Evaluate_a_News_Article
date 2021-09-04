import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { validateURL } from './js/validateURL'

console.log(checkForName);
console.log(handleSubmit);
console.log(validateURL);

export {
    checkForName,
    handleSubmit,
    validateURL
}

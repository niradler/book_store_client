import IndicativeValidator from 'indicative'
import config from './config'
class Validator {
    constructor(config) {
        this.config = config
    }
    validate(data, type) {
        return IndicativeValidator.validate(data, this.config[type].rules, this.config[type].messages)
    }
    validateAll(data, type) {
        return IndicativeValidator.validateAll(data, this.config[type].rules, this.config[type].messages)
    }
}
const validator = new Validator(config())
export default validator;
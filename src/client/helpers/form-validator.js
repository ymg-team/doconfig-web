class FormValidator {
  constructor (rules = {}) {
    this.rules = rules
  }

  validate (formdata) {
    let isValid = true
    let result = {}

    Object.keys(this.rules).map((n, key) => {
      const rules = this.rules[n].split('|')
      if (rules.includes('required') && !formdata[n]) {
        isValid = isValid && false
        result[n] = {
          isValid: false,
          message: 'this input is required'
        }
      } else {
        isValid = isValid && true
        result[n] = {
          isValid: true,
          message: ''
        }
      }
    })

    return {
      isValid,
      result
    }
  }
}

export default FormValidator

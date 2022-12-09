const main = document.querySelector('main')

const Data = () => {
  const section = document.createElement('section')
  section.classList = 'section-question'

  const sectionContainer = document.createElement('div')
  sectionContainer.classList = 'section-question__container'

  const h2 = document.createElement('h2')
  h2.classList = 'section-question--title'

  const textH2 = document.createTextNode('¿Sabes cuanto dinero necesitas?')

  const inputContainer = document.createElement('div')
  inputContainer.classList = 'section-question__container-input'

  const inputAmount = document.createElement('input')
  inputAmount.classList = 'section-question__container--amount'
  inputAmount.type = 'number'
  inputAmount.placeholder = '0'
  inputAmount.min = '0'
  inputAmount.max = '1000000'

  const paragraph = document.createElement('p')
  paragraph.classList = 'section-question__container--paragraph'
  paragraph.textContent = 'Monto Minimo: 1.000 - Monto Maximo: 1.000.000'

  const info = document.createElement('div')
  info.classList = 'section-question__container-info'

  const date = document.createElement('form')
  date.classList = 'section-question__container-info-date'

  const titleDate = document.createElement('label')
  titleDate.classList = 'section-question__container-info-date--title'
  titleDate.textContent = '¿A cuántos meses?'

  const inputDate = document.createElement('input')
  inputDate.classList = 'section-question__container-info-date--input'
  inputDate.type = 'number'
  inputDate.placeholder = '0'
  inputDate.min = '48'
  inputDate.max = '84'

  const paragraphDate = document.createElement('p')
  paragraphDate.classList = 'section-question__container-info-date--paragraph'
  paragraphDate.textContent = 'Elije un plazo desde 48 y hasta 84 meses'

/** */
  const age = document.createElement('form')
  date.classList = 'section-question__container-info-age'

  const titleAge = document.createElement('label')
  titleAge.classList = 'section-question__container-info-age--title'
  titleAge.textContent = 'Fecha de nacimiento'

  const inputAge = document.createElement('input')
  inputAge.classList = 'section-question__container-info-age--input'
  inputAge.type = 'date'
  // const dateNow  = new Date()
  inputAge.placeholder = 'dd/mm/aaaa'
  inputAge.min = '1938-12-31'
  inputAge.max = '2023-12-31'

  const paragraphAge = document.createElement('p')
  paragraphAge.classList = 'section-question__container-info-age--paragraph'
  paragraphAge.textContent = 'Debes tener entre 18 y 84 años para solicitar el crédito.'

/** */
  const buttonSimulation = document.createElement('button')
  buttonSimulation.classList = 'section-question--button'
  buttonSimulation.textContent = 'SIMULAR'

  main.innerText = section
  
  main.append(section)
  section.append(sectionContainer)
  info.append(date, age)
  date.append(titleDate, inputDate, paragraphDate)
  age.append(titleAge, inputAge, paragraphAge)
  sectionContainer.append(h2, inputContainer, info, age, buttonSimulation)
  inputContainer.append(inputAmount, paragraph)
  h2.append(textH2)

  buttonSimulation.addEventListener('click', () => {
    const validateAmount = () => {
      const inputAmountValue = inputAmount.value

      if (inputAmountValue != 0) {
        if (inputAmountValue >= 1000 && inputAmountValue <= 1000000) {
          paragraph.textContent = 'Monto Minimo: 1.000 - Monto Maximo: 1.000.000'
          paragraph.style.color = 'black'
        } else {
          paragraph.textContent = 'El monto debe estar entre 1.000 y 1.000.000'
          paragraph.style.color = 'red'
        }
      } else {
        paragraph.textContent = 'Ingresa el monto que necesitas.'
        paragraph.style.color = 'red'
      }
    }
    validateAmount()

    const validateDate = () => {
      const inputDateValue = inputDate.value

      if (inputDateValue !=0) {
        if (inputDateValue >= 48 && inputDateValue <= 84) {
          paragraphDate.textContent = 'Elije un plazo desde 48 y hasta 84 meses'
          paragraphDate.style.color = 'black'
        } else {
          paragraphDate.textContent = 'El plazo debe estar entre 48 y 84 meses'
          paragraphDate.style.color = 'red'
        }
      } else {
        paragraphDate.textContent = 'Ingresa el plazo que deseas.'
        paragraphDate.style.color = 'red'
      }
    } 
    validateDate()

    const validateAge = () => {
      const date = document.querySelector('.section-question__container-info-age--input').value
      const newDate = new Date()
      const year = (newDate.getFullYear())
      const month = (newDate.getMonth() + 1)
      const day = (newDate.getDate())

      const yearUser = parseInt(date.split('-')[0])
      const monthUser = parseInt(date.split('-')[1])
      const dateUser = parseInt(date.split('-')[2])

      const transformYearUser = yearUser * 365 + monthUser * 30 + dateUser
      const transformYearActuall = year * 365 + month * 30 + day 
      const validate = (transformYearActuall - transformYearUser) / 365
     
      if (date) {
        if (validate >= 18 && validate <= 84) {
          paragraphAge.textContent = 'Debes tener entre 18 y 84 años para solicitar el crédito.'
          paragraphAge.style.color = 'black'
        } else {
          paragraphAge.textContent = 'Debes tener entre 18 y 84 años para solicitar el crédito.'
          paragraphAge.style.color = 'red'
        }
      } else {
        paragraphAge.textContent = 'Ingresa tu fecha de nacimiento.'
        paragraphAge.style.color = 'red'
      }
    }
    validateAge()
  })
}


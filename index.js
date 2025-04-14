const formulario = document.getElementById('formulario')
const campos = document.querySelectorAll('.campo')
const containerQueries = document.querySelectorAll('.container-query')


formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    let formValido = true


    campos.forEach((input) => {

        if (input.type === 'checkbox') return
        if (!input.value) {
            input.nextElementSibling.classList.remove('mostrar')
            input.classList.add('erro')
            formValido = false

        } else {
            input.nextElementSibling.classList.add('mostrar')
            input.classList.remove('erro')
        }

    })

    let checkbox = document.querySelector('#checkbox1')
    let campoCheckbox = checkbox.closest('.campo-checkbox')
    let erroCheckbox = campoCheckbox.querySelector('.invalido')

    if (!checkbox.checked) {
        erroCheckbox.classList.remove('mostrar')
        checkbox.classList.add('erro')
        formValido = false

    } else {
        erroCheckbox.classList.add('mostrar')
        checkbox.classList.remove('erro')

    }


    let radios = document.querySelectorAll('.radio')
    let radioSelecionado = false
    let erroRadio = document.querySelector('.erro-radio')

    radios.forEach(radio => {
        if (radio.checked) {
            radioSelecionado = true
        }
    })

    if (!radioSelecionado) {
        erroRadio.classList.remove('mostrar')
        formValido = false
    } else {
        erroRadio.classList.add('mostrar')
    }

    if (formValido) {
        let confirmacao = document.querySelector('.confirmacao')
        confirmacao.style.display = 'flex'
        setTimeout(() => {
            confirmacao.classList.add('transicao')
        }, 10)

        formulario.reset()

        containerQueries.forEach(container => {
            container.classList.remove('focado')
        })
    }

})

containerQueries.forEach(container => {
    container.addEventListener('click', () => {
        const radioDentro = container.querySelector('.radio')
        if (radioDentro) {
            radioDentro.checked = true

            containerQueries.forEach(outroContainer => {
                if (outroContainer !== container) {
                    outroContainer.classList.remove('focado')
                }
            })

            container.classList.add('focado')
        }
    })

    container.addEventListener('focusin', () => {
        containerQueries.forEach(outroContainer => {
            if (outroContainer !== container) {
                outroContainer.classList.remove('focado')
            }
        })
        container.classList.add('focado')
        const radioDentro = container.querySelectorAll('.radio')
        if (radioDentro) {
            radioDentro.checked = true
        }
    })

})





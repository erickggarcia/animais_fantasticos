export default function initModal() {

    const containerModal = document.querySelector('[data-modal="modal-container"]')
    const botaoAbrir = document.querySelector('[data-modal="abrir"]')
    const botaoFechar = document.querySelector('[data-modal="fechar"]')

    if(containerModal && botaoFechar && botaoAbrir) {

        function toggleModal(event) {
            event.preventDefault()
            containerModal.classList.toggle('ativo')  
        }
        
        function cliqueForaDoModal(event) {
            if(event.target === this) {
                toggleModal(event)
            }
        }
    
        botaoAbrir.addEventListener('click', toggleModal)
        botaoFechar.addEventListener('click', toggleModal)
        containerModal.addEventListener('click', cliqueForaDoModal)
    }
}

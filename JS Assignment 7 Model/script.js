function toggleModal() {
    const modal = document.getElementById('exampleModal');
    const backdrop = document.getElementById('modalBackdrop');
    const isModalVisible = modal.classList.contains('show');
    
    if (isModalVisible) {
        modal.classList.remove('show');
        modal.style.display = 'none';
        backdrop.style.display = 'none';
        document.body.classList.remove('modal-open');
    } else {
        modal.classList.add('show');
        modal.style.display = 'block';
        backdrop.style.display = 'block';
        document.body.classList.add('modal-open');
    }
}

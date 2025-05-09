document.querySelectorAll('.filterDiv').forEach(product => product.classList.add('show'));


document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));

        this.classList.add('active');

        const selectedCategory = this.getAttribute('data-category');
        const products = document.querySelectorAll('.filterDiv');

        // index banners filtering
       
        products.forEach(product => {
            if (selectedCategory === 'all') {
                product.classList.add('show');
            } else if (product.classList.contains(selectedCategory)) {
                product.classList.add('show');
            } else {
                product.classList.remove('show');
            }
        });
    });
});

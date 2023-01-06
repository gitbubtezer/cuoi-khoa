function myFunction() {
    var element = document.body;
    var element_nav = document.querySelector('.nav-bar');
    var element_product = document.querySelector('.product-detail');
    var element_product_2 = document.querySelector('.product-info');
    element.classList.toggle("dark-mode");
    element_nav.classList.toggle("dark-mode");
    element_product.classList.toggle("dark-mode");
    element_product_2.classList.toggle("dark-mode");
}
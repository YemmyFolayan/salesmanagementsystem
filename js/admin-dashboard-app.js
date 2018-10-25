// var allProducts = []; // Main array for all products
var productId;
function Product(name, rating, price, brand, orders){
    this.name = name;
    this.rating = rating;
    this.price = price;
    this.brand = brand;
    this.orders = orders;
} // Main constructor function to add new products
// xxxxxxxxxxxxxxx Function for Demo Data xxxxxxxxxxxxxxx
function demoData(){
    var allProducts = [];
    var getProducts = localStorage.getItem("allProducts");
    if(getProducts === null){
        var product1 = new Product("Samsung S7 Edge", "5", "50000", "Samsung", "60");
        var product2 = new Product("iPhone 7S Edge", "4.9", "60000", "iPhone", "50");
        var product3 = new Product("Vivo V11 Pro", "4.1", "53999", "Vivo", "25");
        var product4 = new Product("Huawei Nova 3i", "4.3", "39999", "Huawei", "40");
        var product5 = new Product("Oppo F9", "4", "39999", "Oppo", "38");
        allProducts.push(product1, product2, product3, product4, product5);   
        var storeProducts = localStorage.setItem("allProducts", JSON.stringify(allProducts));
    }
    return addProducts();
}

// xxxxxxxxxxxxxxx Function for Creat List with product xxxxxxxxxxxxxxx
function addProducts(){
    
    // Working for product table
    var getProducts = localStorage.getItem("allProducts");
    var getProductsToObj = JSON.parse(getProducts);
    document.getElementById("productList").innerHTML = "";
    for(let i = 0; i < getProductsToObj.length; i++){
        document.getElementById("productList").innerHTML += '<tr><th scope="row">' + 
        Number(i+1) + '</th><td><div>' + 
        '<span class="productName">' + getProductsToObj[i].name +
        '</span><i class="dropDownIcon float-right fas fa-chevron-left mr-lg-3" onclick="dropDown(this)"></i>' +
        '</div><div><small class="soldIcon text-success mr-2" onclick="addToSold(this)"><i class="fas fa-shopping-cart mr-2"></i>Sold</small>' +
        '<small class="editIcon text-primary mr-2" onclick="editProduct(this)"><i class="fas fa-edit mr-2"></i>Edit</small>' + 
        '<small class="deleteIcon text-danger" onclick="deleteProduct(this)"><i class="far fa-trash-alt mr-2"></i>Delete</small>' +
        '</div><div class="product-detail"><ul class="pl-0 my-3"><li><strong>Rating: </strong><span class="productRating">' + getProductsToObj[i].rating +
        '</span>/5</li><li><strong>Price: Rs. </strong><span class="productPrice">' + getProductsToObj[i].price + 
        '</span></li><li><strong>Brand: </strong><span class="productBrandName">' + getProductsToObj[i].brand +
        '</span></li><li><strong>Orders: </strong><span class="productOrders">' + getProductsToObj[i].orders + '</span></li></ul></div></td></tr>'
    }

    // Working for sold itme table
    var getSoldItems = localStorage.getItem("allSoldItems");
    var getAllSoldItemsToObj = JSON.parse(getSoldItems);
    if(getSoldItems !== null){
        document.getElementById("soldItemList").innerHTML = "";
        for(let i = 0; i < getAllSoldItemsToObj.length; i++){
            document.getElementById("soldItemList").innerHTML += '<tr><th scope="row">' + 
            Number(i+1) + '</th><td><div>' + 
            '<span class="productName">' + getAllSoldItemsToObj[i].name +
            '</span><i class="dropDownIcon float-right fas fa-chevron-left mr-lg-3" onclick="dropDown(this)"></i></div><div>' +
            '</div><div class="product-detail"><ul class="pl-0 my-3"><li><strong>Rating: </strong><span class="productRating">' + getAllSoldItemsToObj[i].rating +
            '</span>/5</li><li><strong>Price: Rs. </strong><span class="productPrice">' + getAllSoldItemsToObj[i].price + 
            '</span></li><li><strong>Brand: </strong><span class="productBrandName">' + getAllSoldItemsToObj[i].brand +
            '</span></li><li><strong>Orders: </strong><span class="productOrders">' + getAllSoldItemsToObj[i].orders + '</span></li></ul></div></td></tr>'
        }
    }
}

// xxxxxxxxxxxxxxx Function for List Dropdown icon xxxxxxxxxxxxxxx
function dropDown(n){
    var productDetailDiv = n.parentNode.nextSibling.nextSibling;
    var productDetailIcon = n;
    if(productDetailDiv.style.display === "block"){
        productDetailDiv.style.display = "none"
    }else{
        productDetailDiv.style.display = "block"
    }
    if(productDetailIcon.classList.contains("fa-chevron-left")){
        productDetailIcon.classList.remove("fa-chevron-left");
        productDetailIcon.classList.add("fa-chevron-down");
    }else if(productDetailIcon.classList.contains("fa-chevron-down")){
        productDetailIcon.classList.remove("fa-chevron-down");
        productDetailIcon.classList.add("fa-chevron-left");
    }
}

// xxxxxxxxxxxxxxx Function for Delete Product xxxxxxxxxxxxxxx
function deleteProduct(n){
    var deleteProduct = n.parentNode.parentNode.parentNode;
    const swalWithBootstrapButtons = swal.mixin({
    confirmButtonClass: 'btn btn-success m-2',
    cancelButtonClass: 'btn btn-danger m-2',
    buttonsStyling: false,
    })
    swalWithBootstrapButtons({
    title: 'Are you sure you want to permanently delete?',
    text: "You won't be able to revert this!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
    }).then((result) => {
    if (result.value) {
        var deleteProductNum = n.parentNode.parentNode.parentNode.firstChild.innerHTML;
        var getProducts = localStorage.getItem("allProducts");
        var getAllProductsToObj = JSON.parse(getProducts);
        getAllProductsToObj.splice((deleteProductNum - 1), 1)
        var storeProducts = localStorage.setItem("allProducts", JSON.stringify(getAllProductsToObj));
        swalWithBootstrapButtons(
        'Deleted!',
        'Your product has been deleted.',
        'success'
        ).then((value) =>{
            return addProducts();
        });
    } else if (
        result.dismiss === swal.DismissReason.cancel
    ) {
        swalWithBootstrapButtons(
        'Cancelled',
        'Your product is safe :)',
        'error'
        )
    }
    })
}

// xxxxxxxxxxxxxxx Function for switch table to form & form to table xxxxxxxxxxxxxxx
function showNHideNewProductForm(){
    var addProductName = document.getElementById("addProductName");
    var addProductRating = document.getElementById("addProductRating"); 
    var addProductPrice = document.getElementById("addProductPrice"); 
    var addProductBrand = document.getElementById("addProductBrand"); 
    var addProductOrders = document.getElementById("addProductOrders"); 
    var productTableSection = document.getElementById("productTableSection");
    var addNewProductForm = document.getElementById("addNewProduct");

    if(productTableSection.style.display === "block"){
        addNewProductForm.style.display = "block"
        productTableSection.style.display = "none"
        var sidebarMenuList = document.getElementById("sidebarMenuList").getElementsByTagName("ul")[0].getElementsByTagName("li");
        for(let i = 0; i < sidebarMenuList.length; i++){
            sidebarMenuList[i].classList.remove("active");
        }
        sidebarMenuList[2].classList.add("active");
    }else if(addNewProductForm.style.display === "block"){
        addNewProductForm.style.display = "none"
        productTableSection.style.display = "block"
        addProductName.value = "";
        addProductRating.value = "";
        addProductPrice.value = "";
        addProductBrand.value = "";
        addProductOrders.value = "";
        var sidebarMenuList = document.getElementById("sidebarMenuList").getElementsByTagName("ul")[0].getElementsByTagName("li");
        for(let i = 0; i < sidebarMenuList.length; i++){
            sidebarMenuList[i].classList.remove("active");
        }
        sidebarMenuList[0].classList.add("active");
    }
}

// xxxxxxxxxxxxxxx Function for Form Validation on individual fields xxxxxxxxxxxxxxx
function checkAddProductName(){
    var addProductName = document.getElementById("addProductName");
    var addProductNameFormate = /^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{2,}$/;
    var flag;
    if(addProductName.value.match(addProductNameFormate)){
        flag = false
    }else{
        flag = true
    }
    if(flag){
        document.getElementById("addProductNameError").style.display = "block"
    }else{
        document.getElementById("addProductNameError").style.display = "none"
    }
}
function checkAddProductRating(){
    var addProductRating = document.getElementById("addProductRating");
    var flag;
    if(addProductRating.value < 0 || addProductRating.value > 5 || addProductRating.value === ""){
        flag = true
    }else{
        flag = false
    }
    if(flag){
        document.getElementById("addProductRatingError").style.display = "block"
    }else{
        document.getElementById("addProductRatingError").style.display = "none"
    }
}
function checkAddProductPrice(){
    var addProductPrice = document.getElementById("addProductPrice");
    var flag;
    if(addProductPrice.value < 0 || addProductPrice.value === ""){
        flag = true
    }else{
        flag = false
    }
    if(flag){
        document.getElementById("addProductPriceError").style.display = "block"
    }else{
        document.getElementById("addProductPriceError").style.display = "none"
    }
}
function checkAddProductBrand(){
    var addProductBrand = document.getElementById("addProductBrand");
    var addProductBrandFormate = /^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{2,}$/;
    var flag;
    if(addProductBrand.value.match(addProductBrandFormate)){
        flag = false
    }else{
        flag = true
    }
    if(flag){
        document.getElementById("addProductBrandError").style.display = "block"
    }else{
        document.getElementById("addProductBrandError").style.display = "none"
    }
}
function checkAddProductOrders(){
    var addProductOrders = document.getElementById("addProductOrders");
    var flag;
    if(addProductOrders.value < 0 || addProductOrders.value === ""){
        flag = true
    }else{
        flag = false
    }
    if(flag){
        document.getElementById("addProductOrdersError").style.display = "block"
    }else{
        document.getElementById("addProductOrdersError").style.display = "none"
    }
}

// xxxxxxxxxxxxxxx Function for add new product xxxxxxxxxxxxxxx
function addNewProduct(){
    var addProductName = document.getElementById("addProductName");
    var addProductNameFormate = /^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{2,}$/;
    var addProductRating = document.getElementById("addProductRating"); 
    var addProductPrice = document.getElementById("addProductPrice"); 
    var addProductBrand = document.getElementById("addProductBrand"); 
    var addProductBrandFormate = /^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{2,}$/;
    var addProductOrders = document.getElementById("addProductOrders"); 
    var productTableSection = document.getElementById("productTableSection");
    var addNewProductForm = document.getElementById("addNewProduct");

    if(addProductName.value.match(addProductNameFormate) === null){
        return checkAddProductName();
    }else if(addProductRating.value < 0 && addProductRating.value > 5 && addProductRating.value === ""){
        return checkAddProductRating();
    }else if(addProductPrice.value < 0 || addProductPrice.value === ""){
        return checkAddProductPrice();
    }else if(addProductBrand.value.match(addProductBrandFormate) === null){
        return checkAddProductBrand();
    }else if(addProductOrders.value < 0 || addProductOrders.value === ""){
        return checkAddProductOrders();
    }else{
        var newProduct = new Product(addProductName.value, addProductRating.value, addProductPrice.value, addProductBrand.value, addProductOrders.value);
        var getProducts = localStorage.getItem("allProducts");
        var getAllProductsToObj = JSON.parse(getProducts);
        getAllProductsToObj.push(newProduct);
        var storeProducts = localStorage.setItem("allProducts", JSON.stringify(getAllProductsToObj));
        swal('Product Successfully Added','Your product has been successfully added.','success'
        ).then((value)=>{
            productTableSection.style.display = "block";
            addProductName.value = "";
            addProductRating.value = "";
            addProductPrice.value = "";
            addProductBrand.value = "";
            addProductOrders.value = "";
            addNewProductForm.style.display = "none";
            return addProducts();
        });
    }
}

// xxxxxxxxxxxxxxx Function for product search bar xxxxxxxxxxxxxxx
function searchProduct(){
    var tableSearchBar = document.getElementById("tableSearchBar");
    var filter = tableSearchBar.value.toLowerCase();
    var productTable = document.getElementById("productTable");
    var tr = productTable.getElementsByTagName("tr");

    for(var i = 0; i < tr.length; i++){
        var td = tr[i].getElementsByTagName("td")[0];
        if(td){
            if(td.innerHTML.toLowerCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}

// xxxxxxxxxxxxxxx Function for product edition and get data from array xxxxxxxxxxxxxxx
function editProduct(n){
    var trId = n.parentNode.parentNode.previousSibling.innerHTML;
    productId = trId - 1;
    var getProducts = localStorage.getItem("allProducts");
    var getAllProductsToObj = JSON.parse(getProducts);
    var productName = getAllProductsToObj[productId].name;
    var productRating = getAllProductsToObj[productId].rating;
    var productPrice = getAllProductsToObj[productId].price;
    var productBrand = getAllProductsToObj[productId].brand;
    var productOrders = getAllProductsToObj[productId].orders;

    var editProductName = document.getElementById("editProductName");
    var editProductRating = document.getElementById("editProductRating"); 
    var editProductPrice = document.getElementById("editProductPrice"); 
    var editProductBrand = document.getElementById("editProductBrand"); 
    var editProductOrders = document.getElementById("editProductOrders"); 
    var productTableSection = document.getElementById("productTableSection");
    var editProductForm = document.getElementById("editProduct");
    if(productTableSection.style.display === "block"){
        editProductName.value = productName;
        editProductRating.value = productRating;
        editProductPrice.value = productPrice;
        editProductBrand.value = productBrand;
        editProductOrders.value = productOrders;
        editProductForm.style.display = "block"
        productTableSection.style.display = "none"
        var sidebarMenuList = document.getElementById("sidebarMenuList").getElementsByTagName("ul")[0].getElementsByTagName("li");
        for(let i = 0; i < sidebarMenuList.length; i++){
            sidebarMenuList[i].classList.remove("active");
        }
    }
}

// xxxxxxxxxxxxxxx Function for back to table xxxxxxxxxxxxxxx
function backToProductTable(){
    var editProductName = document.getElementById("editProductName");
    var editProductRating = document.getElementById("editProductRating"); 
    var editProductPrice = document.getElementById("editProductPrice"); 
    var editProductBrand = document.getElementById("editProductBrand"); 
    var editProductOrders = document.getElementById("editProductOrders"); 
    var productTableSection = document.getElementById("productTableSection");
    var editProductForm = document.getElementById("editProduct");
    if(editProductForm.style.display === "block"){
        editProductForm.style.display = "none"
        productTableSection.style.display = "block"
        editProductName.value = "";
        editProductRating.value = "";
        editProductPrice.value = "";
        editProductBrand.value = "";
        editProductOrders.value = "";
        var sidebarMenuList = document.getElementById("sidebarMenuList").getElementsByTagName("ul")[0].getElementsByTagName("li");
        for(let i = 0; i < sidebarMenuList.length; i++){
            sidebarMenuList[i].classList.remove("active");
        }
        sidebarMenuList[0].classList.add("active");
    }

}

// xxxxxxxxxxxxxxx Function for Form Validation on individual fields xxxxxxxxxxxxxxx
function checkEditProductName(){
    var editProductName = document.getElementById("editProductName");
    var editProductNameFormate = /^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{2,}$/;
    var flag;
    if(editProductName.value.match(editProductNameFormate)){
        flag = false
    }else{
        flag = true
    }
    if(flag){
        document.getElementById("editProductNameError").style.display = "block"
    }else{
        document.getElementById("editProductNameError").style.display = "none"
    }
}
function checkEditProductRating(){
    var editProductRating = document.getElementById("editProductRating");
    var flag;
    if(editProductRating.value < 0 || editProductRating.value > 5 || editProductRating.value === ""){
        flag = true
    }else{
        flag = false
    }
    if(flag){
        document.getElementById("editProductRatingError").style.display = "block"
    }else{
        document.getElementById("editProductRatingError").style.display = "none"
    }
}
function checkEditProductPrice(){
    var editProductPrice = document.getElementById("editProductPrice");
    var flag;
    if(editProductPrice.value < 0 || editProductPrice.value === ""){
        flag = true
    }else{
        flag = false
    }
    if(flag){
        document.getElementById("editProductPriceError").style.display = "block"
    }else{
        document.getElementById("editProductPriceError").style.display = "none"
    }
}
function checkEditProductBrand(){
    var editProductBrand = document.getElementById("editProductBrand");
    var editProductBrandFormate = /^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{2,}$/;
    var flag;
    if(editProductBrand.value.match(editProductBrandFormate)){
        flag = false
    }else{
        flag = true
    }
    if(flag){
        document.getElementById("editProductBrandError").style.display = "block"
    }else{
        document.getElementById("editProductBrandError").style.display = "none"
    }
}
function checkEditProductOrders(){
    var editProductOrders = document.getElementById("editProductOrders");
    var flag;
    if(editProductOrders.value < 0 || editProductOrders.value === ""){
        flag = true
    }else{
        flag = false
    }
    if(flag){
        document.getElementById("editProductOrdersError").style.display = "block"
    }else{
        document.getElementById("editProductOrdersError").style.display = "none"
    }
}

// xxxxxxxxxxxxxxx Function for update selected product xxxxxxxxxxxxxxx
function updateProduct(){
    var editProductName = document.getElementById("editProductName");
    var editProductNameFormate = /^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{2,}$/;
    var editProductRating = document.getElementById("editProductRating"); 
    var editProductPrice = document.getElementById("editProductPrice"); 
    var editProductBrand = document.getElementById("editProductBrand"); 
    var editProductBrandFormate = /^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{2,}$/;
    var editProductOrders = document.getElementById("editProductOrders"); 
    var productTableSection = document.getElementById("productTableSection");
    var editProductForm = document.getElementById("editProduct");

    if(editProductName.value.match(editProductNameFormate) === null){
        return checkEditProductName();
    }else if(editProductRating.value < 0 && editProductRating.value > 5 && editProductRating.value === ""){
        return checkEditProductRating();
    }else if(editProductPrice.value < 0 || editProductPrice.value === ""){
        return checkEditProductPrice();
    }else if(editProductBrand.value.match(editProductBrandFormate) === null){
        return checkEditProductBrand();
    }else if(editProductOrders.value < 0 || editProductOrders.value === ""){
        return checkEditProductOrders();
    }else{
        var getProducts = localStorage.getItem("allProducts");
        var getAllProductsToObj = JSON.parse(getProducts);
        getAllProductsToObj[productId].name = editProductName.value;
        getAllProductsToObj[productId].rating = editProductRating.value;
        getAllProductsToObj[productId].price = editProductPrice.value;
        getAllProductsToObj[productId].brand = editProductBrand.value;
        getAllProductsToObj[productId].orders = editProductOrders.value;
        var storeProducts = localStorage.setItem("allProducts", JSON.stringify(getAllProductsToObj));
        swal('Product Successfully Updated','Your product has been successfully Updated.','success'
        ).then((value)=>{
            productTableSection.style.display = "block";
            editProductName.value = "";
            editProductRating.value = "";
            editProductPrice.value = "";
            editProductBrand.value = "";
            editProductOrders.value = "";
            editProductForm.style.display = "none";
            return addProducts();
        });
    }
}

// xxxxxxxxxxxxxxx Function for sold items xxxxxxxxxxxxxxx
function addToSold(n){
    var trId = n.parentNode.parentNode.previousSibling.innerHTML;
    productId = trId - 1;
    var getProducts = localStorage.getItem("allProducts");
    var getAllProductsToObj = JSON.parse(getProducts);
    var productName = getAllProductsToObj[productId].name;
    var productRating = getAllProductsToObj[productId].rating;
    var productPrice = getAllProductsToObj[productId].price;
    var productBrand = getAllProductsToObj[productId].brand;
    var productOrders = getAllProductsToObj[productId].orders;
    var newSolditem = new Product(productName, productRating, productPrice, productBrand, productOrders);
    
    var getSoldItems = localStorage.getItem("allSoldItems");
    
    if(getSoldItems === null){
        var allSoldItems = [];
        allSoldItems.push(newSolditem);
        var saveSoldItems = localStorage.setItem("allSoldItems", JSON.stringify(allSoldItems));
        var getSoldItems = localStorage.getItem("allSoldItems");
        var getAllSoldItemsToObj = JSON.parse(getSoldItems);
    }else{
        var getSoldItems = localStorage.getItem("allSoldItems");
        var getAllSoldItemsToObj = JSON.parse(getSoldItems);
        getAllSoldItemsToObj.push(newSolditem);
        var saveSoldItems = localStorage.setItem("allSoldItems", JSON.stringify(getAllSoldItemsToObj));        
        var getSoldItems = localStorage.getItem("allSoldItems");
        var getAllSoldItemsToObj = JSON.parse(getSoldItems);
    }
    var getSoldItems = localStorage.getItem("allSoldItems");
    var getAllSoldItemsToObj = JSON.parse(getSoldItems);
    document.getElementById("soldItemList").innerHTML = "";
    for(let i = 0; i < getAllSoldItemsToObj.length; i++){
        document.getElementById("soldItemList").innerHTML += '<tr><th scope="row">' + 
        Number(i+1) + '</th><td><div>' + 
        '<span class="productName">' + getAllSoldItemsToObj[i].name +
        '</span><i class="dropDownIcon float-right fas fa-chevron-left mr-lg-3" onclick="dropDown(this)"></i></div><div>' +
        '</div><div class="product-detail"><ul class="pl-0 my-3"><li><strong>Rating: </strong><span class="productRating">' + getAllSoldItemsToObj[i].rating +
        '</span>/5</li><li><strong>Price: Rs. </strong><span class="productPrice">' + getAllSoldItemsToObj[i].price + 
        '</span></li><li><strong>Brand: </strong><span class="productBrandName">' + getAllSoldItemsToObj[i].brand +
        '</span></li><li><strong>Orders: </strong><span class="productOrders">' + getAllSoldItemsToObj[i].orders + '</span></li></ul></div></td></tr>'
    }
    swal({
        type: 'success',
        title:'Product successfully sold',
    })

}


// xxxxxxxxxxxxxxx Function for sold item search bar xxxxxxxxxxxxxxx
function searchSoldItems(){
    var searchSoldItems = document.getElementById("searchSoldItems");
    var filter = searchSoldItems.value.toLowerCase();
    var soldItemTable = document.getElementById("soldItemTable");
    var tr = soldItemTable.getElementsByTagName("tr");

    for(var i = 0; i < tr.length; i++){
        var td = tr[i].getElementsByTagName("td")[0];
        if(td){
            if(td.innerHTML.toLowerCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}

// xxxxxxxxxxxxxxx Function for show and hide sidebar xxxxxxxxxxxxxxx
function showNHideSideBar(){
    var dashboardSidebar = document.getElementById("dashboardSidebar");
    dashboardSidebar.classList.toggle("active");
}

// xxxxxxxxxxxxxxx Function for show product table xxxxxxxxxxxxxxx
function showProductTableSection(n){
    document.getElementById("productTableSection").style.display = "block"
    document.getElementById("soldItemSection").style.display = "none"
    document.getElementById("addNewProduct").style.display = "none"
    document.getElementById("editProduct").style.display = "none"
    var sidebarMenuList = document.getElementById("sidebarMenuList").getElementsByTagName("ul")[0].getElementsByTagName("li");
    for(let i = 0; i < sidebarMenuList.length; i++){
        sidebarMenuList[i].classList.remove("active");
    }
    n.classList.add("active");
}

// xxxxxxxxxxxxxxx Function for show sold item table xxxxxxxxxxxxxxx
function showSoldItemSection(n){
    document.getElementById("soldItemSection").style.display = "block"
    document.getElementById("productTableSection").style.display = "none"
    document.getElementById("addNewProduct").style.display = "none"
    document.getElementById("editProduct").style.display = "none"
    var sidebarMenuList = document.getElementById("sidebarMenuList").getElementsByTagName("ul")[0].getElementsByTagName("li");
    for(let i = 0; i < sidebarMenuList.length; i++){
        sidebarMenuList[i].classList.remove("active");
    }
    n.classList.add("active");
    return addProducts();
}

// xxxxxxxxxxxxxxx Function for show add product form xxxxxxxxxxxxxxx
function showAddNewProduct(n){
    document.getElementById("addNewProduct").style.display = "block"
    document.getElementById("soldItemSection").style.display = "none"
    document.getElementById("productTableSection").style.display = "none"
    document.getElementById("editProduct").style.display = "none"
    var sidebarMenuList = document.getElementById("sidebarMenuList").getElementsByTagName("ul")[0].getElementsByTagName("li");
    for(let i = 0; i < sidebarMenuList.length; i++){
        sidebarMenuList[i].classList.remove("active");
    }
    n.classList.add("active");
}

// xxxxxxxxxxxxxxx Function for Admin Sign Out xxxxxxxxxxxxxxx
function adminSignOut(){
    swal({
        type: 'success',
        title:'Successfully Sign Out',
    }).then((value)=>{
        window.location.replace("../index.html");
    });
}
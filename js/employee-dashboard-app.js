var getEmployeeDetails = localStorage.getItem("employeeDetail");
var getEmployeeDetailsToObj = JSON.parse(getEmployeeDetails);
document.getElementById("employeeName").innerHTML = getEmployeeDetailsToObj.firstName + " " + getEmployeeDetailsToObj.lastName

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
    var sidebarMenuList = document.getElementById("sidebarMenuList").getElementsByTagName("ul")[0].getElementsByTagName("li");
    for(let i = 0; i < sidebarMenuList.length; i++){
        sidebarMenuList[i].classList.remove("active");
    }
    n.classList.add("active");
    return addProducts();
}

// xxxxxxxxxxxxxxx Function for show sold item table xxxxxxxxxxxxxxx
function showSoldItemSection(n){
    document.getElementById("soldItemSection").style.display = "block"
    document.getElementById("productTableSection").style.display = "none"
    var sidebarMenuList = document.getElementById("sidebarMenuList").getElementsByTagName("ul")[0].getElementsByTagName("li");
    for(let i = 0; i < sidebarMenuList.length; i++){
        sidebarMenuList[i].classList.remove("active");
    }
    n.classList.add("active");
    return addProducts();
}

// xxxxxxxxxxxxxxx Function for Admin Sign Out xxxxxxxxxxxxxxx
function employeeSignOut(){
    swal({
        type: 'success',
        title:'Successfully Sign Out',
    }).then((value)=>{
        window.location.replace("../index.html");
    });
}
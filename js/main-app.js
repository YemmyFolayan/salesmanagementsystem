// xxxxxxxxxxxxxxxxxxxx Functions for Tabs and Forms xxxxxxxxxxxxxxxxxxxx
function showAdminForm(){
    // xxxxxxxxxxxxxxxxxxxx Tab Feilds xxxxxxxxxxxxxxxxxxxx
    var adminForm = document.getElementById("adminForm");
    var employeeSignInForm = document.getElementById("employeeSignInForm");
    var employeeSignUpForm = document.getElementById("employeeSignUpForm");
    var adminTab = document.getElementById("adminTab");
    var adminTabIcon = document.getElementById("adminTabIcon");
    var employeeTab = document.getElementById("employeeTab");
    var employeeTabIcon = document.getElementById("employeeTabIcon");

    // xxxxxxxxxxxxxxxxxxxx User Sign In Feilds xxxxxxxxxxxxxxxxxxxx
    var userSiEmail = document.getElementById("userSiEmail");
    var userSiPassword = document.getElementById("userSiPassword");
    var userSiEmailError = document.getElementById("userSiEmailError");
    var userSiPasswordError = document.getElementById("userSiPasswordError");
    
    // xxxxxxxxxxxxxxxxxxxx User Sign Up Feilds xxxxxxxxxxxxxxxxxxxx
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var userName = document.getElementById("userName");
    var userEmail = document.getElementById("userEmail");
    var userPassword = document.getElementById("userPassword");
    var userConfirmPass = document.getElementById("userConfirmPass");
    var checkTnC = document.getElementById("checkTnC");
    
    var firstNameError = document.getElementById("firstNameError");
    var lastNameError = document.getElementById("lastNameError");
    var userNameError = document.getElementById("userNameError");
    var userEmailError = document.getElementById("userEmailError");
    var userPasswordError = document.getElementById("userPasswordError");
    var userConfirmPassError = document.getElementById("userConfirmPassError");
    var checkTnCError = document.getElementById("checkTnCError");
    
    // xxxxxxxxxxxxxxxxxxxx Show Data xxxxxxxxxxxxxxxxxxxx
    adminForm.style.display = "block";
    employeeSignInForm.style.display = "none";
    employeeSignUpForm.style.display = "none";
    adminTab.style.color = "white";
    adminTabIcon.style.fontSize = "1.5rem";
    employeeTab.style.color = "rgba(0,0,0,.3)";
    employeeTabIcon.style.fontSize = "1rem"
    
    // xxxxxxxxxxxxxxxxxxxx Remove Data xxxxxxxxxxxxxxxxxxxx
    userSiEmail.value = "";
    userSiPassword.value = "";
    
    userSiEmailError.style.display = "none";
    userSiPasswordError.style.display = "none";
    
    firstName.value = "";
    lastName.value = "";
    userName.value = "";
    userEmail.value = "";
    userPassword.value = "";
    userConfirmPass.value = "";
    checkTnC.checked = false;

    firstNameError.style.display = "none";
    lastNameError.style.display = "none";
    userNameError.style.display = "none";
    userEmailError.style.display = "none";
    userPasswordError.style.display = "none";
    userConfirmPassError.style.display = "none";
    checkTnCError.style.display = "none";
}
function showEmployeeSignInForm(){
    // xxxxxxxxxxxxxxxxxxxx Tab Feilds xxxxxxxxxxxxxxxxxxxx
    var adminForm = document.getElementById("adminForm");
    var employeeSignInForm = document.getElementById("employeeSignInForm");
    var employeeSignUpForm = document.getElementById("employeeSignUpForm");
    var adminTab = document.getElementById("adminTab");
    var adminTabIcon = document.getElementById("adminTabIcon");
    var employeeTab = document.getElementById("employeeTab");
    var employeeTabIcon = document.getElementById("employeeTabIcon");
    // xxxxxxxxxxxxxxxxxxxx Admin Sign In Feilds xxxxxxxxxxxxxxxxxxxx
    var adminEmail = document.getElementById("adminEmail");
    var adminPassword = document.getElementById("adminPassword");

    var adminEmailError = document.getElementById("adminEmailError");
    var adminPasswordError = document.getElementById("adminPasswordError");
    // xxxxxxxxxxxxxxxxxxxx User Sign Up Feilds xxxxxxxxxxxxxxxxxxxx
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var userName = document.getElementById("userName");
    var userEmail = document.getElementById("userEmail");
    var userPassword = document.getElementById("userPassword");
    var userConfirmPass = document.getElementById("userConfirmPass");
    var checkTnC = document.getElementById("checkTnC");

    var firstNameError = document.getElementById("firstNameError");
    var lastNameError = document.getElementById("lastNameError");
    var userNameError = document.getElementById("userNameError");
    var userEmailError = document.getElementById("userEmailError");
    var userPasswordError = document.getElementById("userPasswordError");
    var userConfirmPassError = document.getElementById("userConfirmPassError");
    var checkTnCError = document.getElementById("checkTnCError");

    // xxxxxxxxxxxxxxxxxxxx Show Data xxxxxxxxxxxxxxxxxxxx
    adminForm.style.display = "none"
    employeeSignInForm.style.display = "block"
    employeeSignUpForm.style.display = "none"
    adminTab.style.color = "rgba(0,0,0,.3)"
    adminTabIcon.style.fontSize = "1rem"
    employeeTab.style.color = "white"
    employeeTabIcon.style.fontSize = "1.5rem"
    
    // xxxxxxxxxxxxxxxxxxxx Remove Data xxxxxxxxxxxxxxxxxxxx
    adminEmail.value = "";
    adminPassword.value = "";

    adminEmailError.style.display = "none";
    adminPasswordError.style.display = "none";

    firstName.value = "";
    lastName.value = "";
    userName.value = "";
    userEmail.value = "";
    userPassword.value = "";
    userConfirmPass.value = "";
    checkTnC.checked = false;

    firstNameError.style.display = "none";
    lastNameError.style.display = "none";
    userNameError.style.display = "none";
    userEmailError.style.display = "none";
    userPasswordError.style.display = "none";
    userConfirmPassError.style.display = "none";
    checkTnCError.style.display = "none";
}
function showEmployeeSignUpForm(){
    // xxxxxxxxxxxxxxxxxxxx Tab Feilds xxxxxxxxxxxxxxxxxxxx
    var adminForm = document.getElementById("adminForm");
    var employeeSignInForm = document.getElementById("employeeSignInForm");
    var employeeSignUpForm = document.getElementById("employeeSignUpForm");
    var adminTab = document.getElementById("adminTab");
    var adminTabIcon = document.getElementById("adminTabIcon");
    var employeeTab = document.getElementById("employeeTab");
    var employeeTabIcon = document.getElementById("employeeTabIcon");
    // xxxxxxxxxxxxxxxxxxxx Admin Sign In Feilds xxxxxxxxxxxxxxxxxxxx
    var adminEmail = document.getElementById("adminEmail");
    var adminPassword = document.getElementById("adminPassword");
    var adminEmailError = document.getElementById("adminEmailError");
    var adminPasswordError = document.getElementById("adminPasswordError");

    // xxxxxxxxxxxxxxxxxxxx User Sign In Feilds xxxxxxxxxxxxxxxxxxxx
    var userSiEmail = document.getElementById("userSiEmail");
    var userSiPassword = document.getElementById("userSiPassword");
    var userSiEmailError = document.getElementById("userSiEmailError");
    var userSiPasswordError = document.getElementById("userSiPasswordError");
    
    // xxxxxxxxxxxxxxxxxxxx Show Data xxxxxxxxxxxxxxxxxxxx
    adminForm.style.display = "none"
    employeeSignInForm.style.display = "none"
    employeeSignUpForm.style.display = "block"
    adminTab.style.color = "rgba(0,0,0,.3)"
    adminTabIcon.style.fontSize = "1rem"
    employeeTab.style.color = "white"
    employeeTabIcon.style.fontSize = "1.5rem"

    // xxxxxxxxxxxxxxxxxxxx Remove Data xxxxxxxxxxxxxxxxxxxx
    adminEmail.value = "";
    adminPassword.value = "";
    adminEmailError.style.display = "none";
    adminPasswordError.style.display = "none";
    
    userSiEmail.value = "";
    userSiPassword.value = "";
    userSiEmailError.style.display = "none";
    userSiPasswordError.style.display = "none";
}
function adminSignIn(){
    var adminEmail = document.getElementById("adminEmail").value;
    var adminPassword = document.getElementById("adminPassword").value;
    if(adminEmail === "admin@gmail.com" && adminPassword === "system123"){
        swal({
            type: 'success',
            title:'Successfully Sign In',
        }).then((value)=>{
            document.getElementById("adminEmail").value = "";
            document.getElementById("adminPassword").value = "";
            window.location.replace("./pages/admin-dashboard.html");
        });
    }else{
        var adminEmailError = document.getElementById("adminEmailError"); 
        var adminPasswordError = document.getElementById("adminPasswordError");
        adminEmailError.style.display = "block"
        adminPasswordError.style.display = "block"
    }
}

// xxxxxxxxxxxxxxxxxxxx Check input feilds of employee sign up form xxxxxxxxxxxxxxxxxxxx
function checkFirstName(){
    var firstName = document.getElementById("firstName");
    var firstNameFormate = /^[A-Za-z]+$/;
    var flag;
    if(firstName.value.match(firstNameFormate)){
        flag = false
    }else{
        flag = true
    }
    if(flag){
        document.getElementById("firstNameError").style.display = "block"
    }else{
        document.getElementById("firstNameError").style.display = "none"
    }
}
function checkLastName(){
    var lastName = document.getElementById("lastName");
    var lastNameFormate = /^[A-Za-z]+$/;
    var flag;
    if(lastName.value.match(lastNameFormate)){
        flag = false
    }else{
        flag = true
    }
    if(flag){
        document.getElementById("lastNameError").style.display = "block"
    }else{
        document.getElementById("lastNameError").style.display = "none"
    }
}
function checkUserName(){
    var userName = document.getElementById("userName");
    var userNameFormate = /^[a-zA-Z0-9].{8,}/;
    var flag;
    if(userName.value.match(userNameFormate)){
        flag = false
    }else{
        flag = true
    }
    if(flag){
        document.getElementById("userNameError").style.display = "block"
    }else{
        document.getElementById("userNameError").style.display = "none"
    }
}
function checkUserEmail(){
    var userEmail = document.getElementById("userEmail");
    var userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag;
    if(userEmail.value.match(userEmailFormate)){
        flag = false
    }else{
        flag = true
    }
    if(flag){
        document.getElementById("userEmailError").style.display = "block"
    }else{
        document.getElementById("userEmailError").style.display = "none"
    }
}
function checkUserPassword(){
    var userPassword = document.getElementById("userPassword");
    var userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;
    var flag;
    if(userPassword.value.match(userPasswordFormate)){
        flag = false
    }else{
        flag = true
    }
    if(flag){
        document.getElementById("userPasswordError").style.display = "block"
    }else{
        document.getElementById("userPasswordError").style.display = "none"
    }
}
function checkUserConfirmPass(){
    var userConfirmPass = document.getElementById("userConfirmPass");
    var userConfirmPassFormate = document.getElementById("userPassword").value;
    var flag;
    if(userConfirmPass.value.match(userConfirmPassFormate)){
        flag = false
    }else{
        flag = true
    }
    if(flag){
        document.getElementById("userConfirmPassError").style.display = "block"
    }else{
        document.getElementById("userConfirmPassError").style.display = "none"
    }
}
function checkcheckTnC(){
    var checkTnC = document.getElementById("checkTnC").checked;
    var flag;
    if(checkTnC){
        flag = false
    }else{
        flag = true
    }
    if(flag){
        document.getElementById("checkTnCError").style.display = "block";
    }else{
        document.getElementById("checkTnCError").style.display = "none";
    }
}
// xxxxxxxxxxxxxxxxxxxx Employee Sign Up xxxxxxxxxxxxxxxxxxxx
function employeeSignUp(){
    var firstName = document.getElementById("firstName");
    var firstNameFormate = /^[A-Za-z]+$/;
    var lastName = document.getElementById("lastName");
    var lastNameFormate = /^[A-Za-z]+$/;
    var userName = document.getElementById("userName");
    var userNameFormate = /^[a-zA-Z0-9].{8,}/;
    var userEmail = document.getElementById("userEmail");
    var userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var userPassword = document.getElementById("userPassword");
    var userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;
    var userConfirmPass = document.getElementById("userConfirmPass");
    var userConfirmPassFormate = document.getElementById("userPassword").value;
    var checkTnC = document.getElementById("checkTnC").checked;
    if((firstName.value.match(firstNameFormate)) === null){
        return checkFirstName();
    }else if((lastName.value.match(lastNameFormate)) === null){
        return checkFirstName();
    }else if((userName.value.match(userNameFormate)) === null){
        return checkFirstName();
    }else if((userEmail.value.match(userEmailFormate)) === null){
        return checkFirstName();
    }else if((userPassword.value.match(userPasswordFormate)) === null){
        return checkFirstName();
    }else if((userConfirmPass.value.match(userConfirmPassFormate)) === null){
        return checkFirstName();
    }else if(checkTnC === false){
        return checkcheckTnC();
    }else{
        var employeeDetail = {
            firstName: firstName.value,
            lastName: lastName.value,
            userName: userName.value,
            userEmail: userEmail.value,
            userPassword: userPassword.value 
        }
        var storeData = localStorage.setItem("employeeDetail", JSON.stringify(employeeDetail));
        swal('Account Successfully Created','Your account has been successfully created. Now you can Sign In to your account','success'
        ).then((value)=>{
            setTimeout(function(){
                return showEmployeeSignInForm();
            }, 1000)
        });   
    }
}
function employeeSignIn(){
    var userSiEmail = document.getElementById("userSiEmail").value;
    var userSiPassword = document.getElementById("userSiPassword").value;
    
    var getEmployeeDetail = localStorage.getItem("employeeDetail");
    var convertLocalToObj = JSON.parse(getEmployeeDetail);
    var employeeDetail = convertLocalToObj;
    if(getEmployeeDetail === null){
        swal({
            type: 'error',
            title:'Not Registered',
            text: 'Please create your account first then sign in.'
            }).then((value)=>{
                document.getElementById("userSiEmail").value = "";
                document.getElementById("userSiPassword").value = "";
                setTimeout(function(){
                    return showEmployeeSignUpForm();
                }, 1000)
            });
        }else{
            if(userSiEmail === employeeDetail.userEmail && userSiPassword === employeeDetail.userPassword){
                swal({
                    type: 'success',
                    title:'Successfully Sign In',
                }).then((value)=>{
                    document.getElementById("userSiEmail").value = "";
                    document.getElementById("userSiPassword").value = "";
                    setTimeout(function(){
                        window.location.replace("./pages/employee-dashboard.html");
                    }, 1000)
                });
            }else{
                swal('Failed to Sign In','Enter a correct Email or Password Or If you do not have an account, Click on sign up','error'
                ).then((value)=>{
                    document.getElementById("userSiEmail").value = "";
                    document.getElementById("userSiPassword").value = "";
            });
        }
    }
}


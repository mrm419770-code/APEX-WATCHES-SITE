function initUsers() {
    if (!localStorage.getItem("admins")) {
        let admin = [
            {
                id: 1,
                name: "admin",
                email: "admin@gmail.com",
                password: "000",
                role: "admin",
            },
        ];
        let admins = JSON.stringify(admin);
        localStorage.setItem("admins", admins);
    }

    if (!localStorage.getItem("users")) {
        let user = [
            {
                id: 100,
                name: "user",
                email: "user@gmail.com",
                password: "user",
                role: "customer",
            },
        ];
        let users = JSON.stringify(user);
        localStorage.setItem("users", users);
    }

    console.log("Admins and users successfully initialized in localStorage.");
}

function login(email, password) {
    const admins = JSON.parse(localStorage.getItem("admins")) || [];
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const allAccounts = [...admins, ...users];

    const foundUser = allAccounts.find(
        (acc) => acc.email === email && acc.password === password,
    );

    if (foundUser) {
        const currentUser = {
            id: foundUser.id,
            name: foundUser.name,
            email: foundUser.email,
            role: foundUser.role || "customer",
        };

        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        return true;
    }

    return false;
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser")) || null;
}

function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
}


// notes using the fun : 
// if (login(emailInput, passwordInput)) 
//  get currentUser

//   if user.role === 'admin'
//     go to admin dashboard
//    else 
//     go to index dahsboard
  
//  else 
//   not valid


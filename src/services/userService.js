//ذخیره کاربر
const saveUser = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    return userData;
};

// خواندن کاربر
const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

// حذف کاربر
const removeUser = () => {
    localStorage.removeItem("user");
};
export { saveUser, getUser, removeUser };
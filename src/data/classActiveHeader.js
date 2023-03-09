const addClassActiveHeader = () => {
    const header = document.querySelector('header');

    if(path === "/profile") {
        header.add.classList = 'active';
    }
}
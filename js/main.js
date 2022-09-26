let headerContainer = document.querySelector('#header');

function createHeader() {
    let header = `
<div class="container">
            <div class="header-area d-m-flex justify-content-space-between">
                <div class="header-top d-m-flex">
                    <div class="logo t-c">
                        <a href="#"><img src="img/logo.png" alt="logo"></a>
                    </div>
                    <div class="search-bar t-c">
                        <form action="#" class="p-relative">
                            <input type="text" name="search" placeholder="Search..."
                                class="bg-white c-lightGray outline-0 b-0 b-rd-3 w-100">
                            <button type="submit"
                                class="bg-gray c-red outline-0 b-0 b-t-r-3 b-b-r-3 pointer p-absolute">
                                <i class="fas fa-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
                <nav class="bg-red p-xl-relative" id="navbar">
                    <ul class="d-xl-flex">
                        <li>
                            <a href="#" class="t-capitalize c-white d-xl-flex flex-d-xl-column align-items-xl-center fs-14">
                                <i class="fas fa-home"></i>
                                home
                            </a>
                        </li>
                        <li>
                            <a href="#" class="t-capitalize c-white d-xl-flex flex-d-xl-column align-items-xl-center fs-14">
                                <i class="fas fa-building"></i>
                                companies
                            </a>
                        </li>
                        <li>
                            <a href="#" class="t-capitalize c-white d-xl-flex flex-d-xl-column align-items-xl-center fs-14">
                                <i class="fas fa-puzzle-piece"></i>
                                projects
                            </a>
                        </li>
                        <li>
                            <a href="#" class="t-capitalize c-white d-xl-flex flex-d-xl-column align-items-xl-center fs-14">
                                <i class="fas fa-users"></i>
                                profiles
                            </a>
                        </li>
                        <li>
                            <a href="#" class="t-capitalize c-white d-xl-flex flex-d-xl-column align-items-xl-center fs-14">
                                <i class="fas fa-briefcase"></i>
                                jobs
                            </a>
                        </li>
                        <li>
                            <a href="#" class="t-capitalize c-white d-xl-flex flex-d-xl-column align-items-xl-center fs-14">
                                <i class="fas fa-envelope"></i>
                                messages
                            </a>
                        </li>
                        <li>
                            <a href="#" class="t-capitalize c-white d-xl-flex flex-d-xl-column align-items-xl-center fs-14">
                                <i class="far fa-bell"></i>
                                notification
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="user-info d-flex align-items-center justify-content-space-between">
                    <div class="info d-flex align-items-center">
                        <img src="img/user-pic.png" alt="user">
                        <span class="c-white">John</span>
                    </div>
                    <i class="fas fa-bars c-white pointer d-xl-none"></i>
                </div>
            </div>
        </div>
`;
    headerContainer.innerHTML = header;
}

createHeader();

let btnMenu = document.querySelector('.user-info .fa-bars');
let menu = document.querySelector('#navbar');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});
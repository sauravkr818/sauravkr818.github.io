let navbar = `<div class="navbar navbar-expand-lg navbar-light fixed-top shadow glass-morphism">
<a class="navbar-brand ms-auto me-auto ps-5" href="#"><img src="/avatar/icon.png" class="img-fluid my-auto" style="width:30px;">Saurav Kumar</a>
<button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse justify-content-lg-end ms-sm-2 me-lg-5" id="navbarNavDropdown">
    <ul class="navbar-nav align-items-center">
        <li class="nav-item">
            <a class="nav-link active color" aria-current="page" href="#home"> <i class="fas fa-home pe-1" style="color:#845ef7;"></i>Home</a>
        </li>
        <li class="nav-item me-2">
            <a class="nav-link active color" href="#aboutme"><i class="fas fa-user pe-1" style="color:#845ef7;"></i>About me</a>
        </li>
        <li class="nav-item me-2">
            <a class="nav-link color" href="#projects"><i class="fas fa-project-diagram pe-1" style="color:#845ef7;"></i>Projects</a>
        </li>
        <li class="nav-item me-2">
            <a class="nav-link color" href="#"><i class="fas fa-address-card pe-1" style="color:#845ef7;"></i>Contact</a>
        </li>
        <li class="nav-item me-2">
            <a class="nav-link color" href="./blog.html"><i class="fas fa-blog pe-1" style="color:#845ef7;"></i>Blog</a>
        </li>
        <li class="nav-item dropdown pe-lg-5">
            <a class="nav-link dropdown-toggle color" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-info pe-1" style="color:#845ef7;"></i> More
            </a>

            <ul class="dropdown-menu slide-top w-25" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item color" href="#">Incredible INDIA</a></li>
                <li><a class="dropdown-item color" href="#">Info 2</a></li>
                <li>
                    <a class="dropdown-item color" href="#">Info 3</a>
                </li>
            </ul>
        </li>
    </ul>
</div>
</div>
`
$("#navbar").html(navbar);
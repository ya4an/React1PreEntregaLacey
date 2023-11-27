
export const Nave = () => {
  return (
    <nav class="nav-container-block">
            <div class="header-container-flex">
                <div class="header-search-nav">
                    <input class="input-search" type="text" id="search"  placeholder="Buscar producto o marca"/>
                    <div class="container-img-search">
                        <img class="img-search" src="../src/assets/icons/search.svg" alt="logosearch"/>
                    </div>
                    
                </div>
                
                <ul class="header-menuInfo-nav">
                    <li class="menuInfo-nav-item">Sobre nosotros</li>
                    <li class="menuInfo-nav-item">Contacto</li>
                    <li class="menuInfo-nav-item">Sucursales</li>
                    <li class="menuInfo-nav-item">Servicios</li>
                    <li class="menuInfo-nav-item">Sustentable</li>
                </ul>
            </div>
            <div class="preMenu-containerFlex">
                <div class="preMenu-logo">
                    <img class="logoPage" src="../src/assets/logos/eden_gardens.png" alt="logopagina"/>
                </div>
                <div class="preMenu-redes">
                    <div class="container-red">
                        <img class="logoRed" src="../src/assets/icons/whatsapp-logo-2449.svg" alt="wsp"/>
                        <p>2326-353453</p>
                    </div>
                    <div class="container-red">
                        <img class="logoRed" src="../src/assets/icons/instagram-logo-8869.svg" alt="intagram"/>
                        <p>@company</p>
                    </div>
                    
                </div>
            </div>
            <div class="menu-containerFlex">
                <ul class="menu-nav">
                    <li class="menu-nav-item">Plantas</li>
                    <li class="menu-nav-item">Semillas</li>
                    <li class="menu-nav-item">Masetas</li>
                    <li class="menu-nav-item">Herramientas</li>
                    <li class="menu-nav-item">Maquinas</li>
                </ul>
            </div>
        </nav>
  )
}

 
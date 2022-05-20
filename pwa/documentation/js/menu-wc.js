'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">easygarden-angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-e885a179eed98f85ed49f5b8d0cd1bbb9910001272fe136fc831a2b4ac3b9bf3c247d562d6e110622e8d092a565714c68b214cee5f2f3279211b7546c4560b85"' : 'data-target="#xs-components-links-module-AppModule-e885a179eed98f85ed49f5b8d0cd1bbb9910001272fe136fc831a2b4ac3b9bf3c247d562d6e110622e8d092a565714c68b214cee5f2f3279211b7546c4560b85"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e885a179eed98f85ed49f5b8d0cd1bbb9910001272fe136fc831a2b4ac3b9bf3c247d562d6e110622e8d092a565714c68b214cee5f2f3279211b7546c4560b85"' :
                                            'id="xs-components-links-module-AppModule-e885a179eed98f85ed49f5b8d0cd1bbb9910001272fe136fc831a2b4ac3b9bf3c247d562d6e110622e8d092a565714c68b214cee5f2f3279211b7546c4560b85"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EasygardenModule.html" data-type="entity-link" >EasygardenModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EasygardenModule-8bfd0152d4b9b9588b6957e2913cec4935d270fc7a8547ff4c345c00bcda3a11cf655cca2b9a448dc4f3ef0e8d6983f3ddf8fdfe4dfea0a81ee439e599320282"' : 'data-target="#xs-components-links-module-EasygardenModule-8bfd0152d4b9b9588b6957e2913cec4935d270fc7a8547ff4c345c00bcda3a11cf655cca2b9a448dc4f3ef0e8d6983f3ddf8fdfe4dfea0a81ee439e599320282"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EasygardenModule-8bfd0152d4b9b9588b6957e2913cec4935d270fc7a8547ff4c345c00bcda3a11cf655cca2b9a448dc4f3ef0e8d6983f3ddf8fdfe4dfea0a81ee439e599320282"' :
                                            'id="xs-components-links-module-EasygardenModule-8bfd0152d4b9b9588b6957e2913cec4935d270fc7a8547ff4c345c00bcda3a11cf655cca2b9a448dc4f3ef0e8d6983f3ddf8fdfe4dfea0a81ee439e599320282"' }>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EasygardenRoutingModule.html" data-type="entity-link" >EasygardenRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LawnmowerModule.html" data-type="entity-link" >LawnmowerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LawnmowerModule-080a446d4e523955d1e2e4d6ee9af6bd45a6247fa17bd04455d1d4805bdd224180c0ec42f2944bf4cbbc08218dff384dc7e69b3f3b4484f44aec18c7f6e40672"' : 'data-target="#xs-components-links-module-LawnmowerModule-080a446d4e523955d1e2e4d6ee9af6bd45a6247fa17bd04455d1d4805bdd224180c0ec42f2944bf4cbbc08218dff384dc7e69b3f3b4484f44aec18c7f6e40672"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LawnmowerModule-080a446d4e523955d1e2e4d6ee9af6bd45a6247fa17bd04455d1d4805bdd224180c0ec42f2944bf4cbbc08218dff384dc7e69b3f3b4484f44aec18c7f6e40672"' :
                                            'id="xs-components-links-module-LawnmowerModule-080a446d4e523955d1e2e4d6ee9af6bd45a6247fa17bd04455d1d4805bdd224180c0ec42f2944bf4cbbc08218dff384dc7e69b3f3b4484f44aec18c7f6e40672"' }>
                                            <li class="link">
                                                <a href="components/LawnmowerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LawnmowerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LawnmowerRoutingModule.html" data-type="entity-link" >LawnmowerRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LightningModule.html" data-type="entity-link" >LightningModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LightningModule-52ccd2a5991b337c64a37d35f16f2f617be586bf433e702302a1331cbc55681678b801fce6ba4b034ce704657fafdd91afcb7a516298c3d6ba57411f43efcb0f"' : 'data-target="#xs-components-links-module-LightningModule-52ccd2a5991b337c64a37d35f16f2f617be586bf433e702302a1331cbc55681678b801fce6ba4b034ce704657fafdd91afcb7a516298c3d6ba57411f43efcb0f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LightningModule-52ccd2a5991b337c64a37d35f16f2f617be586bf433e702302a1331cbc55681678b801fce6ba4b034ce704657fafdd91afcb7a516298c3d6ba57411f43efcb0f"' :
                                            'id="xs-components-links-module-LightningModule-52ccd2a5991b337c64a37d35f16f2f617be586bf433e702302a1331cbc55681678b801fce6ba4b034ce704657fafdd91afcb7a516298c3d6ba57411f43efcb0f"' }>
                                            <li class="link">
                                                <a href="components/LightningComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LightningComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LightningRoutingModule.html" data-type="entity-link" >LightningRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PoolModule.html" data-type="entity-link" >PoolModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PoolModule-936c40c1adb4d776b0f56924787de73a4eeba7cb7403f907bbd577442803b353271547feebaa79334148ff00b96bcdfba5f8c64f6cc6aba3030c048050a95913"' : 'data-target="#xs-components-links-module-PoolModule-936c40c1adb4d776b0f56924787de73a4eeba7cb7403f907bbd577442803b353271547feebaa79334148ff00b96bcdfba5f8c64f6cc6aba3030c048050a95913"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PoolModule-936c40c1adb4d776b0f56924787de73a4eeba7cb7403f907bbd577442803b353271547feebaa79334148ff00b96bcdfba5f8c64f6cc6aba3030c048050a95913"' :
                                            'id="xs-components-links-module-PoolModule-936c40c1adb4d776b0f56924787de73a4eeba7cb7403f907bbd577442803b353271547feebaa79334148ff00b96bcdfba5f8c64f6cc6aba3030c048050a95913"' }>
                                            <li class="link">
                                                <a href="components/PoolComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PoolComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PoolRoutingModule.html" data-type="entity-link" >PoolRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PortalModule.html" data-type="entity-link" >PortalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PortalModule-066d9839552cbb170b56feaa1e9c286500e451b98afb0e57b8192186a6225c42b0f010a0018d5b69b06030885ab1f9f40a3881351a919e243b71bf4eb79c79e9"' : 'data-target="#xs-components-links-module-PortalModule-066d9839552cbb170b56feaa1e9c286500e451b98afb0e57b8192186a6225c42b0f010a0018d5b69b06030885ab1f9f40a3881351a919e243b71bf4eb79c79e9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PortalModule-066d9839552cbb170b56feaa1e9c286500e451b98afb0e57b8192186a6225c42b0f010a0018d5b69b06030885ab1f9f40a3881351a919e243b71bf4eb79c79e9"' :
                                            'id="xs-components-links-module-PortalModule-066d9839552cbb170b56feaa1e9c286500e451b98afb0e57b8192186a6225c42b0f010a0018d5b69b06030885ab1f9f40a3881351a919e243b71bf4eb79c79e9"' }>
                                            <li class="link">
                                                <a href="components/PortalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PortalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PortalRoutingModule.html" data-type="entity-link" >PortalRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilModule.html" data-type="entity-link" >ProfilModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfilModule-728d482d5c66450ebf8266bc69b803e36f7a87fd11ad94ea5361591094d298d5c7f332888036b397cfae5355c3500cb3a5218ae364e55d63b5367c96e3ee4aa7"' : 'data-target="#xs-components-links-module-ProfilModule-728d482d5c66450ebf8266bc69b803e36f7a87fd11ad94ea5361591094d298d5c7f332888036b397cfae5355c3500cb3a5218ae364e55d63b5367c96e3ee4aa7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfilModule-728d482d5c66450ebf8266bc69b803e36f7a87fd11ad94ea5361591094d298d5c7f332888036b397cfae5355c3500cb3a5218ae364e55d63b5367c96e3ee4aa7"' :
                                            'id="xs-components-links-module-ProfilModule-728d482d5c66450ebf8266bc69b803e36f7a87fd11ad94ea5361591094d298d5c7f332888036b397cfae5355c3500cb3a5218ae364e55d63b5367c96e3ee4aa7"' }>
                                            <li class="link">
                                                <a href="components/ProfilComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfilComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilRoutingModule.html" data-type="entity-link" >ProfilRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-547a7ae927d87422983eafb9886ceb3b6b642c9afcc39d43961e3b0503b5774cef7eb2a50fb342d5ccb46ee96b971dcbabf11bf21955d4b499b6360fb4b23b20"' : 'data-target="#xs-components-links-module-PublicModule-547a7ae927d87422983eafb9886ceb3b6b642c9afcc39d43961e3b0503b5774cef7eb2a50fb342d5ccb46ee96b971dcbabf11bf21955d4b499b6360fb4b23b20"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-547a7ae927d87422983eafb9886ceb3b6b642c9afcc39d43961e3b0503b5774cef7eb2a50fb342d5ccb46ee96b971dcbabf11bf21955d4b499b6360fb4b23b20"' :
                                            'id="xs-components-links-module-PublicModule-547a7ae927d87422983eafb9886ceb3b6b642c9afcc39d43961e3b0503b5774cef7eb2a50fb342d5ccb46ee96b971dcbabf11bf21955d4b499b6360fb4b23b20"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link" >PublicRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WateringModule.html" data-type="entity-link" >WateringModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WateringModule-76b6ece2f0bd3785bea0d4e2081f7c14c2c2881276e81e87190696312a9d84228e589ef15b323cec7d3b0f23ba1e004f58707f6462ff8e7426a7790d96eec8f3"' : 'data-target="#xs-components-links-module-WateringModule-76b6ece2f0bd3785bea0d4e2081f7c14c2c2881276e81e87190696312a9d84228e589ef15b323cec7d3b0f23ba1e004f58707f6462ff8e7426a7790d96eec8f3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WateringModule-76b6ece2f0bd3785bea0d4e2081f7c14c2c2881276e81e87190696312a9d84228e589ef15b323cec7d3b0f23ba1e004f58707f6462ff8e7426a7790d96eec8f3"' :
                                            'id="xs-components-links-module-WateringModule-76b6ece2f0bd3785bea0d4e2081f7c14c2c2881276e81e87190696312a9d84228e589ef15b323cec7d3b0f23ba1e004f58707f6462ff8e7426a7790d96eec8f3"' }>
                                            <li class="link">
                                                <a href="components/WateringComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WateringComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WateringRoutingModule.html" data-type="entity-link" >WateringRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FormValidationService.html" data-type="entity-link" >FormValidationService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
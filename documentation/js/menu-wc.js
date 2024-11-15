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
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-0f3a7500b3e6dec92941b4b4b507122ab69325ce2b028f8de154f333e5173738273a92192bc518f72837ba97d47dda8073098f227527b62de320d9c2f3f428a6"' : 'data-bs-target="#xs-controllers-links-module-AppModule-0f3a7500b3e6dec92941b4b4b507122ab69325ce2b028f8de154f333e5173738273a92192bc518f72837ba97d47dda8073098f227527b62de320d9c2f3f428a6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-0f3a7500b3e6dec92941b4b4b507122ab69325ce2b028f8de154f333e5173738273a92192bc518f72837ba97d47dda8073098f227527b62de320d9c2f3f428a6"' :
                                            'id="xs-controllers-links-module-AppModule-0f3a7500b3e6dec92941b4b4b507122ab69325ce2b028f8de154f333e5173738273a92192bc518f72837ba97d47dda8073098f227527b62de320d9c2f3f428a6"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-0f3a7500b3e6dec92941b4b4b507122ab69325ce2b028f8de154f333e5173738273a92192bc518f72837ba97d47dda8073098f227527b62de320d9c2f3f428a6"' : 'data-bs-target="#xs-injectables-links-module-AppModule-0f3a7500b3e6dec92941b4b4b507122ab69325ce2b028f8de154f333e5173738273a92192bc518f72837ba97d47dda8073098f227527b62de320d9c2f3f428a6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-0f3a7500b3e6dec92941b4b4b507122ab69325ce2b028f8de154f333e5173738273a92192bc518f72837ba97d47dda8073098f227527b62de320d9c2f3f428a6"' :
                                        'id="xs-injectables-links-module-AppModule-0f3a7500b3e6dec92941b4b4b507122ab69325ce2b028f8de154f333e5173738273a92192bc518f72837ba97d47dda8073098f227527b62de320d9c2f3f428a6"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-fb6c43a9f35c78de10e14e2f39898e039f07e614434994d1526a648c566fc8c41015090c120f281b2da65c011ae8a513da3c4038027b06ba639c5c8a4856fba7"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-fb6c43a9f35c78de10e14e2f39898e039f07e614434994d1526a648c566fc8c41015090c120f281b2da65c011ae8a513da3c4038027b06ba639c5c8a4856fba7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-fb6c43a9f35c78de10e14e2f39898e039f07e614434994d1526a648c566fc8c41015090c120f281b2da65c011ae8a513da3c4038027b06ba639c5c8a4856fba7"' :
                                            'id="xs-controllers-links-module-AuthModule-fb6c43a9f35c78de10e14e2f39898e039f07e614434994d1526a648c566fc8c41015090c120f281b2da65c011ae8a513da3c4038027b06ba639c5c8a4856fba7"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-fb6c43a9f35c78de10e14e2f39898e039f07e614434994d1526a648c566fc8c41015090c120f281b2da65c011ae8a513da3c4038027b06ba639c5c8a4856fba7"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-fb6c43a9f35c78de10e14e2f39898e039f07e614434994d1526a648c566fc8c41015090c120f281b2da65c011ae8a513da3c4038027b06ba639c5c8a4856fba7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-fb6c43a9f35c78de10e14e2f39898e039f07e614434994d1526a648c566fc8c41015090c120f281b2da65c011ae8a513da3c4038027b06ba639c5c8a4856fba7"' :
                                        'id="xs-injectables-links-module-AuthModule-fb6c43a9f35c78de10e14e2f39898e039f07e614434994d1526a648c566fc8c41015090c120f281b2da65c011ae8a513da3c4038027b06ba639c5c8a4856fba7"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-6caa86395f486d5e042047bc10dbdba9009d2705cd6ef895583b55d17784fd6efebca55502832c522da93070466387dc03263dbe70ae67d117950c6dc6657a9f"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-6caa86395f486d5e042047bc10dbdba9009d2705cd6ef895583b55d17784fd6efebca55502832c522da93070466387dc03263dbe70ae67d117950c6dc6657a9f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-6caa86395f486d5e042047bc10dbdba9009d2705cd6ef895583b55d17784fd6efebca55502832c522da93070466387dc03263dbe70ae67d117950c6dc6657a9f"' :
                                            'id="xs-controllers-links-module-PostsModule-6caa86395f486d5e042047bc10dbdba9009d2705cd6ef895583b55d17784fd6efebca55502832c522da93070466387dc03263dbe70ae67d117950c6dc6657a9f"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-6caa86395f486d5e042047bc10dbdba9009d2705cd6ef895583b55d17784fd6efebca55502832c522da93070466387dc03263dbe70ae67d117950c6dc6657a9f"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-6caa86395f486d5e042047bc10dbdba9009d2705cd6ef895583b55d17784fd6efebca55502832c522da93070466387dc03263dbe70ae67d117950c6dc6657a9f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-6caa86395f486d5e042047bc10dbdba9009d2705cd6ef895583b55d17784fd6efebca55502832c522da93070466387dc03263dbe70ae67d117950c6dc6657a9f"' :
                                        'id="xs-injectables-links-module-PostsModule-6caa86395f486d5e042047bc10dbdba9009d2705cd6ef895583b55d17784fd6efebca55502832c522da93070466387dc03263dbe70ae67d117950c6dc6657a9f"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestModule.html" data-type="entity-link" >TestModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TestModule-f4d5043cf5f5162809895e9e9af275c49e134021abea1645b357fb77d87eb29274cf64e55bd566414548e4826d7d4a6862b96077949ba6e841ed1ac54c2cf711"' : 'data-bs-target="#xs-controllers-links-module-TestModule-f4d5043cf5f5162809895e9e9af275c49e134021abea1645b357fb77d87eb29274cf64e55bd566414548e4826d7d4a6862b96077949ba6e841ed1ac54c2cf711"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TestModule-f4d5043cf5f5162809895e9e9af275c49e134021abea1645b357fb77d87eb29274cf64e55bd566414548e4826d7d4a6862b96077949ba6e841ed1ac54c2cf711"' :
                                            'id="xs-controllers-links-module-TestModule-f4d5043cf5f5162809895e9e9af275c49e134021abea1645b357fb77d87eb29274cf64e55bd566414548e4826d7d4a6862b96077949ba6e841ed1ac54c2cf711"' }>
                                            <li class="link">
                                                <a href="controllers/TestController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TestController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TestModule-f4d5043cf5f5162809895e9e9af275c49e134021abea1645b357fb77d87eb29274cf64e55bd566414548e4826d7d4a6862b96077949ba6e841ed1ac54c2cf711"' : 'data-bs-target="#xs-injectables-links-module-TestModule-f4d5043cf5f5162809895e9e9af275c49e134021abea1645b357fb77d87eb29274cf64e55bd566414548e4826d7d4a6862b96077949ba6e841ed1ac54c2cf711"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TestModule-f4d5043cf5f5162809895e9e9af275c49e134021abea1645b357fb77d87eb29274cf64e55bd566414548e4826d7d4a6862b96077949ba6e841ed1ac54c2cf711"' :
                                        'id="xs-injectables-links-module-TestModule-f4d5043cf5f5162809895e9e9af275c49e134021abea1645b357fb77d87eb29274cf64e55bd566414548e4826d7d4a6862b96077949ba6e841ed1ac54c2cf711"' }>
                                        <li class="link">
                                            <a href="injectables/TestService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TestService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-b4e5bf6656b5a74b245989871e2ec6703bab76a29c4dd88c341b3a8b2f1942e4cb2a2ed3debe49338502e7b154ee2a8bc280ee7ce577f026a968f634202176e1"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-b4e5bf6656b5a74b245989871e2ec6703bab76a29c4dd88c341b3a8b2f1942e4cb2a2ed3debe49338502e7b154ee2a8bc280ee7ce577f026a968f634202176e1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-b4e5bf6656b5a74b245989871e2ec6703bab76a29c4dd88c341b3a8b2f1942e4cb2a2ed3debe49338502e7b154ee2a8bc280ee7ce577f026a968f634202176e1"' :
                                            'id="xs-controllers-links-module-UsersModule-b4e5bf6656b5a74b245989871e2ec6703bab76a29c4dd88c341b3a8b2f1942e4cb2a2ed3debe49338502e7b154ee2a8bc280ee7ce577f026a968f634202176e1"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-b4e5bf6656b5a74b245989871e2ec6703bab76a29c4dd88c341b3a8b2f1942e4cb2a2ed3debe49338502e7b154ee2a8bc280ee7ce577f026a968f634202176e1"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-b4e5bf6656b5a74b245989871e2ec6703bab76a29c4dd88c341b3a8b2f1942e4cb2a2ed3debe49338502e7b154ee2a8bc280ee7ce577f026a968f634202176e1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-b4e5bf6656b5a74b245989871e2ec6703bab76a29c4dd88c341b3a8b2f1942e4cb2a2ed3debe49338502e7b154ee2a8bc280ee7ce577f026a968f634202176e1"' :
                                        'id="xs-injectables-links-module-UsersModule-b4e5bf6656b5a74b245989871e2ec6703bab76a29c4dd88c341b3a8b2f1942e4cb2a2ed3debe49338502e7b154ee2a8bc280ee7ce577f026a968f634202176e1"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Auth.html" data-type="entity-link" >Auth</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAuthDto.html" data-type="entity-link" >CreateAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTestDto.html" data-type="entity-link" >CreateTestDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserDto.html" data-type="entity-link" >GetUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/metaOptionDTO.html" data-type="entity-link" >metaOptionDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Post.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="classes/Test.html" data-type="entity-link" >Test</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAuthDto.html" data-type="entity-link" >UpdateAuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePostDto.html" data-type="entity-link" >UpdatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTestDto.html" data-type="entity-link" >UpdateTestDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
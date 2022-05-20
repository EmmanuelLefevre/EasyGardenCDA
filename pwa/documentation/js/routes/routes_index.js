var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","loadChildren":"./public/public.module#PublicModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/public/public-routing.module.ts","module":"PublicRoutingModule","children":[{"path":"","component":"HomeComponent","children":[{"path":"","redirectTo":"home","pathMatch":"full"},{"path":"home","component":"HomeComponent"},{"path":"login","component":"LoginComponent"},{"path":"register","component":"RegisterComponent"}]}],"kind":"module"}],"module":"PublicModule"}]},{"path":"easygarden","loadChildren":"./easygarden/easygarden.module#EasygardenModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/easygarden/easygarden-routing.module.ts","module":"EasygardenRoutingModule","children":[{"path":"","component":"LayoutComponent","children":[{"path":"easygarden","component":"LayoutComponent"},{"path":"profil","loadChildren":"./modules/profil/profil.module#ProfilModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/easygarden/modules/profil/profil-routing.module.ts","module":"ProfilRoutingModule","children":[{"path":"","component":"ProfilComponent"}],"kind":"module"}],"module":"ProfilModule"}]},{"path":"watering","loadChildren":"./modules/watering/watering.module#WateringModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/easygarden/modules/watering/watering-routing.module.ts","module":"WateringRoutingModule","children":[{"path":"","component":"WateringComponent"}],"kind":"module"}],"module":"WateringModule"}]},{"path":"lightning","loadChildren":"./modules/lightning/lightning.module#LightningModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/easygarden/modules/lightning/lightning-routing.module.ts","module":"LightningRoutingModule","children":[{"path":"","component":"LightningComponent"}],"kind":"module"}],"module":"LightningModule"}]},{"path":"portal","loadChildren":"./modules/portal/portal.module#PortalModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/easygarden/modules/portal/portal-routing.module.ts","module":"PortalRoutingModule","children":[{"path":"","component":"PortalComponent"}],"kind":"module"}],"module":"PortalModule"}]},{"path":"pool","loadChildren":"./modules/pool/pool.module#PoolModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/easygarden/modules/pool/pool-routing.module.ts","module":"PoolRoutingModule","children":[{"path":"","component":"PoolComponent"}],"kind":"module"}],"module":"PoolModule"}]},{"path":"lawnmower","loadChildren":"./modules/lawnmower/lawnmower.module#LawnmowerModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/easygarden/modules/lawnmower/lawnmower-routing.module.ts","module":"LawnmowerRoutingModule","children":[{"path":"","component":"LawnmowerComponent"}],"kind":"module"}],"module":"LawnmowerModule"}]}]}],"kind":"module"}],"module":"EasygardenModule"}]},{"path":"**","component":"ErrorComponent"}],"kind":"module"}]}

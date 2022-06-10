Angular 11 

Introduction to Observable - RxJS Library

Angular Routing APIs

RouterModule
|__ forRoot(routes: Routes)
|__ Routes: Route[path: <url-name>]
|   |__Route[] (defined interface){ path, component, 
|__ routerLink - directive (It allows to navigate via DOM structure way)
    |__ [routerLink]=['<url-name>', <data...>]
	|__ route/navigate to the component

How the component to retrieve/receive the param data? http://localhost:4200/user/1 (string)
|__ ActivatedRoute (It allows to read the active url data/content)
|__ Router (It allows to navigate via programmatic way)

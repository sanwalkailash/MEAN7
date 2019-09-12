// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  API_HOST:"http://localhost:8899",
  API_LOGIN:"/login/v1",
  API_REGISTER: '/register/v1',
  API_LIST_USER: '/user/v1/',

  ROUTE_LOGIN:"login",
  ROUTE_HOME:"home",
  ROUTE_PAGE_NOT_FOUND:"pagenotfound"
};

export interface IRouter {
  label: string; // label for the route
  path: string; // path of the route
  formState?: Object; // form data for the route
  isActive: boolean; // is the route active
}

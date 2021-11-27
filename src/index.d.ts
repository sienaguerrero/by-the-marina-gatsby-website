declare module "*.jpg";
declare module "*.svg";
declare module "*.yaml" {
  const data: any;
  export default data;
}

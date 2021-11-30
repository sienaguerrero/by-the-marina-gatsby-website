declare module "*.jpg";
declare module "*.svg";
declare module "*.pdf";
declare module "*.yaml" {
  const data: any;
  export default data;
}

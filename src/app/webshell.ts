export interface Webshell {
  shortTags: boolean;
  shortEchoTags: boolean;
  ignoreErrors: boolean;
  paramName: string;
  vector: '_REQUEST' | '_GET' | '_POST' | '_COOKIE';
  vectorFunction: string;
}

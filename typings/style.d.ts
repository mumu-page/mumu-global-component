declare module '*.module.less' {
    const content: any;
    export = content;
}

declare global {
  interface Window {
    datav: any
  }
}
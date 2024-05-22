export interface IAppProvider {
    children: React.ReactNode;

  }

  export interface IAppContext {
title:string
  }


  export interface IJobRaw  {
    id:number,
    title:string,
    company:string,
    url:string,
    description:string,
    skillList:string,
    publicationDate:string,

    }
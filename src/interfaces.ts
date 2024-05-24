export interface IAppProvider {
    children: React.ReactNode;

  }

export interface IAppContext {

rawJobs:IJobRaw[],
rawSkills: { [key: string]: IRawSkill };
jobsLowdb:IJobRaw[]
deleteJob:(jobsLowdb:IJobRaw)=>void
  }



export interface IJobRaw  {
    id:number,
    title:string,
    company:string,
    url:string,
    description:string,
    skillList:string,
    publicationDate:string,
    skills:IRawSkill[],
    toDo:{
      text:string,
      url:string
    }
}






export  interface IRawSkill {
    idCode:string,
    name:string,
    url:string,
    description:string
}

export interface ISkill extends IRawSkill {
  isOpen:boolean
}
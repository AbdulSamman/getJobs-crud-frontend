export interface IAppProvider {
    children: React.ReactNode;

  }

export interface IAppContext {

rawJobs:IJobRaw[];
rawSkills: { [key: string]: ISkillsJson };
jobsLowdb:IJobRaw[];
deleteJob:(jobsLowdb:IJobRaw)=>void;
skillsLowdb:ISkill[];
handleToggleSkill:(skill:ISkill)=>void;

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


export interface ISkillsJson{
  idCode:string;
  name:string;
  url:string;
  description:string;

}



export  interface IRawSkill {
     idCode:string;
     name:string;
     url:string;
     description:string;
     total:number;
 }

export interface ISkill {
  skill:IRawSkill;
  isOpen:boolean;
  total:number;
  lookUp:string
}

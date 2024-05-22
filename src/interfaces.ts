export interface IAppProvider {
    children: React.ReactNode;

  }

export interface IAppContext {

rawJobs:IJobRaw[],
rawSkills: { [key: string]: IRawSkill };

  }



export interface IJobRaw  {
    id:number,
    title:string,
    company:string,
    url:string,
    description:string,
    skillList:string,
    publicationDate:string,
    skills:IRawSkill[]
}





export  interface IRawSkill {
idCode:string,
    name:string,
    url:string,
    description:string
}

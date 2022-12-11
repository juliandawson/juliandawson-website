type RoleType = "Full-time" | "Part-time" | "Contract" | "Freelance";

type LocationType = "Bath" | "Bristol" | "Carlisle" | "Nottingham";

interface Company {
  name: string;
  location: LocationType;
  website?: string;
}

interface Role {
  title: string;
  type: RoleType;
  startDate: Date;
  endDate?: Date;
  company?: Company;
}

interface Project {}

export interface Data {
  roles: Role[];
  projects: Project[];
}

const companies: Company[] = [
  { name: "Office Technology Corporation", location: "Carlisle" },
  { name: "Cumbria County Council", location: "Carlisle" },
  { name: "Wayvar Digital", location: "Bristol" },
  { name: "PolicyPlus International", location: "Bath" },
  { name: "Kings Court Trust", location: "Bath" },
  { name: "TLT", location: "Bristol" },
  { name: "DAS UK Group", location: "Bristol" },
  { name: "Cartwright King Solicitors", location: "Nottingham" },
  { name: "GL Law", location: "Bristol" },
  { name: "Shakespeare Martineau", location: "Bristol" },
];

const roles: Role[] = [
  {
    title: "IT Technician",
    type: "Part-time",
    company: companies[0],
    startDate: new Date("1995-11-17T00:00:00"),
    endDate: new Date("1995-11-17T00:00:00"),
  },
  {
    title: "Web Developer",
    type: "Freelance",
    startDate: new Date("1995-11-17T00:00:00"),
    endDate: new Date("1995-11-17T00:00:00"),
  },
  {
    title: "Network Engineer",
    type: "Contract",
    company: companies[1],
    startDate: new Date("1995-11-17T00:00:00"),
    endDate: new Date("1995-11-17T00:00:00"),
  },
  {
    title: "Graphic Designer",
    type: "Freelance",
    startDate: new Date("1995-11-17T00:00:00"),
    endDate: new Date("1995-11-17T00:00:00"),
  },
  {
    title: "Systems Administrator",
    type: "Full-time",
    company: companies[2],
    startDate: new Date("1995-11-17T00:00:00"),
    endDate: new Date("1995-11-17T00:00:00"),
  },
  {
    title: "Software Developer",
    type: "Contract",
    company: companies[2],
    startDate: new Date("2007-10-01T00:00:00"),
    endDate: new Date("2008-08-01T00:00:00"),
  },
  {
    title: "Systems Administrator",
    type: "Full-time",
    company: companies[3],
    startDate: new Date("2008-09-01T00:00:00"),
    endDate: new Date("2010-07-01T00:00:00"),
  },
  {
    title: "Systems Administrator",
    type: "Full-time",
    company: companies[4],
    startDate: new Date("2010-07-01T00:00:00"),
    endDate: new Date("2012-06-01T00:00:00"),
  },
  {
    title: "Infrastructure Analyst",
    type: "Full-time",
    company: companies[5],
    startDate: new Date("2012-06-01T00:00:00"),
    endDate: new Date("2012-11-01T00:00:00"),
  },
  {
    title: "Technical Architect",
    type: "Full-time",
    company: companies[5],
    startDate: new Date("2012-11-01T00:00:00"),
    endDate: new Date("2013-09-01T00:00:00"),
  },
  {
    title: "Lead Architect",
    type: "Full-time",
    company: companies[5],
    startDate: new Date("2013-09-01T00:00:00"),
    endDate: new Date("2014-11-01T00:00:00"),
  },
  {
    title: "Technical Consultant",
    type: "Contract",
    company: companies[6],
    startDate: new Date("2015-01-01T00:00:00"),
    endDate: new Date("2015-12-01T00:00:00"),
  },
  {
    title: "Software Engineer",
    type: "Contract",
    company: companies[6],
    startDate: new Date("2015-12-17T00:00:00"),
    endDate: new Date("2017-05-01T00:00:00"),
  },
  {
    title: "IT Manager",
    type: "Full-time",
    company: companies[8],
    startDate: new Date("2017-05-01T00:00:00"),
    endDate: new Date("2019-09-01T00:00:00"),
  },
  {
    title: "IT Management Consultant",
    type: "Contract",
    company: companies[7],
    startDate: new Date("2019-02-01T00:00:00"),
    endDate: new Date("2019-05-01T00:00:00"),
  },
  {
    title: "Chief Operating Officer",
    type: "Full-time",
    company: companies[8],
    startDate: new Date("2019-09-01T00:00:00"),
    endDate: new Date("2021-08-01T00:00:00"),
  },
  {
    title: "Chief Technology Officer",
    type: "Full-time",
    company: companies[8],
    startDate: new Date("2021-08-01T00:00:00"),
    endDate: new Date("2022-10-01T00:00:00"),
  },
  {
    title: "Chief Technology Officer",
    type: "Full-time",
    company: companies[9],
    startDate: new Date("2022-10-01T00:00:00"),
  },
];

const projects: Project[] = [{}, {}];

export const data: Data = { roles, projects };

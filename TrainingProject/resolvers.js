import { createEmployee, getEmployees } from "./db/employee.js";

export const resolversExample = {
    Query: {
        employees: () => getEmployees(),
    },
    Employee:{
        skills : (employee) => {
            return skillsResponse.filter((skills) => skills.id === employee.id);
        },
        resignationDate: (employee) =>  toIsoDate(employee.resignation),
    },
    Mutation: {
        createEmployee: (_root, { name, resignationDate }) => {
          return createEmployee({ name, resignationDate });
        },
      },
};
const skillsResponse = [
    {
        id: '1',
        skill: 'Java'
    },
    {
        id:'2',
        skill: 'GraphQl'
    }
];

function toIsoDate(value) {
    if(!value) {
        return value;
    }
    return value.slice(0,"yyyy-mm-dd".length);
}

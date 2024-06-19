export const resolversExample = {
    Query: {
        employee: () => {
            return employees;
        },
    },
    oldEmployee:{
        skills : (employee) => {
            return skillsResponse.filter((skills) => skills.id === employee.id);
        },
    },
    currentEmployee:{
        skills : (employee) => {
            return skillsResponse.filter((skills) => skills.id === employee.id);
        },
    },
};
const skillsResponse = [
    {
        id: 1,
        skill: 'Java'
    },
    {
        id:2,
        skill: 'GraphQl'
    }
];

const employees = [
    {
    __typename: "oldEmployee",
    id: 1,
    name: 'Ramesh',
    resignationDate: '10-04-2024',
     },
    {
    __typename: "currentEmployee",
    id: 2,
    name: 'Suresh',
    },
];
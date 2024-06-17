export const resolversExample = {
    Query: {
        employee: () => {
            return [
                {
                __typename: "oldEmployee",
                id: 1,
                name: 'Ramesh',
                skills:skills,
                resignationDate: '10-04-2024',
                 },
                {
                __typename: "currentEmployee",
                id: 2,
                skills: skills,
                name: 'Suresh',
                },
            ];
        }
    },
};
const skills = [
    {
        skill: 'Java'
    },
    {
        skill: 'GraphQl'
    }
];
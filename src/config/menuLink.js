const menuLinks = [
  {
    title: 'Bundestagswahl 2017',
    id: 1,
    base: 'btw17',
    links: [
      {
        exact: false,
        link: '',
        name: 'Information',
      },
      {
        exact: true,
        link: 'login',
        name: 'Vote now',
      },
      {
        exact: true,
        link: 'outcome',
        name: 'Outcomes',
      },
      {
        exact: true,
        link: 'stats',
        name: 'Stats for nerds',
      },
    ],
  },
];

export default menuLinks;

export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62889de90b60f960715f299a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-okr1nyi4',
                  apiId: 'c4ba4401-b854-4a3d-b887-e7c576187e53'
                },
                {
                  buildHookId: '62889de9f4e87b641275f3d4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ptn4mg5i',
                  apiId: '042f3660-d6da-4a0e-befd-397230074dd3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chalisoftware/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ptn4mg5i.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

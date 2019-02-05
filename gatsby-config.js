module.exports = {
    siteMetadata: {
        title: `NDSU Cybersecurity Student Association`,
        titleShort: `NDSU CSA`,
        description: `The NDSU Cybersecurity Student Association strives to be the very best at any and all legal hacking activites.`,
        author: `Jack Hance`,
        school: `NDSU`,
        schoolFull: `North Dakota State University`,
        contactInfo: {
            president: {
                title: "Current Tresurer",
                name: "Lucas Miller",
                subTitle: "",
                email: "lucas.miller@ndsu.edu",
                phoneNumber: ""
            }
        }
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
    ],
}

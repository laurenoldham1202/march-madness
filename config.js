// var config = {
//     style: 'mapbox://styles/mapbox/streets-v11',
//     accessToken: 'YOUR_ACCESS_TOKEN',
//     showMarkers: true,
//     theme: 'light',
//     alignment: 'left',
//     title: 'The Title Text of this Story',
//     subtitle: 'A descriptive and interesting subtitle to draw in the reader',
//     byline: 'By a Digital Storyteller',
//     footer: 'Source: source citations, etc.',
//     chapters: [
//         {
//             id: 'slug-style-id',
//             title: 'Display Title',
//             image: './path/to/image/source.png',
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//             location: {
//                 center: [-122.418398, 37.759483],
//                 zoom: 13.5,
//                 pitch: 60,
//                 bearing: 0
//             },
//             onChapterEnter: [
//                 {
//                     layer: 'layer-name',
//                     opacity: 1
//                 }
//             ],
//             onChapterExit: [
//                 {
//                     layer: 'layer-name',
//                     opacity: 0
//                 }
//             ]
//         },
//         {
//             id: 'other-identifier',
//             title: 'Second Title',
//             image: './path/to/image/source.png',
//             description: 'Copy these sections to add to your story.',
//             location: {
//                 center: [-77.020636, 38.886900],
//                 zoom: 13.5,
//                 pitch: 60,
//                 bearing: -43.2
//             },
//             onChapterEnter: [],
//             onChapterExit: []
//         }
//     ]
// };

var config = {
    style: 'mapbox://styles/laurenoldham1202/ck9d9t3360puw1ilehqxfc0oa',
    accessToken: 'pk.eyJ1IjoibGF1cmVub2xkaGFtMTIwMiIsImEiOiJjaW55dm9lemUxOGc1dWttMzI5dDI5aGtvIn0.3xAukiULCDm0OId5yIgXOA',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'March Madness',
    subtitle: 'Distance of Top Seeded Schools',
    byline: '',
    footer: 'Map created by Lauren Oldham',
    chapters: [
        {
            id: 'glacier-np',
            title: 'Glacier National Park Glaciers',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg/800px-2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg',
            description: 'Glacier National Park is dominated by mountains which were carved into their present shapes by the huge glaciers of the last ice age. These glaciers have largely disappeared over the last 12,000 years. Evidence of widespread glacial action is found throughout the park in the form of U-shaped valleys, cirques, arêtes, and large outflow lakes radiating like fingers from the base of the highest peaks.',
            location: {
                center: [-112.5, 41.5],
                zoom: 3.75,
                pitch: 0.00,
                bearing: 0.00,
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-1998',
                    opacity: 0.25
                },
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-1998',
                    opacity: 0.25
                },
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0
                }
            ]
        },
        {
            id: 'harrison1998',
            title: 'Harrison Glacier, 1998',
            image: '',
            description: 'Harrison Glacier is located in the US state of Montana in Glacier National Park. Situated on a southeast facing ridge immediately south of Mount Jackson, Harrison Glacier is the largest glacier in Glacier National Park.',
            location: {
                center: [-113.72917, 48.58938],
                zoom: 12.92,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'final-chapter',
            title: '',
            image: '',
            description: ``,
            location: {
                center: [-113.72917, 48.58938],
                zoom: 12.92,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }

    ]
};

const config = {
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
            id: 'intro',
            // title: 'Introduction placeholder',
            // image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg/800px-2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg',
            description: `Every year in March, the top 68 Division 1 men's college basketball programs are selected to compete for the NCAA's national championship title in a single-elimination competition colloquially called March Madness. While the selection process and tournament format for March Madness have changed considerably since its inception in 1939, countless fans have become devoted to understanding and predicting the tournament field in the study of 'Bracketology.' The modern era of the tournament began in 1985 with a final field of 64 teams and preferential seeding to determine the year's bracket.`,
            location: {
                center: [-112.5, 41.5],
                zoom: 3.75,
                pitch: 0.00,
                bearing: 0.00,
            },
            onChapterEnter: [
                {
                    layer: 'd1',
                    opacity: 1
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
            id: 'chapter-1',
            // title: 'More details',
            image: '',
            description: `In theory, higher ranked teams are rewarded by playing the lowest ranked teams in the tournament. Furthermore, according to the NCAA's selection process, top seeded teams are to have geographic preference over lower seeded teams in the first two rounds of the tournament (if possible - other factors are considered). I want to analyze the first/second round sites for each of the top 4 seeded teams (four teams in each seed for 16 total top teams each year) from 1985 to 2020 to establish patterns, potential biases, and test the NCAA's claim of geographic preference.`,
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
            id: 'chapter-2',
            title: '',
            image: '',
            description: `Obsessed with so-called 'chaos,' college basketball fans thrive on the unpredictability of the first and second rounds of the NCAA tournament. While higher ranked/seeded teams are expected to make deep runs, it is not uncommon for them to get upset by lower ranked teams (sorry UVA fans). Teams want every advantage they can entering the first weekend of the tournament. The advantage of playing at a site closer to the school location is both pragmatic and psychological. The players are still attending classes, so it is logistically easier to travel shorter distances. Furthermore, playing closer to the school allows the team's fan base and families a better opportunity to watch them play, giving them as much of a home court advantage as possible.`,

             //  `The entire field of teams is ranked 1 to 68, with 1 being the top or best team overall, and 68
             // being the lowest/worst. The teams are further divided into four regions of sixteen teams each (only 64
             // teams make the official bracket), with top teams having higher seeds (1-4) and worse teams having lower
             // seeds (5-16). The NCAA Selection Committee rewards the best performing teams in the field by pitting them
             // against the worst performing teams through this system, wherein a better team plays against a worse team to
             // help pave an easier path to the National Championship game.`,

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
            id: 'chapter-3',
            title: '',
            image: '',
            // TODO add min and max for more of an overall story?
            description: `When looking at raw euclidean distances, the data falls in line with the NCAA's claim of 
            geographic preference for higher seeds, with 1 seeds averaging the shortest travel distance, 2 seeds averaging
            the second shortest travel distance, 3 seeds average the third shortest travel distance, and 4 seeds traveling
            the furthest of all seeds.
            
            <ul>
            <li>1: 376.4681913845625</li>
            <li>2: 513.247101929549</li>
            <li>3: 742.7582078752471</li>
            <li>4: 922.6727014730162</li>
            </ul>
            `,
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
            id: 'chapter-4',
            title: '',
            image: '',
            description: `One seeds averaged a travel distance of roughly 376 miles, approximately the same distance from
            Minneapolis, Minnesota to Kansas City, Missouri, where 1 seed University of Minnesota Golden Gophers played in 1997.
            `,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-5',
            title: '',
            image: '',
            description: `Two seeds averaged a travel distance of roughly 513 miles, approximately the same distance from
            Lexington, Kentucky to Jacksonville, Florida, where 2 seed University of Kentucky Wildcats played in 2019.
            `,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-6',
            title: '',
            image: '',
            description: `Three seeds averaged a travel distance of roughly 742 miles, approximately the same distance from
            Austin, Texas to Denver, Colorado, where 3 seed University of Texas Longhorns played in 2004.
            `,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-7',
            title: '',
            image: '',
            description: `Four seeds averaged a travel distance of roughly 922 miles, approximately the same distance from
            San Diego, California to Spokane, Washington, where 4 seed San Diego State University Aztecs played in 2014.
            `,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-8',
            title: '',
            image: '',
            description: `Viewing aggregations at the school level paints a more varied picture of travel distances during
            March Madness, ranging from a minimum travel distance of less than a mile to a maximum travel distance exceeding
            2800 miles. The overall mean distance traveled for all top four seeded schools from 1985 to 2019 was 639 miles; 
            the median distance traveled clocked in a bit lower at 413 miles, perhaps a more accurate representation that 
            lessens the influence of outliers.
            `,
            location: {
                center: [-112.5, 41.5],
                zoom: 3.75,
                pitch: 0.00,
                bearing: 0.00,
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-9',
            title: '',
            image: '',
            description: `The University of Arizona traveled the overall shortest distance, barely leaving campus to travel 
            less than half a mile to their first round site in Tucson in 2000 as a 1 seed. Unfortunately for the Wildcats,
            the close proximity didn't give them enough of a boost to beat out Wisconsin in the second round of the 
            tournament.`,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-10',
            title: '',
            image: '',
            description: `Overall maximum distance`,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-11',
            title: '',
            image: '',
            description: `Mean and median distance (unweighted)`,
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'chapter-12',
            title: '',
            image: '',
            description: `WEIGHTED description, Mean and median distance (weighted)`,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-13',
            title: '',
            image: '',
            description: `Minimum mean (weighted or unweighted?) `,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-14',
            title: '',
            image: '',
            description: `Maximum mean (weighted or unweighted?)`,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'final-chapter',
            title: '',
            image: '',
            description: `
            <div class="buttons" style="display: flex;">
              <button class="button" id="story-mode">Restart Story</button>
              <button class="button" id="explore-mode">Explore Map</button>
             </div>
            `,
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

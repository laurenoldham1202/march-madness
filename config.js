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
                {layer: 'd1-all', opacity: 1},
                {layer: 'schools', opacity: 0},
                {layer: 'd1-trim', opacity: 0},
            ],
            onChapterExit: [
                {layer: 'd1-all', opacity: 0.15},
                {layer: 'd1-trim', opacity: 1},
            ]
        },
        {
            id: 'chapter-1',
            // title: 'More details',
            image: '',
            description: `In theory, higher ranked teams are rewarded by playing the lowest ranked teams in the tournament. Furthermore, according to the NCAA's selection process, top seeded teams are to have geographic preference over lower seeded teams in the first two rounds of the tournament (if possible - other factors are considered). I want to analyze the first/second round sites for each of the top 4 seeded teams (four teams in each seed for 16 total top teams each year) from 1985 to 2020 to establish patterns, potential biases, and test the NCAA's claim of geographic preference.`,
            onChapterEnter: [
                {layer: 'd1-all', opacity: 0.15},
                {layer: 'd1-trim', opacity: 1},
            ],
            onChapterExit: [
                {layer: 'd1-all', opacity: 0},
                {layer: 'd1-trim', opacity: 0},
                {layer: 'schools', opacity: 0.7}
            ]
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

            // location: {
            //     center: [-113.72917, 48.58938],
            //     zoom: 12.92,
            //     pitch: 39.50,
            //     bearing: 36.00
            // },
            onChapterEnter: [
                // {layer: 'schools', opacity: 0},
                {layer: 'd1-all', opacity: 0},
                {layer: 'd1-trim', opacity: 0},
                {layer: 'schools', opacity: 0.7},

            ],
            onChapterExit: [
                {layer: 'd1-all', opacity: 1},
                {layer: 'd1-trim', opacity: 1},
                {layer: 'schools', opacity: 0},
            ]
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
   
            
            <div class="seed-hl-row">
                <div class="seed-hl" style="background: #80bad1">
                    <div class="seed-hl-title">1 SEED</div>
                    <div class="seed-hl-text">376 miles</div>
                </div> 
               
               <div class="seed-hl" style="background: #5694c1">
                    <div class="seed-hl-title">2 SEED</div>
                    <div class="seed-hl-text">513 miles</div>
                </div>
                       
               <div class="seed-hl" style="background: #2c6db1">
                    <div class="seed-hl-title">3 SEED</div>
                    <div class="seed-hl-text">743 miles</div>
                </div>
                       
               <div class="seed-hl" style="background: #0146a1">
                    <div class="seed-hl-title">4 SEED</div>
                    <div class="seed-hl-text">922 miles</div>
               </div>
            </div>
            `,
            location: {
                center: [-113.72917, 48.58938],
                zoom: 12.92,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [
                {layer: 'd1-all', opacity: 0},
                {layer: 'd1-trim', opacity: 0},
            ],
            onChapterExit: []
        },
        // {
        //     id: 'chapter-4',
        //     title: '',
        //     image: '',
        //     description: `One seeds averaged a travel distance of roughly 376 miles, approximately the same distance from
        //     Minneapolis, Minnesota to Kansas City, Missouri, where 1 seed University of Minnesota Golden Gophers played in 1997.
        //     `,
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'chapter-5',
        //     title: '',
        //     image: '',
        //     description: `Two seeds averaged a travel distance of roughly 513 miles, approximately the same distance from
        //     Lexington, Kentucky to Jacksonville, Florida, where 2 seed University of Kentucky Wildcats played in 2019.
        //     `,
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'chapter-6',
        //     title: '',
        //     image: '',
        //     description: `Three seeds averaged a travel distance of roughly 742 miles, approximately the same distance from
        //     Austin, Texas to Denver, Colorado, where 3 seed University of Texas Longhorns played in 2004.
        //     `,
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'chapter-7',
        //     title: '',
        //     image: '',
        //     description: `Four seeds averaged a travel distance of roughly 922 miles, approximately the same distance from
        //     San Diego, California to Spokane, Washington, where 4 seed San Diego State University Aztecs played in 2014.
        //     `,
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
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
            description: `The overall maximum distance traveled was by Syracuse University, who trekked over 2800 miles 
            from Syracuse, New York to Long Beach, California in 2013 as a 4 seed. The extra mileage didn't faze the Orange too much,
            who went on to compete in the Final Four, ultimately losing to Michigan in the semifinals.`,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-11',
            title: '',
            image: '',
            description: `The school with the lowest mean distance traveled is technically DePaul University, who have 
            only made one appearance as a top seed since 1985. The Blue Demons stayed in their home metro Chicago as a 3
            seed in 1987, traveling fewer than 15 miles.`,
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'chapter-12',
            title: '',
            image: '',
            description: `More data paints a more accurate picture, so filtering for schools that have made at least 5
            appearances as a top seed since 1985, the school with the lowest mean distance traveled is University of Virginia,
            who traveled a mean distance of 234 miles. 
            
            <br>This geographic advantage has had mixed results for the Cavaliers, who famously lost to the UMBC in 2018,
             the first ever 1 seed bested by a 16 seed in the history of the NCAA tournament (having traveled 227 miles 
             to Charlotte, North Carolina from Charlottesville, Virginia). UVA went on to redeem themselves by winning 
             their first national title the following year in 2019.`,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-13',
            title: '',
            image: '',
            description: `The selection committee gives geographic preference based on seeds, so you would expect a team with 
            more appearances as a 1 seed to have a lower mean travel distance than a school with more appearances as a 4 seed.
            
            <br>To normalize the data, distances were also calculated with the following weights applied based on seed values.
            <ul>
                <li>1 seeds: 1.00</li>
                <li>2 seeds: 0.75</li>
                <li>3 seeds: 0.50</li>
                <li>4 seeds: 0.25</li>
            </ul>
            `,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-14',
            title: '',
            image: '',
            description: `Accounting for the weighted metric, the lowest WEIGHTED distance traveled by a school with at least
            5 appearances is The University of Ohio. The Buckeyes have had 11 appearances as a top seed since 1985, averaging
            a weighted travel distance of only 74 miles (352 miles unweighted).`,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-15',
            title: '',
            image: '',
            description: `The school with the highest mean travel distance is Virginia Tech; similar to DePaul, the Hokies
             have only made one appearance as a top seed, resulting in an average travel distance of 2577 miles (the distance
             between Blacksburg, Virginia and San Jose, California, where Virginia Tech played as a 4 seed in 2019).`,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-16',
            title: '',
            image: '',
            description: `The school with the highest mean travel distance with at least 5 appearances is St. John's University
             in Queens, New York. The Red Storm traveled an average of 1803 miles over 5 appearances. St. John's also represents
             the highest WEIGHTED mean travel distance at 1501 miles. Interestingly, the Red Storm have fared better geographically
             as lower seeds than as higher seeds - they traveled 2000+ miles in all three of their appearances as a 1 and 2 seed,
             but only between 600-900 miles as a 3 and 4 seed. 
             `,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-17',
            title: '',
            image: '',
            description: `Like many sports, the NCAA divides schools into different conferences that are often geographically clustered.`,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-18',
            title: '',
            image: '',
            description: ``,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-19',
            title: '',
            image: '',
            description: ``,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-20',
            title: '',
            image: '',
            description: ``,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-21',
            title: '',
            image: '',
            description: ``,
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

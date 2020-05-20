const config = {
    // style: 'mapbox://styles/laurenoldham1202/ck9d9t3360puw1ilehqxfc0oa',
    style: 'mapbox://styles/mapbox/light-v10',
    accessToken: 'pk.eyJ1IjoibGF1cmVub2xkaGFtMTIwMiIsImEiOiJjaW55dm9lemUxOGc1dWttMzI5dDI5aGtvIn0.3xAukiULCDm0OId5yIgXOA',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Going the Distance',
    subtitle: '',
    byline: 'March Madness Travel Distance of Top Seeded Schools',
    footer: 'Map created by Lauren Oldham',
    chapters: [
        {
            id: 'intro',
            // title: 'Introduction placeholder',
            // image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg/800px-2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg',
            description: `Every year in March, the top 68 Division 1 men's college basketball programs are selected to compete for the NCAA's national championship title in a single-elimination competition colloquially called March Madness. While the selection process and tournament format for March Madness have changed considerably since its inception in 1939, countless fans have become devoted to understanding and predicting the tournament field in the study of 'Bracketology.' The modern era of the tournament began in 1985 with a final field of 64 teams and preferential seeding to determine the year's bracket.`,
            // description: `Each year in March, the top Division I men's college basketball programs in the nation are selected
            // to compete for the NCAA's National Championship title in a single-elimination competition referred to as
            // <strong>March Madness</strong>. `,
            location: {
                center: [-116.5, 41.5],
                zoom: 3.5,
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
        {  // TODO add description of what prop circles represent, rerun as diff crs
            // TODO remove fitbounds from school selection to give better reference for distances?
          id: 'methodology',
          title: `Methodology`,
          description: `Tournament data for each 1, 2, 3, and 4 seed and its respective first-round site location was 
scraped from <a href="https://www.sports-reference.com/cbb/postseason/" target="_blank">Sports Reference</a>. The data was
cleaned, analyzed, and manipulated primarily using Python 3 libraries (pandas, geopandas, and geocoder) in Jupyter Notebooks.

<br><br>Distances are calculated as raw Euclidean distances, or 'as the crow flies,' and do not account for how teams actually
traveled to their tournament sites (e.g. flying versus driving). Site locations are also inexact, with coordinates placed
in the site's city center rather than the exact arena in which the game was played.

<br><br>More information can be found at the <a href="https://github.com/laurenoldham1202/march-madness" target="_blank">project repository</a>.
`,
            onChapterEnter: [
                {layer: 'd1-all', opacity: 0},
                {layer: 'd1-trim', opacity: 0},
                {layer: 'schools', opacity: 0.7},
            ],
            onChapterExit: [
                {layer: 'd1-all', opacity: 0},
                {layer: 'd1-trim', opacity: 0},
            ]
        },
        {
            id: 'chapter-3',
            title: 'Distances by Seed',
            image: '',
            // TODO add min and max for more of an overall story?
            description: `When looking at Euclidean distances, the data falls in line with the NCAA's claim of 
            geographic preference for higher seeds, with 1 seeds averaging the shortest travel distance, 2 seeds averaging
            the second shortest travel distance, 3 seeds average the third shortest travel distance, and 4 seeds traveling
            the furthest of all seeds.
   
            
            <div class="seed-hl-row">
                <div class="seed-hl" style="background: #80bad1">
                    <div class="seed-hl-title">1 SEED</div>
                    <div class="seed-hl-text">353 miles</div>
                </div> 
               
               <div class="seed-hl" style="background: #5694c1">
                    <div class="seed-hl-title">2 SEED</div>
                    <div class="seed-hl-text">482 miles</div>
                </div>
                       
               <div class="seed-hl" style="background: #2c6db1">
                    <div class="seed-hl-title">3 SEED</div>
                    <div class="seed-hl-text">689 miles</div>
                </div>
                       
               <div class="seed-hl" style="background: #0146a1">
                    <div class="seed-hl-title">4 SEED</div>
                    <div class="seed-hl-text">829 miles</div>
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
            title: 'Highlights',
            image: '',  // TODO fix 2866 miles stretching last box
            description: `Viewing aggregations at the school level paints a more varied picture of travel distances during
            March Madness, ranging from a minimum travel distance of less than a mile to a maximum travel distance exceeding
            2,400 miles. The overall mean distance traveled for all top four seeded schools from 1985 to 2019 was 588 miles; 
            the median distance traveled clocked in a bit lower at 394 miles, perhaps a more accurate representation that 
            lessens the influence of outliers.
            
              <div class="seed-hl-row">                 
               <div class="seed-hl" style="background: #0146a1">
                    <div class="seed-hl-title">MEAN</div>
                    <div class="seed-hl-text">588 miles</div>
                </div>
                       
               <div class="seed-hl" style="background: #0146a1">
                    <div class="seed-hl-title">MED</div>
                    <div class="seed-hl-text">394 miles</div>
               </div>
                <div class="seed-hl" style="background: #0146a1">
                    <div class="seed-hl-title">MIN</div>
                    <div class="seed-hl-text">0.42 miles</div>
                </div> 
               
               <div class="seed-hl" style="background: #0146a1">
                    <div class="seed-hl-title">MAX</div>
                    <div class="seed-hl-text">2,452 miles</div>
                </div>
            </div>
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
            title: 'Overall Shortest Travel Distance',
            image: '',
            description: `The University of Arizona traveled the overall shortest distance, barely leaving campus to travel 
            less than half a mile to their first round site in Tucson in 2000 as a 1 seed. Unfortunately for the Wildcats,
            the close proximity didn't give them enough of a boost to beat out Wisconsin in the second round of the 
            tournament.`,
            onChapterEnter: [],
            onChapterExit: []
        },
        // {
        //     id: 'chapter-10',
        //     title: 'Overall Maximum Travel Distance',
        //     image: '',
        //     description: `The overall maximum distance traveled was by Syracuse University, who trekked over 2,800 miles
        //     from Syracuse, New York to Long Beach, California in 2013 as a 4 seed. The extra mileage didn't faze the Orange too much,
        //     who went on to compete in the Final Four, ultimately losing to Michigan in the semifinals.`,
        //     description: ``,
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        {
            id: 'chapter-11',
            title: 'Shortest Average Travel Distance',
            image: '',
            description: `The school with the lowest mean distance traveled is technically DePaul University, who have 
            only made one appearance as a top seed since 1985. The Blue Demons stayed in their home metro Chicago as a 3
            seed in 1987, traveling fewer than 13 miles.`,
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'chapter-12',
            title: 'Shortest Average Travel Distance (with 5+ Appearances)',
            image: '',
            description: `More data paints a more accurate picture, so filtering for schools that have made at least 5
            appearances as a top seed since 1985, the school with the lowest mean distance traveled is University of Virginia,
            who traveled a mean distance of 237 miles. 
            
            <br>This geographic advantage has had mixed results for the Cavaliers, who famously lost to the UMBC in 2018,
             the first ever 1 seed bested by a 16 seed in the history of the NCAA tournament (having traveled 234 miles 
             to Charlotte, North Carolina from Charlottesville, Virginia). UVA went on to redeem themselves by winning 
             their first national title the following year in 2019.`,
            onChapterEnter: [],
            onChapterExit: []
        },
        { // TODO add logic to weights, add same styling as seeds, add pre-line style to p class?
            id: 'chapter-13',
            title: 'Weighted Distance',
            image: '',
            description: `The selection committee gives geographic preference based on seeds, so you would expect a team with 
            more appearances as a 1 seed to have a lower mean travel distance than a school with more appearances as a 4 seed.
            
            <br><br>To normalize the data, distances were also calculated with the following weights applied based on seed values:

             <div class="seed-hl-row">
                <div class="seed-hl" style="background: #80bad1">
                    <div class="seed-hl-title">1 SEED</div>
                    <div class="seed-hl-text">1.00</div>
                </div> 
               
               <div class="seed-hl" style="background: #5694c1">
                    <div class="seed-hl-title">2 SEED</div>
                    <div class="seed-hl-text">0.75</div>
                </div>
                       
               <div class="seed-hl" style="background: #2c6db1">
                    <div class="seed-hl-title">3 SEED</div>
                    <div class="seed-hl-text">0.50</div>
                </div>
                       
               <div class="seed-hl" style="background: #0146a1">
                    <div class="seed-hl-title">4 SEED</div>
                    <div class="seed-hl-text">0.25</div>
               </div>
            </div>
            <br>
            The weights are roughly proportional to the pool of first round site locations. For the 16 top seeded teams,
            there are 16 possible (non-unique) site locations. 1 seeds get premiere geographic preference (~100% of 
            teams get optimal placement). 2 seeds get top pick from the remaining pool (12/16), then 3 seeds from that 
            remaining pool (8/16), and finally, 4 seeds get the remaining pick (4/16). 
            
            <div class="footer" style="margin-top: 1.5rem; text-align: right;">
                <span style="font-size: 0.6rem;">* Proportional circles on the map represent the <strong><u>weighted</u></strong> average
                travel distance for each school
                </span>
            </div>
            `,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-14',
            title: 'Shortest Weighted Average Travel Distance (5+ Appearances)',
            image: '',
            description: `Accounting for the weighted metric, the lowest WEIGHTED distance traveled by a school with at least
            5 appearances is The Ohio State University. The Buckeyes have had 11 appearances as a top seed since 1985, averaging
            a weighted travel distance of only 135 miles (318 miles unweighted).`,
            onChapterEnter: [],
            onChapterExit: []
        },
      {
        id: 'chapter-16',
        title: 'Longest Weighted Average and Overall Travel Distance',
        image: '',
        description: `The school with the highest mean travel distance with at least 5 appearances is St. John's University
             in Queens, New York. The Red Storm traveled an average of 1,604 miles over 5 appearances. St. John's also represents
             the highest WEIGHTED mean travel distance at 1,323 miles. Interestingly, the Red Storm have fared better geographically
             as lower seeds than as higher seeds - they traveled 1,900+ miles in all three of their appearances as a 1 and 2 seed,
             but only between 500-900 miles as a 3 and 4 seed. 
             `,
        onChapterEnter: [],
        onChapterExit: []
      },
        {
            id: 'chapter-15',
            title: 'Longest Average Travel Distance',
            image: '',
            description: `The school with the highest mean travel distance is Virginia Tech; similar to DePaul, the Hokies
             have only made one appearance as a top seed, resulting in an average travel distance of 2,261 miles (the distance
             between Blacksburg, Virginia and San Jose, California, where Virginia Tech played as a 4 seed in 2019).`,
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'chapter-17',
            title: 'Distance by Conference',
            image: '',
            description: `Like many sports, the NCAA divides schools into discrete, geographically clustered conferences.
            Of the 32 D1 conferences, only 11 have produced top seeded teams in March Madness:
            <ul>
              <li>American Athletic Conference</li>
              <li>Atlantic 10 Conference</li>
              <li>Atlantic Coast Conference</li>
              <li>Big 12 Conference</li>
              <li>Big East Conference</li>
              <li>Big Ten Conference</li>
              <li>Missouri Valley Conference</li>
              <li>Mountain West Conference</li>
              <li>Pac-12 Conference</li>
              <li>Southeastern Conference</li>
              <li>West Coast Conference</li>
            </ul>
            <br>Does the geography of these conferences affect their travel distance during March Madness?
            `,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-18',
            title: 'Conferences with the Longest Mean Travel Distance',
            image: '',
            description: `The conferences with the highest mean travel distances are two coastal conferences: the Pac-12
            on the Pacific West coast, who averaged 773 travel miles, and the Atlantic-10 on the Atlantic East coast, 
            who averaged 832 travel miles.
            
            Even applying weights by seed couldn't help these conferences - they remained the first and third longest traveling
            conferences, traveling a weighted 442 and 375 miles respectively.`,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-19',
            title: 'Conferences with the Lowest Mean Travel Distance',
            image: '',
            description: `On the flip side, the conferences with the lowest mean travel distances are more centrally-located,
            with the Big 12 traveling an average of 506 miles from the Great Plains region and the American Athletic 
            Conference traversing and average 494 miles.`,
            onChapterEnter: [],
            onChapterExit: []
        },
      {
        id: 'chapter-19.5',
        title: 'Conferences with the Lowest Weighted Mean Travel Distance',
        image: '',
        description: `Applying weights to the conference distances, however, paints an unclear picture of any geographic trends. 
        These conferences are vaguely concentrated in the Great Plains/Southeast, but are not strictly bound there.
        
        The Missouri Valley Conference has the overall shortest weighted travel distance at 142 miles, but only has 2 March
        Madness appearances. Four conferences have weighted travel distances between 280 and 288 miles: Big 12 (280 miles),
        Atlantic Coast Conference (282 miles), Mountain West Conference (283 miles), and Southeastern Conference (288 miles).
        `,
        onChapterEnter: [],
        onChapterExit: []
      },
        {
            id: 'chapter-20',
            title: 'Conclusion',
            image: '',
            description: `So is there any method to the madness? It would appear that way. Generally speaking, a school
            has a better chance at earning a geographic advantage in the first round of March Madness as a higher seed.
            
            <br><br>Perhaps unsurprisingly, it is also advantageous to be a more centrally-located school rather than geographically
            isolated on a coast (despite there being many more urban centers with arenas in the more densely populated 
            East Coast).
            
            <br><br>Outliers will come into play every year and it's not perfect system, but the math checks out.
            
            <br><br>Explore the interactive map to see how your school fares in March Madness travels!
            `,
            onChapterEnter: [],
            onChapterExit: []
        },
        {  // TODO add this to conclusion, remove restart story button, have button toggle mode toggle
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

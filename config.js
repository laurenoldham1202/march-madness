const config = {
    // style: 'mapbox://styles/laurenoldham1202/ck9d9t3360puw1ilehqxfc0oa',
    style: 'mapbox://styles/mapbox/light-v10',
    accessToken: 'pk.eyJ1IjoibGF1cmVub2xkaGFtMTIwMiIsImEiOiJjaW55dm9lemUxOGc1dWttMzI5dDI5aGtvIn0.3xAukiULCDm0OId5yIgXOA',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    // title: 'Going the Distance',
    // subtitle: '',
    // byline: 'March Madness Travel Distance of Top Seeded Schools',
    footer: 'Map created by Lauren Oldham',
    chapters: [
        {
            id: 'intro',
            // TODO add skip intro option?
            description: `<br><br><span class="capital-font" style="font-size: 26pt;">Every year in March,</span> 
college basketball fans anxiously await Selection Sunday to see if their team made the NCAA Men’s Basketball National 
Championship tournament, affectionately referred to as March Madness. March
 Madness is a three week-long single-elimination tournament in which 64 teams compete to take home the highly coveted 
 National Championship title. The fun isn’t just reserved for fans - countless people from all across the globe fill out
  tournament brackets and bet on which teams will make deep runs and ultimately win it all. 
  
  <div class="scroll">Scroll &#8681;</div>
            `,
            image: './images/logo.png',
            location: {
                center: [-116.5, 41.5],
                zoom: 3.5,
                pitch: 0.00,
                bearing: 0.00,
            },
            onChapterEnter: [
                {layer: 'legend-lines', opacity: 0},
                {layer: 'legend-point', opacity: 0},
                // {layer: 'schools', opacity: 0.7},
                {layer: 'schools', opacity: 0},

                // {layer: 'd1-all', opacity: 1},
                // {layer: 'schools', opacity: 0},
                // {layer: 'd1-trim', opacity: 0},
            ],
            onChapterExit: [
                // {layer: 'd1-all', opacity: 0.15},
                // {layer: 'd1-trim', opacity: 1},
            ]
        },
        {
            id: 'chapter-1',
            title: 'Tournament Seeding',
            // title: 'Selection Sunday',
            image: '',
            // description: `In theory, higher ranked teams are rewarded by playing the lowest ranked teams in the tournament. Furthermore, according to the NCAA's selection process, top seeded teams are to have geographic preference over lower seeded teams in the first two rounds of the tournament (if possible - other factors are considered). I want to analyze the first/second round sites for each of the top 4 seeded teams (four teams in each seed for 16 total top teams each year) from 1985 to 2020 to establish patterns, potential biases, and test the NCAA's claim of geographic preference.`,
//             description: `
//             While coaches, teams, and fans alike want to see their preferred team effortlessly stroll through
//             the Sweet Sixteen, Elite Eight, and Final Four to play in the National Championship game, they first have to
//              survive the first weekend of the tournament. Putting the ‘madness’ into March Madness, the first and second
//               rounds of the tournament (Round of 64 and Round of 32, respectively) are historically filled with the most
//                chaos, with underdog teams defying odds by knocking out highly favored teams early on. <span class="bold">Because of the
//                precedence for upsets in the first round of the tournament, there is a lot of focus on the matchups and
//                locations for each competing team.</span>
//
// <br><br>Selection Sunday does more than just determine who gets into the tournament - it also
// determines where the chosen teams play, who they play against, and how highly they are ranked.
//
//               <br><br>Each team is listed from best to worst with an overall rank, a number 1 to 64*, in which 1
//               represents the overall best team in the tournament and 64 represents the worst. These rankings are then
//               grouped into 16 seeds of four teams each, wherein 1 seeds are the best teams and 16 seeds are the worst
//               teams. Many considerations go into the creation of March Madness brackets, but the idea is that <span class="bold">higher
//               seeds are rewarded for their regular season performance by playing against the lowest ranked teams. </span>
//               Additionally, <span class="bold">the selection committee is supposed to give top ranked teams geographic preference in their
//               first round sites.</span>`,
            description: `
            Before the tournament starts, schools are grouped into ranked seeds to determine their position in the 
            bracket, which dictates <em>where</em> and <em>who</em> they play. 
            
            <br><br>
            64 teams are grouped into 16 seeds. The first 4 seeds (1-4) are considered the best seeds and represent the 
            top teams in the tournament.
            
            <br><br>
            For example, during the 2012 tournament:
            
            <div class="seed-label">One Seeds (overall best teams)</div>
            <div class="seed-hl-row small-text">
              <div class="seed-hl seed-one">UNC</div>
              <div class="seed-hl seed-one">Kentucky</div>
              <div class="seed-hl seed-one">Michigan St.</div>
              <div class="seed-hl seed-one">Syracuse</div>
            </div>            
                      
            <div class="seed-label">Two Seeds (second overall best teams)</div>
            <div class="seed-hl-row small-text">
              <div class="seed-hl seed-two">Kansas</div>
              <div class="seed-hl seed-two">Duke</div>
              <div class="seed-hl seed-two">Missouri</div>
              <div class="seed-hl seed-two">Ohio State</div>
            </div>            
                                
            <div class="seed-label">Three Seeds (third overall best teams)</div>
            <div class="seed-hl-row small-text">
              <div class="seed-hl seed-three">Georgetown</div>
              <div class="seed-hl seed-three">Baylor</div>
              <div class="seed-hl seed-three">Marquette</div>
              <div class="seed-hl seed-three">Florida State</div>
            </div>            
                                          
            <div class="seed-label">Four Seeds (fourth overall best teams)</div>
            <div class="seed-hl-row small-text">
              <div class="seed-hl seed-four">Michigan</div>
              <div class="seed-hl seed-four">Indiana</div>
              <div class="seed-hl seed-four">Louisville</div>
              <div class="seed-hl seed-four">Wisconsin</div>
            </div>            
          
            `,
            location: {
                center: { lon: -95.19207, lat: 37.96458 },
                zoom: 4.7,
                pitch: 0,
                bearing: 0
                // pitch: 60.00,
                // bearing: 28.00
            },
            onChapterEnter: [
                // {layer: 'd1-all', opacity: 0.15},
                // {layer: 'd1-trim', opacity: 1},
            ],
            onChapterExit: [
                // {layer: 'd1-all', opacity: 0},
                // {layer: 'd1-trim', opacity: 0},
                // {layer: 'schools', opacity: 0.7}
            ]
        },
        {
            id: 'chapter-2',
            title: 'Why Does the First Round Site Matter?',
            image: '',
            // TODO style list items more nicely
            // description: `
            // <span class="bold">Because March Madness is a single-elimination tournament, teams only have one shot in each round to advance to the next level.</span>
            // All teams put their best foot forward, but there's no room for an off game - one bad night can (and has) cost the best team in the nation
            // a shot at the national title. Many lower ranked teams don't make it into the tournament very often and have the tenacity to try to become
            // the next Cinderella story.
            //
            // <br><br>Teams want every advantage at their disposal when going into the tournament, and having a closer first-round
            // site can be incredibly beneficial both physically and psychologically.
            //  <ul>
            //  <li>Student athletes still officially
            // attend classes during the tournament, so shorter travel times are logistically easier; not only that, but
            // traveling long distances via bus or air can be physically draining.</li>
            //  <li>Games are played from early morning to
            // late at night across multiple time zones, so it's also ideal to play in or near your home time zone. </li>
            // <li>Perhaps
            // most importantly, playing near your school allows your fanbase to easily travel to the games, simulating
            // as much of a <a href="https://kenpom.com/blog/mining-point-spread-data-home-court-advantage/" target="_blank">
            // home court advantage</a> as possible. When the tides turn against a team in a game, nothing fires them up
            // like a raucous home crowd.</li>
            // </ul>
            //
            // <span class="bold">The NCAA Selection Committee claims to give geographic preference to the top seeds in order of their rank </span>-
            // one seeds get the highest preference, then two seeds, then three, then four (remaining seeds are not given
            // explicit geographic considerations). So is it true? <span class="bold">I analyzed March Madness tournament data from 2015 to
            // 2019 to put the claim to the test.</span>
            // `,
            // description: `Obsessed with so-called 'chaos,' college basketball fans thrive on the unpredictability of the first and second rounds of the NCAA tournament. While higher ranked/seeded teams are expected to make deep runs, it is not uncommon for them to get upset by lower ranked teams (sorry UVA fans). Teams want every advantage they can entering the first weekend of the tournament. The advantage of playing at a site closer to the school location is both pragmatic and psychological. The players are still attending classes, so it is logistically easier to travel shorter distances. Furthermore, playing closer to the school allows the team's fan base and families a better opportunity to watch them play, giving them as much of a home court advantage as possible.`,

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
            description: `
            According to the NCAA Selection Committee, <strong>top teams are given geographic preference when determining
            <em>where</em> they play in the first round of the tournament</strong>.
            
            <br><br>
            Playing closer to 'home' can be extremely advantageous during the tournament. Not only does it reduce time 
            spent traveling, but more importantly, <strong>it simulates a home court advantage</strong> by allowing fan
            bases to easily travel to the games.
            
            <br><br>When one bad play can ruin a top team's chance at the National Championship title, they need every
            edge they can get when entering the tournament.
            
            <br><br>
            <span class="bold">The NCAA Selection Committee claims to give geographic preference to the top seeds in order of their rank </span>- 
            one seeds get the highest preference, then two seeds, then three, then four (remaining seeds are not given
            explicit geographic considerations). So is it true? <span class="bold">I analyzed March Madness tournament data from 2015 to
            2019 to put the claim to the test.</span>
            
            <div class="seed-hl-row">
                <div class="seed-hl" id="story-seed-1" style="background: #80bad1">
                    <div class="seed-hl-text">1 Seeds</div>
                </div> 
               
               <div class="seed-hl" id="story-seed-2" style="background: #5694c1">
                    <div class="seed-hl-text">2 Seeds</div>
                </div>
                       
               <div class="seed-hl" id="story-seed-3" style="background: #2c6db1">
                    <div class="seed-hl-text">3 Seeds</div>
                </div>
                       
               <div class="seed-hl" id="story-seed-4" style="background: #0146a1">
                    <div class="seed-hl-text">4 Seeds</div>
               </div>
            </div>
            `,
            onChapterEnter: [
                {layer: 'legend-lines', opacity: 0},
                {layer: 'legend-point', opacity: 0},
                {layer: 'legend-point-avg', opacity: 0},

                // {layer: 'schools', opacity: 0},
                // {layer: 'd1-all', opacity: 0},
                // {layer: 'd1-trim', opacity: 0},
                {layer: 'schools', opacity: 0},

            ],
            onChapterExit: [
                // {layer: 'd1-all', opacity: 1},
                // {layer: 'd1-trim', opacity: 1},
                // {layer: 'schools', opacity: 0},
            ]
        },
        {  // TODO add description of what prop circles represent, rerun as diff crs
            // TODO remove fitbounds from school selection to give better reference for distances?
          id: 'methodology',  // TODO fix id
          title: `Methodology`,
          description: `Tournament data for each top seed (1-4) and its respective first-round site location was 
collected from <a href="https://www.sports-reference.com/cbb/postseason/" target="_blank">Sports Reference</a>. The data was
cleaned, analyzed, and manipulated primarily using Python 3 libraries (pandas, geopandas, and geocoder) in Jupyter Notebooks.

<br><br>Distances are calculated as <strong>Great Circle distances</strong> with the haversine formula, or 'as the crow flies,' i.e. the
shortest possible distance between two points. This distance calculation does not account for how teams actually
traveled to their tournament sites (e.g. flying versus driving). Site locations are also inexact, with coordinates placed
in the site's city center rather than the exact arena in which the game was played.

<br><br>More information can be found at the <a href="https://github.com/laurenoldham1202/march-madness" target="_blank">project repository</a>.
`,
            onChapterEnter: [
                {layer: 'legend-lines', opacity: 1},
                {layer: 'legend-point', opacity: 1},
                {layer: 'legend-point-avg', opacity: 1},
            ],
            onChapterExit: [
                // {layer: 'legend-lines', opacity: 0},
                // {layer: 'legend-point', opacity: 0},
            ]
        },
        {
            id: 'legend',
            title: 'Reading the Map',
            // TODO adjust these styles for responsive design
            description: `

<strong>Schools</strong> are represented as proportional circles on the map (based on their unweighted mean travel 
distance - this field can be changed in <em>Explore Mode</em>). The overall average travel distance for all schools is
represented as a dark orange circle outline.
<div class="legend-container">
<!--<div class="legend-header" style="background: #EEE; width: 379px; padding: 0.25rem; margin: 1rem 0; border-radius: 4px; text-align: center;">Schools (Mean Travel Distance in Miles)</div>-->

    <div class="legend-row">
        <div class="circle" style="width: 8px; height: 8px;"></div>
        <div class="circle" style="width: 16px; height: 16px;"></div>
        <div class="circle" style="width: 23px; height: 23px;"></div>
        <div class="circle" style="width: 31px; height: 31px;"></div>
        <div class="circle" style="width: 44px; height: 44px;"></div>
        <div class="circle" style="width: 77px; height: 77px;"></div>
    </div>
    
    <div class="legend-row">
        <div class="legend-label" style="width: 38px;">250</div>
        <div class="legend-label" style="width: 46px;">500</div>
        <div class="legend-label" style="width: 53px;">750</div>
        <div class="legend-label" style="width: 61px;">1000</div>
        <div class="legend-label" style="width: 74px;">1500</div>
        <div class="legend-label" style="width: 107px;">2500</div>
    </div> 
</div>
<br>
<strong>Tournament sites</strong> are also represented as proportional circles based on the school's seed in that 
year's tournament. These circles are also colored on a gradient scale from light blue for higher seeds to dark blue for
lower seeds.
<br><br>
<!--<div class="legend-header" style="background: #EEE; width: 100%;-->
<!-- padding: 0.25rem; margin-bottom: 1rem; border-radius: 4px; text-align: center;">Site Locations Based on Seed Values</div>-->

<div class="legend-row">
    <div class="circle" style="width: 10px; height: 10px; background: #80bad1 !important;"></div>
    <div class="circle" style="width: 16px; height: 16px; background: #5694c1 !important;"></div>
    <div class="circle" style="width: 22px; height: 22px; background: #2c6db1 !important;"></div>
    <div class="circle" style="width: 28px; height: 28px; background: #0146a1 !important;"></div>
</div>
<div class="legend-row">
    <div class="legend-label" style="width: 38px;">1 </div>
    <div class="legend-label" style="width: 46px;">2 </div>
    <div class="legend-label" style="width: 53px;">3 </div>
    <div class="legend-label" style="width: 61px;">4 </div>
</div>
<br>
<strong>Linestrings</strong> connect the school to the site location to visualize the distance between the two points.
<hr>
According to the selection process, a school with fair site locations should see a radial pattern with 1 seed sites
closest to the school, 2 seeds farther out, and so on, with 4 seed sites the farthest from the school. 4 seed sites that
are close and 1 seed sites that are far from schools are particularly noteworthy for breaking the pattern of higher seed
= closer site.
            `,
            onChapterEnter: [
                {layer: 'legend-lines', opacity: 1},
                {layer: 'legend-point', opacity: 1},
                {layer: 'legend-point-avg', opacity: 1},
                {layer: 'schools', opacity: 0},
            ],
            onChapterExit: [
                {layer: 'legend-lines', opacity: 0},
                {layer: 'legend-point', opacity: 0},
                {layer: 'legend-point-avg', opacity: 0},
            ]
        },
        {
            id: 'chapter-3',
            title: 'Distances by Seed',
            image: '',
            // TODO add min and max for more of an overall story?
            description: `Analysis of data from 1985 to 2019 falls in line with the NCAA's claim of 
            geographic preference for higher seeds, with <strong>1 seeds averaging the shortest travel distance, 2 seeds averaging
            the second shortest travel distance, 3 seeds average the third shortest travel distance, and 4 seeds traveling
            the furthest of all top ranked seeds</strong>.
   
            
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
            March Madness, ranging from the <strong>shortest travel distance of less than a mile</strong> to the <strong>farthest travel distance exceeding
            2,400 miles</strong>. The <strong>overall mean distance traveled for all top four seeded schools from 1985 to 2019 was 588 miles</strong>; 
            the <strong>median distance traveled clocked in a bit lower at 394 miles</strong>, perhaps a more accurate representation that 
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
            description: `The <strong>University of Arizona</strong> traveled the overall shortest distance, barely leaving campus to travel 
            <strong>less than half a mile</strong> to their first round site in Tucson in 2000 as a 1 seed. Unfortunately for the Wildcats,
            the close proximity didn't give them enough of a boost to beat out Wisconsin in the second round of the 
            tournament.`,
            // location: {
            //     center: { lon: -110.95127, lat: 32.22568 },
            //     zoom: 14.75,
            //     pitch: 60.00,
            //     bearing: -91.64
            // },
            onChapterEnter: [
                // {layer: 'chapter-9-points', opacity: 1},
            ],
            onChapterExit: [
                // {layer: 'chapter-9-points', opacity: 0},
            ]
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
            description: `The school with the lowest mean distance traveled is technically <strong>DePaul University</strong>, who have 
            only made one appearance as a top seed since 1985. The Blue Demons stayed in their home metro Chicago as a 3
            seed in 1987, traveling <strong>fewer than 13 miles</strong>.`,
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'chapter-12',
            title: 'Shortest Average Travel Distance (with 5+ Appearances)',
            image: '',
            description: `Many schools have only made one or two appearances as a top seeded school, so filtering for schools that have made at least 5
            appearances as a top seed since 1985 paints a more accurate picture of trends. The school with the lowest mean distance traveled is <strong>University of Virginia</strong>,
            who traveled a mean distance of <strong>237 miles</strong>. 
            
            <br><br>This geographic advantage has had mixed results for the Cavaliers, who famously lost to the UMBC in 2018,
             the first ever 1 seed bested by a 16 seed in the history of the NCAA tournament (having traveled 234 miles 
             to Charlotte, North Carolina from Charlottesville, Virginia). UVA went on to redeem themselves by winning 
             their first national title the following year in 2019, having traveled 296 miles to Columbia, South Carolina.`,
            onChapterEnter: [],
            onChapterExit: []
        },
        { // TODO add logic to weights, add same styling as seeds, add pre-line style to p class?
            id: 'chapter-13',
            title: 'Weighted Distance',
            image: '',
            description: `The selection committee gives geographic preference based on seeds, so you would expect a team with 
            more appearances as a 1 seed to have a lower mean travel distance than a school with more appearances as a 4 seed.
            
            <br><br><strong>To normalize the data, distances were also calculated with the following weights applied based on seed values:</strong>

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
                <span style="font-size: 0.85rem;">* Proportional circles on the map represent the <strong><u>weighted</u></strong> average
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
            5 appearances is <strong>Ohio State University</strong>. The Buckeyes have had 11 appearances as a top seed since 1985, averaging
            a weighted travel distance of only <strong>135 miles (318 miles unweighted)</strong>.

<br><br>Unfortunately for the Buckeyes, none of their top-seeded appearances resulted in a national title. Ohio State's
first and only National Championship was won in 1960, decades before modern seeding was established.
`,
            onChapterEnter: [],
            onChapterExit: []
        },
      {
        id: 'chapter-16',
        title: 'Longest Weighted Average and Overall Travel Distance',
        image: '',
        description: `The school with the highest mean travel distance with at least 5 appearances is <strong>St. John's University</strong>
             in Queens, New York. The Red Storm traveled an average of <strong>1,604 miles</strong> over 5 appearances. St. John's also represents
             the highest WEIGHTED mean travel distance at 1,323 miles.
              
              <br><br>Interestingly, the Red Storm have fared better geographically
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
            description: `The school with the highest mean travel distance is <strong>Virginia Tech University</strong>; similar to DePaul, the Hokies
             have only made one appearance as a top seed, resulting in an average travel distance of <strong>2,261 miles</strong> (the distance
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
            
            <div class="conference-list" style="margin-top: 1rem;">
              <div class="conference" style="background: #7F3C8D">American Athletic Conference</div>
              <div class="conference" style="background: #11A579">Atlantic 10 Conference</div>
              <div class="conference" style="background: #3969AC">Atlantic Coast Conference</div>
              <div class="conference" style="background: #F2B701">Big 12  Conference</div>
              <div class="conference" style="background: #E73F74">Big East Conference</div>
              <div class="conference" style="background: #80BA5A">Big Ten Conference</div>
              <div class="conference" style="background: #E68310">Missouri Valley Conference</div>
              <div class="conference" style="background: #008695">Mountain West Conference</div>
              <div class="conference" style="background: #CF1C90">Pac-12 Conference</div>
              <div class="conference" style="background: #f97b72">Southeastern Conference</div>
              <div class="conference" style="background: #4b4b8f">West Coast Conference</div>
            </div>
            <br>Does the geography of these conferences affect their travel distance during March Madness?
            `,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-18',
            title: 'Conferences with the Longest Mean Travel Distance',
            image: '',
            description: `The conferences with the highest mean travel distances are two coastal conferences: the 
            <span style="color: #CF1C90;"><strong>Pac-12</strong></span>
            on the Pacific West coast, who averaged <span style="color: #CF1C90;"><strong>773 travel miles</strong></span>, and the <span style="color: #11A579;"><strong>Atlantic 10</strong></span> on the Atlantic East coast, 
            who averaged <span style="color: #11A579;"><strong>832 travel miles</strong></span>.
            
            <br><br>Even applying weights by seed couldn't help these conferences - they remained the first and third longest traveling
            conferences, traveling a weighted 442 and 375 miles respectively.`,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-19',
            title: 'Conferences with the Lowest Mean Travel Distance',
            image: '',
            description: `On the flip side, the conferences with the lowest mean travel distances are more centrally-
            located, with the <span style="color: #F2B701;"><strong>Big 12 Conference</strong></span> traveling an 
            average of <span style="color: #F2B701;"><strong>506 miles</strong></span> from the Great Plains region and 
            the <span style="color: #7F3C8D;"><strong>American Athletic Conference</strong></span> traversing and 
            average <span style="color: #7F3C8D;"><strong>494 miles</strong></span>.`,
            onChapterEnter: [],
            onChapterExit: []
        },
      {
        id: 'chapter-21',
        title: 'Conferences with the Lowest Weighted Mean Travel Distance',
        image: '',
        description: `Applying weights to the conference distances, however, paints an unclear picture of any geographic trends. 
        These conferences are vaguely concentrated in the Great Plains/Southeast, but are not strictly bound there.
        
        <br><br>The <span style="color: #E68310;"><strong>Missouri Valley Conference</strong></span> has the overall shortest weighted travel distance at <span style="color: #E68310;"><strong>142 miles</strong></span>, but only has 2 March
        Madness appearances. Four conferences have weighted travel distances between 280 and 288 miles: <span style="color: #F2B701;"><strong>Big 12 (280 miles)</strong></span>,
        <span style="color: #3969AC;"><strong>Atlantic Coast Conference (282 miles)</strong></span>, <span style="color: #008695;"><strong>Mountain West Conference (283 miles)</strong></span>, and <span style="color: #f97b72;"><strong>Southeastern Conference (288 miles)</strong></span>.
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
            
             <div class="buttons" style="text-align: center;">
              <button class="button" id="explore-mode">Explore Map</button>
             </div>
            `,
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};

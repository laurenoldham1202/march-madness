const config = {
    style: 'mapbox://styles/laurenoldham1202/ck9d9t3360puw1ilehqxfc0oa',
    // style: 'mapbox://styles/mapbox/light-v10',
    accessToken: 'pk.eyJ1IjoibGF1cmVub2xkaGFtMTIwMiIsImEiOiJjaW55dm9lemUxOGc1dWttMzI5dDI5aGtvIn0.3xAukiULCDm0OId5yIgXOA',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    footer: 'Map created by Lauren Oldham',
    chapters: [
        {
            id: 'intro',
            description: `
<br><br><span class="capital-font" style="font-size: 26pt;">Every year in March,</span> 
college basketball fans anxiously await Selection Sunday to see if their team made the NCAA Men’s Basketball National 
Championship tournament, affectionately referred to as March Madness. March
 Madness is a three week-long single-elimination tournament in which 64 teams compete to take home the highly coveted 
 National Championship title. The fun isn’t just reserved for fans - countless people from all across the globe fill out
  tournament brackets and bet on which teams will make deep runs and ultimately win it all. 
  
  <div class="scroll">Scroll &#8681;</div>
            `,
            image: './images/logo.png',
            location: {
                center: {lon: -116.5, lat: 41.5},
                zoom: 3.5,
                pitch: 0.00,
                bearing: 0.00,
            },
            onChapterEnter: [
                {layer: 'tourney', opacity: 0},
                {layer: 'legend-lines', opacity: 0},
                {layer: 'legend-point', opacity: 0},
                {layer: 'schools', opacity: 0.7},
            ],
            onChapterExit: [
                // {layer: 'schools', opacity: 0},
            ]
        },
        {
            id: 'chapter-1',
            title: 'Tournament Seeding',
            description: `
            Before the tournament starts, schools are grouped into ranked seeds to determine their position in the 
            bracket, which dictates <em>where</em> and <em>who</em> they play. 
            
            <br><br>
            64 teams are grouped into 16 seeds. <strong>The first 4 seeds (1-4) are considered the best seeds and represent the 
            top teams in the tournament.</strong>
            
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
            },
            onChapterEnter: [
                {layer: 'schools', opacity: 0},
                {layer: 'tourney', opacity: 1},
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-2',
            title: 'Why Does the First Round Site Matter?',
            image: '',
            // TODO style list items more nicely
            location: {
                center: {lon: -116.5, lat: 41.5},
                zoom: 3.5,
                pitch: 0.00,
                bearing: 0.00,
            },
            description: `
            According to the NCAA Selection Committee, <strong>top teams are given geographic preference when determining
            <em>where</em> they play in the first round of the tournament</strong>.
            
            <br><br>
            Playing closer to 'home' can be extremely advantageous during the tournament. Not only does it reduce time 
            spent traveling, but more importantly, <strong>it simulates a home court advantage</strong> by allowing fan
            bases to easily travel to the games.
            
            <br><br>
            <span class="bold">The NCAA Selection Committee claims to give geographic preference to the top seeds in order of their rank </span>- 
            one seeds get the highest preference, then two seeds, then three, then four (remaining seeds are not given
            explicit geographic considerations). So is it true? <span class="bold">I analyzed March Madness tournament data from 2015 to
            2019 to put the claim to the test.</span>
            
            <br><br>
            <div style="text-align: center">Mouse over seeds to display first-round site on the map
            <div class="seed-hl-row">
                <div class="seed-hl seed-hl-active" id="story-seed-1" style="background: #80bad1">
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
            </div>
            `,
            onChapterEnter: [
                {layer: 'tourney-sites', opacity: 1},
                {layer: 'tourney-lines', opacity: 1},
                {layer: 'tourney', opacity: 1},
                {layer: 'schools', opacity: 0},
            ],
            onChapterExit: [
                {layer: 'tourney-sites', opacity: 0},
                {layer: 'tourney-lines', opacity: 0},
                {layer: 'tourney', opacity: 0},
            ]
        },
        {
            // TODO remove fitbounds from school selection to give better reference for distances?
          id: 'chapter-3',
          title: `Methodology`,
          description: `
Tournament data for each top seed (1-4) and its respective first-round site location was 
collected from <a href="https://www.sports-reference.com/cbb/postseason/" target="_blank">Sports Reference</a>. The data was
cleaned, analyzed, and manipulated primarily using Python 3 libraries (pandas, geopandas, and geocoder) in Jupyter Notebooks.

<br><br>Distances are calculated as <strong>Great Circle distances</strong> with the haversine formula, or 'as the crow flies,' i.e. the
shortest possible distance between two points. This distance calculation does not account for how teams actually
traveled to their tournament sites (e.g. flying versus driving). Site locations are also inexact, with coordinates placed
in the site's city center rather than the exact arena in which the game was played.

<br><br>More information can be found at the <a href="https://github.com/laurenoldham1202/march-madness" target="_blank">project repository</a>.
`,
            onChapterEnter: [
                {layer: 'route', opacity: 1},
                {layer: 'point', opacity: 1},
            ],
            onChapterExit: [
                {layer: 'route', opacity: 0},
                {layer: 'point', opacity: 0},
            ]
        },
        {
            id: 'chapter-4',
            title: 'Reading the Map',
            // TODO adjust these styles for responsive design
            description: `
<strong>Schools</strong> are represented as proportional circles on the map (based on their unweighted mean travel 
distance.
<div class="legend-container">
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
year's tournament.
<br><br>

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
<!--<hr>-->
<!--According to the selection process, a school with fair site locations should see a radial pattern with 1 seed sites-->
<!--closest to the school, 2 seeds farther out, and so on, with 4 seed sites the farthest from the school. 4 seed sites that-->
<!--are close and 1 seed sites that are far from schools are particularly noteworthy for breaking the pattern of higher seed-->
<!--= closer site.-->
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
            id: 'chapter-5',
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
                {layer: 'schools', opacity: 0.7},
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-6',
            title: 'Highlights',
            image: '',  // TODO fix 2866 miles stretching last box
            description: `
Viewing aggregations at the school level paints a more varied picture of travel distances during
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
            id: 'chapter-7',
            title: 'Overall Shortest Travel Distance',
            image: '',
            description: `The <strong>University of Arizona</strong> traveled the overall shortest distance, barely leaving campus to travel 
            <strong>less than half a mile</strong> to their first round site in Tucson in 2000 as a 1 seed. Unfortunately for the Wildcats,
            the close proximity didn't give them enough of a boost to beat out Wisconsin in the second round of the 
            tournament.`,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-8',
            title: 'Shortest Average Travel Distance',
            image: '',
            description: `
The school with the lowest mean distance traveled is technically <strong>DePaul University</strong>, who have 
            only made one appearance as a top seed since 1985. The Blue Demons stayed in their home metro Chicago as a 3
            seed in 1987, traveling <strong>fewer than 13 miles</strong>.
`,
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'chapter-9',
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
            id: 'chapter-10',
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
            id: 'chapter-11',
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
        id: 'chapter-12',
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
            id: 'chapter-13',
            title: 'Longest Average Travel Distance',
            image: '',
            description: `The school with the highest mean travel distance is <strong>Virginia Tech University</strong>; similar to DePaul, the Hokies
             have only made one appearance as a top seed, resulting in an average travel distance of <strong>2,261 miles</strong> (the distance
             between Blacksburg, Virginia and San Jose, California, where Virginia Tech played as a 4 seed in 2019).`,
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'chapter-14',
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
            id: 'chapter-15',
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
            id: 'chapter-16',
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
        id: 'chapter-17',
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
            id: 'chapter-18',
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

        {
            id: 'chapter-19',
            title: 'Schools with 1 Appearance as Top Seed',
            image: '',
            description: `
            For many schools, making it into the tournament is a huge accomplishment by itself - earning a top seed is
            even more uncommon.
            
            <br><br>Of the 87 schools to have earned a top seed since 1985, <strong>16 of them made only
            a single appearance</strong> with that ranking, traveling a mean distance of <strong>809 miles</strong> (221
            miles above the overall average).
            
            <br><br>Notably, both the <strong>shortest and longest average travel distances</strong> are for schools with
             1 top-
             seed appearance: Depaul University (~13 miles) and Virginia Tech University (~2261 miles), respectively.
            
            <div class="display-more">Click to see schools below &#9662;</div>
            <div class="one-count hidden-panel">
                <div class="seed-hl-row">
                    <div class="seed-hl" style="background:#FFB300">VCU</div>
                    <div class="seed-hl" style="background:#630031"><div class="seed-hl-text">Virginia Tech</div></div>
                    <div class="seed-hl" style="background:#CE1141"><div class="seed-hl-text">Dayton</div></div>
                    <div class="seed-hl" style="background:#003DA5"><div class="seed-hl-text">St. Louis</div></div>
                </div>            
                <div class="seed-hl-row">
                    <div class="seed-hl" style="background:#005CA9"><div class="seed-hl-text">Creighton</div></div>
                    <div class="seed-hl" style="background:#7A0019"><div class="seed-hl-text">Minnesota</div></div>
                    <div class="seed-hl" style="background:#4D1979"><div class="seed-hl-text">TCU</div></div>
                    <div class="seed-hl" style="background:#C8102E"><div class="seed-hl-text">Houston</div></div>
                </div>            
                <div class="seed-hl-row">
                    <div class="seed-hl" style="background:#922247"><div class="seed-hl-text">Loyola-Chicago</div></div>
                    <div class="seed-hl" style="background:#003262"><div class="seed-hl-text">California</div></div>
                    <div class="seed-hl" style="background:#500000"><div class="seed-hl-text">Texas A&M</div></div>
                    <div class="seed-hl" style="background:#E41C38"><div class="seed-hl-text">Nebraska</div></div>
                </div>            
                <div class="seed-hl-row">
                    <div class="seed-hl" style="background:#720000"><div class="seed-hl-text">Southern Illinois</div></div>
                    <div class="seed-hl" style="background:#13294B"><div class="seed-hl-text">Butler</div></div>
                    <div class="seed-hl" style="background:#FFCC00">La Salle</div>
                    <div class="seed-hl" style="background:#005EB8"><div class="seed-hl-text">DePaul</div></div>
                </div>
            </div>
            `,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-20',
            title: 'Schools with 10+ Appearances as Top Seed',
            image: '',
            description: `
            On the flip side, many schools have strong programs that consistently perform at the top level - <strong>22
            schools have made 10 or more appearances as a top seed</strong>, traveling a mean distance very close to the
            overall average at <strong>561 miles</strong> (17 miles below overall average).
            `,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-21',
            title: 'Blue Bloods',
            image: '',
            description: `
            Schools that have historically dominated the college basketball scene have achieved an (unofficial) elite 
            title - <strong>Blue Bloods</strong>. More than just their team colors, Blue Bloods are oftentimes the most 
            prestigious (and hated) teams in the sport. But more often than not, they <em>do</em> prevail during March 
            Madness. While the Blue Blood status is up for debate for many teams, the core 4 are:
            
            <br><br>
            <div class="seed-hl-row">
                <div class="seed-hl" style="background:#7BAFD4">
                  <div class="seed-hl-title">UNC</div>
                  <div class="seed-hl-text">457 miles</div>
                </div>
                <div class="seed-hl" style="background:#0051BA">
                  <div class="seed-hl-title">KANSAS</div>
                  <div class="seed-hl-text">395 miles</div>
                </div>
              <div class="seed-hl" style="background:#0033A0">
                  <div class="seed-hl-title">KENTUCKY</div>
                  <div class="seed-hl-text">440 miles</div>
                </div>
              <div class="seed-hl" style="background:#003087">
                  <div class="seed-hl-title">DUKE</div>
                  <div class="seed-hl-text">299 miles</div>
                </div>
            </div>
            
            <br>
            
            <!-- Duke: 299, 200-->
            <!-- UK: 440, 327-->
            <!-- UNC: 457, 307-->
            <!-- Kan: 395, 275-->
            With a collective <strong>108 March Madness appearances</strong> since 1985, the Blue Bloods traveled an
            average of only <strong>394 miles</strong> (194 miles below overall average).
            
            `,
            location: {
                center: { lon: -95.91291, lat: 36.54204 },
                zoom: 4.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-22',
            title: 'Weighted Distance',
            image: '',
            description: `
            Making apples-to-apples comparisons amongst schools based on their mean travel distance is not possible - 
            travel distances are expected to fluctuate based on the frequency of appearances of each seed in a school's
            history.
            
            <br><br>
            To allow for more accurate comparison amongst schools, weights were applied based on seed values.
            
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
            `,
            location: {
                center: { lon: -95.91291, lat: 36.54204 },
                zoom: 4.8,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};

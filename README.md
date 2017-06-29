## About
This repo is the [app_frame/jekyll/pym version](https://github.com/energyapps/app_frame) of something that was built in 2013. The original repo is found [here](https://github.com/energyapps/egallon-old). 

**IMPORTANT: When editing the gh-pages branch of this repository, you will be editing the content that lives at energy.gov/egallon.**

## Background information
Read the blogs if you're curious about how this came into being. The cms map itself is located [here](https://energy.gov/maps/egallon).

Read about it [here](https://energy.gov/eere/electricvehicles/saving-fuel-and-vehicle-costs) and the methodology can be found [here](https://energy.gov/downloads/egallon-methodology).

More articles:
- https://energy.gov/articles/egallon-how-much-cheaper-it-drive-electricity
- https://energy.gov/articles/egallon-what-it-and-why-it-s-important
- https://energy.gov/articles/ev-sales-skyrocketing-egallon-holds-steady
- https://energy.gov/articles/egallon-and-electric-vehicle-sales-big-picture

## Data
The most important part of this is knowing where the data is from, and how it is collated. All of the data is from EIA. The electricity data is updated on a monthly basis and can be found in tabular form [here](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_06_a). The gasoline is updated on a weekly basis but is not present for every state, therefore some states are grouped by region. It can be found [here](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_06_a). Both sets of data are gathered from the EIA API using a script on energy.gov's servers ([electricity price](https://www.eia.gov/opendata/qb.php?category=1012), [gas price](https://www.eia.gov/opendata/qb.php?category=240691)). This script runs weekly and the resulting data can be found at https://energy.gov/api/egallon/current/combined.json.

A weekly report of this data is emailed to Atiq Warriach and Ernest Ambrose to ensure that it is working properly. If they do not receive it, something is wrong. 

**NOTE**: At the time being, the javascript at `js/script.js` references a local version of the data from `js/combined.json` rather than from https://energy.gov/api/egallon/current/combined.json. This is due to energy.gov/api needing to allow energyapps.github.io as an allowable origin for cross-domain serving. We are working to resolve this through a CORS module addition to the energy.gov drupal platform. Ticket is in Chauncey's hands. 

### Temporary workaround for updating data
To provide weekly data updates to eGallon, follow these steps
1. Download latest json from https://energy.gov/api/egallon/current/combined.json
2. Replace current `js/combined.json` file with the above latest combined.json file. 
3. Push update to production (gh-pages branch)
4. Check to make sure all updates are reflected on energy.gov/egallon

### How to re-integrate automatically updated data (requires CORS enabled)
When CORS is enabled for energyapps.github.io on energy.gov/api, do the following
1. Open `js/script.js`
2. Locate the following line of code: `$.getJSON("js/combined.json",function(result){`
3. Replace it with `$.getJSON("https://energy.gov/api/egallon/current/combined.json",function(result){`
4. Push update to production (gh-pages branch)
	    



## CSS
The css stuff is heavily modified but one essential part is based on [this countdown clock](https://codepen.io/ademilter/pen/czIGo). 

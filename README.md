## About
This repo is the [app_frame/jekyll/pym version](https://github.com/energyapps/app_frame) of something that was built in 2013. The original repo is found [here](https://github.com/energyapps/egallon). 

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

**NOTE**: At the time being, the javascript at `js/script.js` references a local version of the data from `js/combined.json` rather than from https://energy.gov/api/egallon/current/combined.json. This is due to energy.gov/api needing to allow energyapps.github.io as an allowable origin for cross-domain serving. This is in progress of being resolved!

## CSS
The css stuff is heavily modified but one essential part is based on [this countdown clock](https://codepen.io/ademilter/pen/czIGo). 

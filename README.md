# First Contact

##### Origins: NYC Campus ~2015
##### Modified by Peter Petrov
##### Hints and clarifications by Karolin Rafalski
##### Modified by Linawaty

# X-Files Sighting
Create index of sightings from JSON files. With links to details page and custom filter to find by any combination. 

### Goal
Index and dynamics view files based on user input.

### Demo
https://x-files-sightings.herokuapp.com/ 

### Technology Used
- Javascript
- Node / Express
  - express
  - nodemon
  - ejs
- CSS Template
  - https://bulma.io/

### Function
- Index page (GET - render index.ejs) to provide various ways for user to find the sighting ('/')
- List All page (GET - render view.ejs) to list all known sightings ('/all')
- By State page (GET - render view.ejs) to list all known sightings in selected State ('/filter')
- By City page (GET - render view.ejs) to list all known sightings in selected City ('/filter')
- By Date page (GET - render view.ejs) to list all known sightings in selected Date ('/filter')
- By Shape page (GET - render view.ejs) to list all known sightings in selected Shape ('/filter')
- Custom Filter page (GET - render view.ejs) to list all known sightings according to criteria entered by user in the form ('/filter')


### Screenshots
- Index Page
<img src="https://github.com/lyyyn/x-files/blob/master/screenshots/index.png" width="500px"/>

- List All Page
<img src="https://github.com/lyyyn/x-files/blob/master/screenshots/view-all.png" width="500px"/>

- Filter Page
<img src="https://github.com/lyyyn/x-files/blob/master/screenshots/filter.png" width="500px"/>
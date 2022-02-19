# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #2: LSS (Local Space Station) React Web Application 

## Overview

* For our second project in the GA Software Engineering Immersive Program, we had to **build a React application** that consumes a **public API**. We decided to build a calendar using  **[React-Calendar Library](https://blog.logrocket.com/react-calendar-tutorial-build-customize-calendar/)** that consumes **[NASA's APOD (Astronomy Picture of the Day) API](https://api.nasa.gov/)**. Our calendar shows a thumbnail image of the NASA image for a given date on the calendar. Each date on the calendar links to the day's full image and explanation of the image. This explanation is also pulled from the API. 

### Technical aspects of our project  

Our app had to do the following:

* **Consume a public API** - we fetched our data from NASA's APOD API: https://api.nasa.gov/planetary/apod
* **The app had to include a router** - our routes are housed in our App.js file.
* **Include a wireframe** - **[here it is](https://s3.amazonaws.com/shecodesio-production/uploads/files/000/027/401/original/wireframe-for_project-2.png?1645095611)**. 
* Demonstrate **semantically clean HTML** - we reread our code to make sure it read clearly.
* **Be deployed online** - you can have a look here! => **[Local Space Station](https://mystifying-goldberg-c06879.netlify.app/)**.
* **Extra's we added** - we imported the React-Calendar Library 


## Explanations of the **technologies** used
We used the following technologies:
* **[React](https://reactjs.org/)** - allowed us to deplop a single page application
* **[ReactRouter](https://reactrouter.com/)**
* **[React-Calendar](https://github.com/wojtekmaj/react-calendar)** - provided a library of functions and settings that facilitated calendar design
* **[Bulma](https://bulma.io/)** - we imported this CSS library to help with styling. It was the CSS library we'd worked with a bit in class, and was fun to explore. 

## A couple of paragraphs about the **general approach you took**
* Firstly, we defined the basic project, and then took that concept and wireframed the idea. Here we built out what functionality we'd implement, and what components we needed on the screen. This stage really helped us to define our MVP and the basic files we would work on.
* Our general approach then was to split out the work, each knowing what the component should do and asking / explaining when we got stuck. 

## **Installation instructions** for any dependencies
* Here's the link to our **wireframes** – sketches of major views / interfaces in your application

## Descriptions of any **unsolved problems** or **major hurdles** your team had to overcome
* During our project we had a couple of obstacles to overcome.
* Since we were using a library as well as an API - a calendar library and a NASA images API - we had to get those two to play nicely together. In the beginning, normal images would load on the calendar but the NASA API images wouldn't. We overcame this by adding a 'loading' image, which would show while the NASA image URLs were still downloading. This simple check ensured that as soon as the data was fetched, the images would show, as React would re-load the page. It also helped with our issue that the API load was slow. This is still an ongoing issue that to load the data for a whole month, as we do for the calendar page, takes a noticable time. Although we could not speed this up due to API limitations, our loading images minimise the impact.
    
* Another hurdle we faced was working together as a team. Since this is our first pair-coding exercise, we had to figure out how to split up the work. It took a lot more communication than we expected, because we found at times we'd be working on the same sections of code, or that there were only 2 things to work on at the time between 3 of us. We found a tactic which worked really well was splitting out the work between us, and agreeing to check in 30 minutes later for a quick update. One time this worked especially well, was when we were choosing which calendar API to use, and we investigated one of these each to report back. As for the lack of work issue, we found smaller tasks to do such as styling, and ensured that we mixed this up between people. We also swapped tasks when stuck on something, which helped to get fresh eyes on the code.
    
* Finally, a problem we didn't manage to solve was getting the 'back to calendar' button from any given date page to direct the user to the calendar month the date was from. Instead, it always directs to the real-life current month. This is something we ideated around, including changing the URL of the calendar to include the month shown, but essentially didn't have time to implement the complexity it required.

* One thing we would do differently next time is to write more pseudo-code at the beginning of the project. We feel this would help to structure our process more and ensure we're looking at problems from the same angle at the get-go. When working on a project alone, a lot of the pseudo-code can be in your head, but with other people it's much better to be clear about for example what data is passed from one component to another, especially when each working on those components separately. 
    
* We are also more comfortable with reading documentation and see the value in doing this before diving into a project using, for example, a library. When we were comparing the documentation for calendar libraries, there were vastly different functionalities between the offerings and it was important we used one flexible enough for our needs, but was also great that we used one small and specialised enough that we weren't installing gigantic files or firing complex commands for simple effects.

---

## Stretch Goals if we had more time 
* Implement functionality on the "Back to Calendar" button taking the user from the page with the big image back to the month they were on in the calendar.

* Styling: If we had more time we'd ensure the footer was stuck to the bottom of the screen on each page, and also keep changing the styling of the calendar. 

* Add a 'weather' page to the app. This would list the weather in a number of locations in space. Implementing this would require another API.

* Quiz page for space facts. This would use another API again, to build out the LSS.


---



---

## Project Timeline 

* Project kicked off 12 Feb 2022, and we presented  19 Feb 2022. There were 20 hours of course time to complete it. 


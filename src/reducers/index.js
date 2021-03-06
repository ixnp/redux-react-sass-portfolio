import {toggleNav} from '../actions'

//add combine reducers
const missionStatment = 'Comic lover and Artist turned software developer. My passion in coding lies in creating dynamic full stack applications using Node.js with React and Redux. Never wanting to limit myself, I prioritize being a lifelong learner and pursuing new technologies and methodologies. Currently, I am an instructor for adults looking to pivot their careers to software development. My focus is teaching the fundamentals of object oriented programming and full stack development.'
const projectArr = [
  {
    name: "Plant Parent",
    technologies: "Node.js React Redux SCSS Ruby on Rails",
    role: "Instructor and Project Lead",
    url: "",
    description:
      "An example project built for a weekend workshop.The purpose of this app is to demonstrate the basics of a full stack react application to Students.Built over a 3 day workshop, the project includes a front end built on Node.js using React and Redux, styled with SCSS and features a Rails backend.",
    img: {
      big: "https://i.imgur.com/jmivCmz.png"

    },
    selected: true
  },
  {
    name: "Digital Pheromones",
    technologies: "Jquery SCSS",
    role: "UX/UI Designer and Developer",
    url: "",
    description:
      "Developed with a team of instructors this application was created for a workshop demonstrating a Full Stack application using React /Redux for the front end, a Rails/PostgreSQL API and unit tests The workshop included lectures introducing the basics of these technologies and short exercise for students to add features to the product application.",
    img: {
      big:"https://i.imgur.com/XcEsCbL.png",
      med: "",
      small: ""
    },
    selected: false
  }
];
const initalState = {
    projectsItems: {
        projects:projectArr,
        index:0
         
    },
    skills: {},
    navDisplay: 'closed',
    contactDisplay: false,
    form: {},
    graphType:'bar',
  missionStatment: missionStatment
}

export const reducers = (state=initalState, action) => {
    switch(action.type){  
        
        case 'TOGGLE_CLOSE': {
            
    
            return {
                ...state, navDisplay: 'closed'
            }
        }
        case 'TOGGLE_OPEN': {
            
            return {
                ...state, navDisplay: action.payload
            }
        }
        case 'FORM_VALUE' : {
            return {
                ...state, form: action.payload
            }
        }
        case 'PROJECT_SELECTION':{
        let temp = state.projectsItems;
        console.log(action.payload, temp.projects.length)
        temp.projects[action.payload].selected = false;
        if (action.payload >= temp.projects.length - 1) {
          temp.projects[0].selected = true;
          temp.index = 0;
        } else {
          temp.projects[action.payload + 1].selected = true;
          temp.index = temp.index + 1;
        }
       
        
          return {
           ...state, projectsItems: temp
          }
        }
     
        default :{
            return state;
        }
     
    }
     
    
}
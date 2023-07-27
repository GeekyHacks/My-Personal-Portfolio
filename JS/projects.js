// // Projects section

export const projectsarray = [
  {
    Name: 'JavaScript Unit Testing with Jest',
    description: "In this repo I will be practicing Unit testing for JavaScript app using AAA pattern, and Test Driven Development TDD.",
    img: './assests/images/jest.svg',
    technologies: ['Jest', 'JS', 'HTMl','Testing'],
    popupBtn: 'See Project',
    popImg: './assests/images/jest.svg',
    liveVersion: 'https://github.com/GeekyHacks/TestingPractice/tree/main',
    sourecLink: 'https://github.com/GeekyHacks/TestingPractice/tree/main',
  },
  {
    Name: 'ToDOList',
    description: "the project is about adding todo list that can be add, removed, marked, and edit. It will include mainly JS code and sass or styling.",
    img: './assests/images/todolist.png',
    technologies: ['HTML', 'JS', 'WebPack', 'Sass'],
    popupBtn: 'See Project',
    popImg: './assests/images/todolist.png',
    liveVersion: 'https://github.com/GeekyHacks/ToDoList/dist/index.html',
    sourecLink: 'https://github.com/GeekyHacks/ToDoList',
  },
  {
    Name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s./",
    img: './assests/images/project3-img.svg',
    technologies: ['HTML', 'JS', 'CSS', 'Ruby&Rails'],
    popupBtn: 'See Project',
    popImg: './assests/images/Snapshoot Portfolio.svg',
    liveVersion: 'https://geekyhacks.github.io/My-Personal-Portfolio/',
    sourecLink: 'https://github.com/GeekyHacks/My-Personal-Portfolio',
  },
  {
    Name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s./",
    img: './assests/images/project4-img.svg',
    technologies: ['HTML', 'JS', 'CSS', 'Ruby&Rails'],
    popupBtn: 'See Project',
    popImg: './assests/images/Snapshoot Portfolio.svg',
    liveVersion: 'https://geekyhacks.github.io/My-Personal-Portfolio/',
    sourecLink: 'https://github.com/GeekyHacks/My-Personal-Portfolio',
  },
  {
    Name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s./",
    img: './assests/images/project2-img.svg',
    technologies: ['HTML', 'JS', 'CSS', 'Ruby&Rails'],
    popupBtn: 'See Project',
    popImg: './assests/images/Snapshoot Portfolio.svg',
    liveVersion: 'https://geekyhacks.github.io/My-Personal-Portfolio/',
    sourecLink: 'https://github.com/GeekyHacks/My-Personal-Portfolio',
  },
  {
    Name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s./",
    img: './assests/images/project4-img.svg',
    technologies: ['HTML', 'JS', 'CSS', 'Ruby&Rails'],
    popupBtn: 'See Project',
    popImg: './assests/images/Snapshoot Portfolio.svg',
    liveVersion: 'https://geekyhacks.github.io/My-Personal-Portfolio/',
    sourecLink: 'https://github.com/GeekyHacks/My-Personal-Portfolio',
  },
];

export function createProjects() {
  const projects = document.querySelector('.projectsContainer');
  for (let i = 0; i < projectsarray.length; i += 1) {
    const card = document.createElement('div');
    card.classList.add('project');

    card.innerHTML = `
   
    <img class="project_img" src='${projectsarray[i].img}' alt="project1-img" />
    <div class="projectContent">
      <h3 class="project1-content-sec1">
      ${projectsarray[i].Name}
      </h3>
      <ul class="project1-content-sec2">
        <li class="small-li" for="html">${projectsarray[i].technologies[0]}</li>
        <li class="small-li" for="JS">${projectsarray[i].technologies[1]}</li>
        <li class="small-li" for="CSS">${projectsarray[i].technologies[2]}</li>
        <li class="big-li" for="Ruby">${projectsarray[i].technologies[3]}</li>
      </ul>
  
      <button class="projectBtn" type="button" title="see-project">${projectsarray[i].popupBtn}</button>
    </div>
  
  
  `;
    projects.appendChild(card);
  }
}

createProjects();


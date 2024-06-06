
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome ");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("You can run several commands:");
  createCode("home",        "For Homepage");
  createCode("all",         "See all commands.");
  createCode("about me",    "Who me?");
  createCode("contact",     "Want to contact me?");
  createCode("clr",         "Clear the terminal");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# JSP";
  span1.textContent = " in";
  span2.textContent = " ~/guest";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "all"){
    trueValue(value);
    createCode("home",      "For homepage ;)");
    createCode("projects",  "My projects ;)");
    createCode("about me",  "Who me?");
    createCode("contact",   "Want to contact me?.");
    createCode("clr",       "Clear the terminal.");
    createCode("skills",    "Technical soft skills") 
  }
  else if(value=== "home"){
    trueValue(value);
    createText("Click here <a href='https://linktr.ee/jeromespavilion' target='_blank'>https://linktr.ee/jeromespavilion</a>")
  }
  else if(value === "projects"){
    trueValue(value);
    createText("Click the following below:")
    createText("<a href='https://drive.google.com/drive/u/2/folders/1bVe8sXYii01Urbi7_a-soxy_3bliEgqu'  target='_blank'>Documents (Resume, CV, etc.)</a>")
    createText("<a href='https://behance.net/jeromespavilion'                                           target='_blank'>Multimedia (Design, Art, Motion & Video Edits, 3D)</a>")
    createText("<a href='https://github.com/pavilionjeromeuses'                                         target='_blank'>Development (HTML, SCSS, JavaScript)</a>")
    createText("<a href='https://poolskimmer.com/'                                                      target='_blank'>Writing #1 (Pool Skimmer)</a>")
    createText("<a href='https://www.waterfilteradvisor.com/'                                           target='_blank'>Writing #2 (Water Filter Advisor)</a>")
  }
  else if(value === "about me"){
    trueValue(value);
    createText("💻 Hi there,")
    createText("My name is Jerome S. Pavilion and I am a highly experienced freelancer with a background in different industries. I have worked on a wide range of projects, from creating visual identities for global brands to designing eye-catching marketing materials, and to the world of development industries. I am constantly looking for new challenges and opportunities to grow as a freelancer, and am excited to see where this journey takes me.")
    createText("<br>")
    createText("I am eager to connect with other professionals in the industry and share ideas, so please feel free to reach out and connect on LinkedIn.")
    createText("<br>")
    createText("Thank you very much!")
  }
  else if(value === "contact"){
    trueValue(value);
    createText('<a href="mailto:someone@example.com">Send Email</a>')
    createText('<a href="https://www.linkedin.com/in/jeromepavilion/" target="_blank">LinkedIn</a>')
    createText('<a href="https://www.upwork.com/search/profiles/?q=jerome%20s.%20pavilion&profile=~018ecf71c8c55727bf" target="_blank">UpWork</a>')
    createText('Skype: live:.cid.95380019db0e3446')
    createText('Discord: jspemorej')
  }
  else if(value === "skills"){
    trueValue(value);
    createText("Adobe Suite:")
    createText("Photoshop (Photo Editing/Manipulation & Raster Artworks)")
    createText("Illustrator (Vector Designs, Illustrations, & Page Layouts)")
    createText("Premiere Pro (Video Editing)")
    createText("After Effects (Video Editing & Motion Graphics)")
    createText("Animate (Frame by Frame Animation & Motion Graphics)")
    createText("Dreamweaver (Web Design & Development)")
    createText("<br>")
    createText("Figma")
    createText("Blender (For 3D Modelling, Sculpting, Animation, Editing, & Rendering)")
    createText("<br>")
    createText("Google Suite")
    createText("Skype, Zoom, Discord, MS Teams")
  }
  
  else if(value === "clr"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
// ------- HAMBURGER MENU TOGGLE -------
const menuBtn = document.querySelector(".navbar-toggle");
const closeBtn = document.querySelector(".navbar-close");
const navMenuCtn = document.querySelector(".navbar-menu-container");
const navItems = document.querySelectorAll(".navbar-menu .navbar-item");

menuBtn.addEventListener("click", () => {
    navMenuCtn.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navMenuCtn.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navMenuCtn.classList.remove("active");
    });
});

// ------- STICKY NAVIGATION -------
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});

// ------- ACCORDION -------
const accordions = Array.from(document.querySelectorAll('.accordion'));

accordions.forEach(accordion => {
  const accordionHeader = accordion.querySelector('.aHeader');

  accordionHeader.addEventListener('click', e => {
    accordion.classList.toggle('isOpen');
  })
})

// ------- TODOS -------
let tdList = {
    todos: [],
    addTD: function(tdText) {
      this.todos.push({
        todoText: tdText,
        completed: false
      });
    },
    editTD: function(position, todoText) {
      this.todos[position].todoText = todoText;
    },
    deleteTD: function(position) {
      this.todos.splice(position, 1);
    },
    toggleComplete: function(position) {
      var td =  this.todos[position];
      td.completed = !td.completed;
    },
    //  if all todos are true make them all false
    tgAll: function() {
      var totalTDs = this.todos.length;
      var completedTDs = 0;
      // track completed todos
      for (var i = 0; i < totalTDs; i++) {
        if (this.todos[i].completed === true) {
          completedTDs++;
        }
      }
      // if all is true condition make everything false condition
      if(completedTDs === totalTDs) {
        for (var i = 0; i < totalTDs; i++) {
          this.todos[i].completed = false;
        }
        // otherwise make everything is true
      } else {
        for (var i = 0; i < totalTDs; i++) {
          this.todos[i].completed = true;
        }
      }
    }
  };
  // this is the handlers object which consolidates the code/methods easier
  let handlers = {
    addTD: function() {
      let addTDTextInput = document.getElementById('addTDTextInput');
      tdList.addTD(addTDTextInput.value);
      addTDTextInput.value =' '; 
      display.displayTDs();
    },
    editTD: function() {
      let editTDPosInput = document.getElementById('editTDPosInput');
      let editTDTextInput = document.getElementById('editTDTextInput');
      tdList.editTD(editTDPosInput.valueAsNumber, editTDTextInput.value);
      editTDPosInput.value = ''; // no space for a number
      editTDTextInput.value = ' '; // space between quotes for a string
      display.displayTDs();
    },
    deleteTD: function() {
      let deleteTDPosInput = document.getElementById('deleteTDPosInput');
      tdList.deleteTD(deleteTDPosInput.valueAsNumber);
      deleteTDPosInput.value = '';
      display.displayTDs();
    },
    toggleCompleted: function() {
      let tgCompletedPosInput = document.getElementById('tgCompletedPosInput');
      tdList.toggleComplete(tgCompletedPosInput.valueAsNumber);
      tgCompletedPosInput.value = '';
      display.displayTDs();
    },
    tgAll: function() {
      tdList.tgAll();
      display.displayTDs();
    }
  };
  // object that handles what user sees on the page
  let display = {
    displayTDs: function() {
      let tdUL = document.querySelector('ul');
      tdUL.innerHTML = '';  //clears the ul before start adding items
      
      for (let i = 0; i < tdList.todos.length; i++) {     
        let tdLI = document.createElement('li');
        let todo = tdList.todos[i];
        let tdTextWithCompletion = '';     
        if(todo.completed === true) {
          tdTextWithCompletion = '(x) ' + todo.todoText;
        } else {
          tdTextWithCompletion = '( ) ' + todo.todoText;
        }
        tdLI.textContent = tdTextWithCompletion;
        tdUL.appendChild(tdLI);
      }
    }
  };
 
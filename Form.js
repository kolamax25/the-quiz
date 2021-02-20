class Form{
    constructor(){
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.title = createElement('h2');
    this.input1  = createInput("Enter correct answer");
    this.button1 = createButton("Submit")
    
    }
    

    hide(){ 
        this.button.hide();
        this.input.hide();
        
        this.A.hide();
        this.B.hide();
        this.C.hide();
        this.D.hide();

  this.button1.hide();
  this.input1.hide();
  
      }

display(){
//position for title, also the title name
this.title.html("The Quiz Game")
this.title.position(200, 0)

//position the button and input boxes
this.input.position(100, 200)
this.button.position(250,200)

this.button1.hide();
this.input1.hide();
//mouse pressed on button

this.button.mousePressed(()=>{

this.button.hide();
this.input.hide();


//create quiz elements for question and options
this.question = createElement("h2")
this.question.html("What does 1 + 1 equal?")
this.question.position(300, 100)

this.A = createElement("h2");
this.A.html("A. 2");
this.A.position(200, 150);

this.B = createElement("h2");
this.B.html("B. Window");
this.B.position(350, 150);

this.C = createElement("h2");
this.C.html("C. 11");
this.C.position(200, 250);

this.D = createElement("h2");
this.D.html("C. 3-1");
this.D.position(350, 250);

this.input1.show();
this.input1.position(200, 350);

this.button1.show();
this.button1.position(350, 350);

player.name = this.input.value();
  
  playerCount += 1;
  player.index = playerCount;

  player.update();
  player.updateCount(playerCount);

})


this.button1.mousePressed(()=>{

  //this.result1 = createElement("h2");
  //this.result1.html(this.name)
  //this.result1.position(200, 300)

  this.button1.hide();
  this.input1.hide();
  player.answer = this.input1.value();

  player.update();

})



}
  


  
   
    
}

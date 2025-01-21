// for accessing all buttons  
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// there must be an variable to track the turn of players

// let taking starting turn of player "O" 
let turnO = true; 

// now we have to store the winning pattern via 2d array mean arrays of array 


const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


// creating event listener for all buttons

boxes.forEach( (box) => {
    //adding event listener for all boxes
    box.addEventListener( "click", () =>{
        console.log("box was clicked");

        if (turnO){
            //player O
            box.innerText = "O";

            turnO = false;
        }else{
            //playerX;
            box.innerText = 'X';
            turnO = true;
        }
        //disabling reclicking for edit 
        box.disabled = true;

        // create function checkWinner() to track which player wins
        checkWinner();
    })
    
});

// create the reset function 
const resetGame = () => {
    turnO = true;//starting game with player "0"
    enableBoxes();
    msgcontainer.classList.add("hide");
}

// function to disable the buttons after we get winner 
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

// function to enable the buttons after we press reset button  
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;

        // clean whole content inside the filled boxes; 
        box.innerText = "";
    }

}

//   for showing the winner lets make another funtion 
const showWinner = (winner) => {
    msg.innerText = `Cogratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");//to print the msg  hide this class

    // for disable funtion 
    disableBoxes();

}
const checkWinner = () => {
    // loop on winpatterns 
    for( let pattern of winpatterns){
        // from array pattern  we have to extract the indivudual arrays 
        // below will give us whole array of pattern wins
                // console.log(pattern);
        // belwo will give us the individual array elements indexes of winpatterns
                // console.log(pattern[0], pattern[1] ,pattern[2]);
        // now we have indivudual array elements indexes and need to check all pattern position one by one if we click those 

     
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);

        // print the inner value and compare them 
        // console.log(
        //     let pos1Val = boxes[pattern[0]].innerText,
        //     let pos2Val = boxes[pattern[1]].innerText,
        //     let pos3Val = boxes[pattern[2]].innerText, 
            
        //  );

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            
            if(pos1Val === pos2Val && pos2Val=== pos3Val){
            // pos1val will be the winner player 
              console.log("winner",pos1Val);

            //for showing the winner lets call the funtion.
            showWinner(pos1Val);//pos1val will be always the winner
            }
        }
    }
};
// To track which player is winning 
// taking first rows as position[0] postion[1] positon[2]

// now using reset button function
// lets create the reset game event listener 
newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
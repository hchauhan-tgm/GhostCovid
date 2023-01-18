<template>
    <div class="schiebepuzzle">
      <!--<Headerspiele msghs="SCHIEBEPUZZLE" link="/training/spiele/schiebepuzzle"/>-->
        <template>
            <div class="nav">
                <img class="logo" alt="['goostcohvit'] logo" src="../assets/GhostCovidLogo.png" />
                <div class="nav22">
                    <b class="text2">SCHIEBEPUZZLE</b>
                    <b class="text2">||</b>
                    <i><router-link to="/training/spiele" class="text">Zurück</router-link></i>
                    <b class="text2">|</b>
                    <i @click="reloadPage" class="text" style="cursor:pointer">Neustart</i>
                    <b class="text2">|</b>
                    <i @click="reloadPage" class="text" style="cursor:pointer">Anleitung</i>
                </div>
            </div>
        </template>

      <Titel msg="" /><br>
      <div class="endscreen" id="-1" style="margin-top:0px">
            <EndScreen :key="endKeys" :points="movesc" :name="name" :time="zeit"/>
        </div>
      <!--<router-link to="/training/spiele"><button class="button1">zurück</button></router-link><br>-->
      <router-link to="/training/spiele"><button class="button4">zurück</button></router-link><br>
      
      <div class="game" style="margin-top:15px">
        <div class="grid">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>10</button>
          <button>11</button>
          <button>12</button>
          <button>13</button>
          <button>14</button>
          <button>15</button>
          <button></button>
        </div>
      </div>
      
      <div class="row" style="width:50%">
        <div class="col s6" style="text-align:right"><span id="move">Moves: 0</span></div>
        <div class="col s6" style="text-align:left"><span id="time">Time: 0</span></div>
      </div>
    
      <!--LOGO & ENDE--->
      <p class="textgew">Gewonnen</p>
      <p class="textgra">Gratulation</p>
      <div class="endgame"> 
      </div>

      <Footerspiele msgfs="Schiebepuzzle" />
    </div>
  
</template>
<script>
class Box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getTopBox() {
    if (this.y === 0) return null;
    return new Box(this.x, this.y - 1);
  }

  getRightBox() {
    if (this.x === 3) return null;
    return new Box(this.x + 1, this.y);
  }

  getBottomBox() {
    if (this.y === 3) return null;
    return new Box(this.x, this.y + 1);
  }

  getLeftBox() {
    if (this.x === 0) return null;
    return new Box(this.x - 1, this.y);
  }

  getNextdoorBoxes() {
    return [
      this.getTopBox(),
      this.getRightBox(),
      this.getBottomBox(),
      this.getLeftBox()
    ].filter(box => box !== null);
  }

  getRandomNextdoorBox() {
    const nextdoorBoxes = this.getNextdoorBoxes();
    return nextdoorBoxes[Math.floor(Math.random() * nextdoorBoxes.length)];
  }
}

const swapBoxes = (grid, box1, box2) => {
  const temp = grid[box1.y][box1.x];
  grid[box1.y][box1.x] = grid[box2.y][box2.x];
  grid[box2.y][box2.x] = temp;
};

const isSolved = grid => {
  return (
    grid[0][0] === 1 &&
    grid[0][1] === 2 &&
    grid[0][2] === 3 &&
    grid[0][3] === 4 &&
    grid[1][0] === 5 &&
    grid[1][1] === 6 &&
    grid[1][2] === 7 &&
    grid[1][3] === 8 &&
    grid[2][0] === 9 &&
    grid[2][1] === 10 &&
    grid[2][2] === 11 &&
    grid[2][3] === 12 &&
    grid[3][0] === 13 &&
    grid[3][1] === 14 &&
    grid[3][2] === 15 &&
    grid[3][3] === 0
  );
};

const getRandomGrid = () => {
  document.querySelector(" .endscreen").style.visibility = 'hidden';
  let grid = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]];
  let blankBox = new Box(3, 3);
  for (let i = 0; i < 1000; i++) {
    const randomNextdoorBox = blankBox.getRandomNextdoorBox();
    swapBoxes(grid, blankBox, randomNextdoorBox);
    blankBox = randomNextdoorBox;
  }

  if (isSolved(grid)) return getRandomGrid();
  return grid;
};

class State {
  constructor(grid, move, time, status) {
    this.grid = grid;
    this.move = move;
    this.time = time;
    this.status = status;
  }

  static ready() {
    return new State(
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      0,
      0,
      "ready"
    );
  }

  static start() {
    return new State(getRandomGrid(), 0, 0, "playing");
  }
}

class Game {
  constructor(state) {
    this.state = state;
    this.tickId = null;
    this.tick = this.tick.bind(this);
    this.render();
    this.handleClickBox = this.handleClickBox.bind(this);
  }

  static ready() {
    return new Game(State.ready());
  }

  tick() {
    this.setState({ time: this.state.time + 1 });
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  handleClickBox(box) {
    return function() {
      const nextdoorBoxes = box.getNextdoorBoxes();
      const blankBox = nextdoorBoxes.find(
        nextdoorBox => this.state.grid[nextdoorBox.y][nextdoorBox.x] === 0
      );
      if (blankBox) {
        const newGrid = [...this.state.grid];
        swapBoxes(newGrid, box, blankBox);
        if (isSolved(newGrid)) {
          clearInterval(this.tickId);
          this.setState({
            status: "won",
            grid: newGrid,
            move: this.state.move + 1 
          });
        } else {
          this.setState({
            grid: newGrid,
            move: this.state.move + 1 
          });
        }
      }
    }.bind(this);
  }

  render() {
    const { grid, move, time, status } = this.state;
    const newGrid = document.createElement("div");
    newGrid.className = "grid";
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const button = document.createElement("button");

        if (status === "playing") {
          button.addEventListener("click", this.handleClickBox(new Box(j, i)));
        }

        button.textContent = grid[i][j] === 0 ? "" : grid[i][j].toString();
        newGrid.appendChild(button);
      }
    }
    document.querySelector(".grid").replaceWith(newGrid);
    if (status === "ready")  {
      clearInterval(this.tickId);
      this.tickId = setInterval(this.tick, 1000);
      this.setState(State.start());
    }
      document.getElementById("move").textContent = `Moves: ` + move;
      document.getElementById("time").textContent = `Time: ` + time;
    

    if (status === "won") {
      document.querySelector(".endscreen").style.visibility = 'visible';
      this.movesc = move;
      alert(this.movesc);
      this.zeit = time;
      this.endKeys += 1;
    
      
    }
  }
}


export default {
  name: "Schiebepuzzle",
  components: {
  },
  data() {
        return {
            status: "",
            movesc: 0,
            name: "Schiebepuzzle",
            zeit: 0,
            endKeys: 0
        }
  },
  mounted:function(){
    Game.ready();
    
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
    start: function startGame() {
      document.querySelector(" .endscreen").style.visibility = 'hidden';
      location.reload();
    },
  }
};
</script>

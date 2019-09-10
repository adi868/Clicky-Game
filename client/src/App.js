import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./pokemon.json";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

class App extends Component {
  // Setting this.state.friends to the pokemon JSON array
  state = {
    friends,
    score: 0,
    highScore: 0,
    mid: "Click an image to begin!",
    colorStyle: "text-white"
  };

  clickPokemon = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.map(friend => {
      if (friend.id === id) {
        if (friend.clicked === false) {
          friend.clicked = true
          if (this.state.score === 20) {
            console.log("You Win!")
            this.youWin();
          } else {
            this.setState({ score: this.state.score + 1 }, function () {
              console.log(this.state.score);
              this.setState({ mid: "Nice! Keep going!!" });
              this.setState({ colorStyle: "text-primary" })
            });
          }
        } else {
          this.gameOver()
        }
      }
      return friend
    });

    // Set this.state.friends equal to the new friends array
    this.setState({ friends });

    const newArray = this.state.friends.sort(() => Math.random() - 0.5)
    this.setState({ friends: newArray })
  };

  gameOver = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score }, function () {
        console.log(this.state.highScore);
      })
    }
    this.state.friends.forEach(friends => {
      friends.clicked = false;
    });
    this.setState({ mid: "Oh no! Click an image to play again." });
    this.setState({ score: 0 });
    this.setState({ colorStyle: "text-danger" })
    return true;
  }

  youWin = () => {
    this.setState({ highScore: 20 }, function () {
      console.log(this.state.highScore);
    })
    this.state.friends.forEach(friends => {
      friends.clicked = false;
    });
    this.setState({ mid: "OMG! You're a Pokemon master :)" });
    this.setState({ score: 0 });
    this.setState({ colorStyle: "text-success" })
    return true;
  }
  // Map over this.state.friends and render a Pokemon Card component for each friend object
  render() {
    return (
      <span>
        <NavBar score={this.state.score} highScore={this.state.highScore} mid={this.state.mid} colorStyle={this.state.colorStyle} />
        <Title></Title>
        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard
              removeCard={this.clickPokemon}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              clicked={friend.clicked}
              image={friend.image}
            />
          ))}
        </Wrapper>
        <Footer />
      </span>
    );
  }
}
export default App;

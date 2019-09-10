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
    highscore: 0,
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a Pokemon Card component for each friend object
  render() {
    return (
      <span>
      <NavBar score={this.state.score} highscore={this.state.highscore}/>
      <Title></Title>
      <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clicked={friend.clicked}
          />
        ))}
      </Wrapper>
      <Footer/>
      </span>
    );
  }
}
export default App;

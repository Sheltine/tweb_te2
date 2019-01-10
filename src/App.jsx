/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { Query, ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from 'apollo-boost';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import './App.css';


const BACKEND_URL = 'https://floating-mountain-41489.herokuapp.com/';
const tmp = [];

const httpLink = new HttpLink({ uri: BACKEND_URL });
const authLink = new ApolloLink((operation, forward) => {
    operation.setContext({
    headers: {
        authorization: 'f1be4bafe6f7cb0cb84f5948c5b75497',
    },
});
return forward(operation);
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});


const query = gql`
{
  popularMovies{
    total_pages,
    results {
      title,
      poster_path,
      release_date,

    },
  }
}
`;

class App extends Component {
// eslint-disable-next-line class-methods-use-this

constructor(props) {
  super(props);
  this.state = {
      selected: [],
  };
  this.selectMovie = this.selectMovie.bind(this);
}

selectMovie(event) {
  console.log('selected: ', event.target.alt);
  if (tmp.indexOf(event.target.alt) === -1) {
    tmp.push(event.target.alt);

    this.setState({
      selected: tmp,
  });
  } else {
    tmp.splice(tmp.indexOf(event.target.alt), 1);
    this.setState({
      selected: tmp,
  });
  }
  console.log('total: ', this.state.selected);
}

  render() {
    return (
      <div className="App">
        <main className="App-main">
          <div className="App-content">
            <Link to="/upcoming">Upcoming</Link>
            <br />
            <div>
              <h3>Votre sélection: </h3>
              <ListGroup componentClass="ul">
                {
                this.state.selected.map(sel => (
                  <ListGroupItem className="Follow-style">{sel}
                  </ListGroupItem>
                  ))
                  }
              </ListGroup>
            </div>

            <ApolloProvider client={client}>
              <Query query={query}>
                {({ data, loading, error }) => {
                  console.log('error: ', error);
                  console.log('data: ', data);
                  if (error) return 'Oups an error occured. Please check the console';
                  if (loading) return 'Loading...';
                  return (
                    <div>
                      {data.popularMovies.results.map(movie => (
                        <div className="Movies-style">
                          <p>
                            {movie.title}
                          </p>
                          <img onClick={this.selectMovie} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} height={200} width="auto" />
                          <i>Release: {movie.release_date}</i>
                        </div>
                      ))
                  } </div>
                  );
                }}
              </Query>
            </ApolloProvider>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

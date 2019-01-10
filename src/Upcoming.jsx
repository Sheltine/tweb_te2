import React, { Component } from 'react';
import { Query, ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from 'apollo-boost';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import './App.css';


const BACKEND_URL = 'https://floating-mountain-41489.herokuapp.com/';


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
    upcomingMovies(page:1){
    total_pages,
    results {
      title,
      poster_path,
      release_date,

    },
  }
}
`;
const query2 = gql`
{
    upcomingMovies(page:2){
    total_pages,
    results {
      title,
      poster_path,
      release_date,

    },
  }
}
`;
const query3 = gql`
{
    upcomingMovies(page:3){
    total_pages,
    results {
      title,
      poster_path,
      release_date,

    },
  }
}
`;
const query4 = gql`
{
    upcomingMovies(page:4){
    total_pages,
    results {
      title,
      poster_path,
      release_date,

    },
  }
}
`;

const query5 = gql`
{
    upcomingMovies(page:5){
    total_pages,
    results {
      title,
      poster_path,
      release_date,
      original_language
    },
  }
}
`;

class Upcoming extends Component {
// eslint-disable-next-line class-methods-use-this
constructor(props) {
    super(props);
    this.state = {
        filter: 'fr',
    };
  }

  render() {
    return (
      <div className="App">
        <main className="App-main">
          <div className="App-content">
            <Link to="/">Popular</Link>
            <ApolloProvider client={client}>
              <Query query={query}>
                {({ data, loading, error }) => {
                  console.log('error: ', error);
                  console.log('data: ', data);
                  if (error) return 'Oups an error occured. Please check the console';
                  if (loading) return 'Loading...';
                  return (
                    <div>
                      {data.upcomingMovies.results.map((movie) => {
                          if (movie.original_language === this.state.filter) {
                              return (
                                <div className="Movies-style">
                                  <p>
                                    {movie.title}
                                  </p>
                                  {console.log(movie.poster_path)}
                                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} height={200} width="auto" />
                                  <i>Release: {movie.release_date}</i>
                                </div>
                            );
                          }
                      })
                  } </div>
                  );
                }}
              </Query>
              <Query query={query2}>
                {({ data, loading, error }) => {
                  console.log('error: ', error);
                  console.log('data: ', data);
                  if (error) return 'Oups an error occured. Please check the console';
                  if (loading) return 'Loading...';
                  return (
                    <div>
                      {data.upcomingMovies.results.map((movie) => {
                          if (movie.original_language === this.state.filter) {
                              return (
                                <div className="Movies-style">
                                  <p>
                                    {movie.title}
                                  </p>
                                  {console.log(movie.poster_path)}
                                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} height={200} width="auto" />
                                  <i>Release: {movie.release_date}</i>
                                </div>
                            );
                          }
                      })
                  } </div>
                  );
                }}
              </Query>
              <Query query={query3}>
                {({ data, loading, error }) => {
                  console.log('error: ', error);
                  console.log('data: ', data);
                  if (error) return 'Oups an error occured. Please check the console';
                  if (loading) return 'Loading...';
                  return (
                    <div>
                      {data.upcomingMovies.results.map((movie) => {
                          if (movie.original_language === this.state.filter) {
                              return (
                                <div className="Movies-style">
                                  <p>
                                    {movie.title}
                                  </p>
                                  {console.log(movie.poster_path)}
                                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} height={200} width="auto" />
                                  <i>Release: {movie.release_date}</i>
                                </div>
                            );
                          }
                      })
                  } </div>
                  );
                }}
              </Query>
              <Query query={query4}>
                {({ data, loading, error }) => {
                  console.log('error: ', error);
                  console.log('data: ', data);
                  if (error) return 'Oups an error occured. Please check the console';
                  if (loading) return 'Loading...';
                  return (
                    <div>
                      {data.upcomingMovies.results.map((movie) => {
                          if (movie.original_language === this.state.filter) {
                              return (
                                <div className="Movies-style">
                                  <p>
                                    {movie.title}
                                  </p>
                                  {console.log(movie.poster_path)}
                                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} height={200} width="auto" />
                                  <i>Release: {movie.release_date}</i>
                                </div>
                            );
                          }
                      })
                  } </div>
                  );
                }}
              </Query>
              <Query query={query5}>
                {({ data, loading, error }) => {
                  console.log('error: ', error);
                  console.log('data: ', data);
                  if (error) return 'Oups an error occured. Please check the console';
                  if (loading) return 'Loading...';
                  return (
                    <div>
                      {data.upcomingMovies.results.map((movie) => {
                          if (movie.original_language === this.state.filter) {
                              return (
                                <div className="Movies-style">
                                  <p>
                                    {movie.title}
                                  </p>
                                  {console.log(movie.poster_path)}
                                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} height={200} width="auto" />
                                  <i>Release: {movie.release_date}</i>
                                </div>
                            );
                          }
                      })
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

export default Upcoming;

import gql from 'graphql-tag';

export const SEARCH_REPOSITORIES = gql`
  query searchRepositories($query: String!) {
    search(last: 10, type: REPOSITORY, query: $query) {
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
      nodes {
        ... on Repository {
          id
          name
          description
          watchers {
            totalCount
          }
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
          repositoryTopics(first: 10) {
            edges {
              node {
                topic {
                  name
                }
              }
            }
          }
          url
          owner {
            login
          }
        }
      }
    }
  }
`;

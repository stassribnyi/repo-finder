import gql from 'graphql-tag';

export const SEARCH_REPOSITORIES = gql`
  query searchRepositories(
    $query: String!
    $itemsPerPage: Int!
    $before: String
    $after: String
  ) {
    search(
      type: REPOSITORY
      query: $query
      last: $itemsPerPage
      before: $before
      after: $after
    ) {
      pageInfo {
        endCursor
        startCursor
      }
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            description
            forks {
              totalCount
            }
            owner {
              login
            }
            stargazers {
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
            watchers {
              totalCount
            }
            url
          }
        }
      }
    }
  }
`;

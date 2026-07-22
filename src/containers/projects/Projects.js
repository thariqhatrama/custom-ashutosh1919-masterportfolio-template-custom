import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { openSource } from "../../portfolio";
import { greeting } from "../../portfolio.js";

export default function Projects() {
  const [repo, setrepo] = useState([]);

  useEffect(() => {
    getRepoData();
  }, []);

  function getRepoData() {
    // If token is missing or empty, skip fetching to avoid atob crash
    if (!openSource.githubConvertedToken || openSource.githubConvertedToken.trim() === "") {
      console.warn("GitHub token is empty. Skipping repository fetch.");
      return;
    }

    try {
      const client = new ApolloClient({
        uri: "https://api.github.com/graphql",
        request: (operation) => {
          operation.setContext({
            headers: {
              authorization: `Bearer ${atob(openSource.githubConvertedToken)}`,
            },
          });
        },
      });

      client
        .query({
          query: gql`
            {
              repositoryOwner(login: "${openSource.githubUserName}") {
                ... on User {
                  pinnedRepositories(first: 6) {
                    edges {
                      node {
                        nameWithOwner
                        description
                        forkCount
                        stargazers {
                          totalCount
                        }
                        url
                        id
                        diskUsage
                        primaryLanguage {
                          name
                          color
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
        })
        .then((result) => {
          setrepoFunction(result.data.repositoryOwner.pinnedRepositories.edges);
        })
        .catch((err) => {
          console.error("GraphQL Query failed: ", err);
        });
    } catch (e) {
      console.error("Error setting up ApolloClient: ", e);
    }
  }

  function setrepoFunction(array) {
    setrepo(array);
  }

  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source Projects</h1>
      <div className="repo-cards-div-main">
        {repo && repo.map((v, i) => {
          return <GithubRepoCard repo={v} key={v.node.id} />;
        })}
      </div>
      <Button
        text={"More Projects"}
        className="project-button"
        href={greeting.githubProfile}
        newTab={true}
      />
    </div>
  );
}

import styled from "styled-components/macro";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr) 80px 350px;
  grid-template-rows: 56px 1fr;
  grid-template-areas:
    "name  name  sort  . menu"
    "results results results . menu";
  row-gap: 50px;
  margin-top: 100px;
  scroll-margin-top: 120px;

  .hotel-name {
    grid-area: name;
    padding-right: 30px;
  }

  .sort-type {
    grid-area: sort;
  }

  .search-results {
    grid-area: results;
  }

  .filter-menu {
    grid-area: menu;
    display: flex;
    flex-direction: column;
    row-gap: 25px;
  }

  .filter-button {
    grid-area: filter;
    display: none;
  }

  @media screen and (max-width: 1350px) {
    grid-template-columns: repeat(3, 1fr) 80px 300px;
  }

  @media screen and (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "filter sort"
      "name   name"
      "results  results";

    .hotel-name {
      padding-right: 0;
    }

    .sort-type {
      padding-left: 15px;
    }

    .filter-menu {
      display: none;
    }

    .filter-button {
      display: block;
      padding-right: 15px;
    }
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "filter"
      "sort"
      "name"
      "results";
    row-gap: 25px;

    .sort-type {
      padding-left: 0;
    }

    .filter-button {
      padding-right: 0;
    }
  }
`;

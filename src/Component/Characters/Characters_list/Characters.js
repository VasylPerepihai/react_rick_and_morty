import React from 'react';
import { Character } from '../Character_item/Character';
import { Pagination } from '../../UI/Pagination';
import { Filter } from '../../UI/Filter';

export class Characters extends React.Component {
  state = {
    characters: [],
    currentPageApi: 1,
    currentPage: 1,
    totalPages: 0,
    filter:false,
    selectedFilter: '',
    filterText: '',
  }

  getCharacters = (pageAPI, page) => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pageAPI}`)
      .then(response => response.json())
      .then(result => (
        
        this.setState( {
          characters: [...result.results],
          currentPageApi: result.info.next.slice(result.info.next.lastIndexOf('page=') + 5) - 1,
          totalPages: result.info.pages,
          currentPage: page,
        }) ))
  };

  componentDidMount() {
    this.getCharacters(1, 1);
  };

  changePage = (page) => {
    const pageToCheck = page % 2 === 0 ? page : page + 1;

    if ((pageToCheck / 2) > this.state.currentPageApi) {
      this.getCharacters(this.state.currentPageApi + 1, page);
    } else {
      if ((pageToCheck / 2) < this.state.currentPageApi) {
        this.getCharacters(this.state.currentPageApi - 1, page)
        } else {
          this.setState({currentPage: page})
        }
    }
  };

  applyFilter = (filter, applyState) => {
    this.setState({
      filter: applyState,
      selectedFilter: filter.selectedFilter,
      filterText: filter.filterText,
    })
  }

  render() {
    const {currentPage, characters, selectedFilter, filterText, filter} = this.state;

    let preparedCharArray = currentPage % 2 === 0
      ? characters.slice(10)
      : characters.slice(0, 10);

    if (selectedFilter && filterText && filter) {
      preparedCharArray = preparedCharArray.filter(character => character[selectedFilter].toLowerCase().includes(filterText.toLowerCase()) )
    }

    return (
      <>
        <ul>
          {preparedCharArray.map(character => (
            <li
              className="character-list-item"
              key={character.id}>
              <Character character={character} />
            </li>
          ))}
        </ul>
        <Filter 
          filters={['species', 'gender', 'status']}
          onFilterApply={this.applyFilter}
        />
        <Pagination
          currentPage={currentPage}
          onPageChange={this.changePage}
          totalPages={this.state.totalPages * 2}
        />
      </>
    )
  }
}
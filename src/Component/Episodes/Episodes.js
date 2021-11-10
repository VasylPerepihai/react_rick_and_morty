import React from 'react';
import { Pagination } from '../UI/Pagination';
import { Filter } from '../UI/Filter';

export class Episodes extends React.Component {
  state = {
    episodes: [],
    page: 1,
    totalPages: 1,
    filter:false,
    selectedFilter: '',
    filterText: '',
  }

  applyFilter = (filter, applyState) => {
    this.setState({
      filter: applyState,
      selectedFilter: filter.selectedFilter,
      filterText: filter.filterText,
    })
  }

  async getEpisodes(page, previousArray = []) {
    let response = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`);
    let episodes = await response.json();

    const episodesArray = [...previousArray, ...episodes.results ]
    if (episodes.info.next) {
      this.getEpisodes(page + 1, episodesArray)
    } else {
      this.setState({
        episodes: [...episodesArray],
        totalPages: Math.ceil(episodes.info.count / 25),
      });
    }
  }

  componentDidMount() {
    this.getEpisodes(1);
  }

  changePage = (page) => {
    this.setState({page: page})
  }

  render() {
    const {page, totalPages, episodes, selectedFilter, filterText, filter} = this.state;
    let preparedEpisodes = episodes.slice((page - 1) * 25, page * 25);

    if (selectedFilter && filterText && filter) {
      preparedEpisodes = preparedEpisodes.filter(character => character[selectedFilter].toLowerCase().includes(filterText.toLowerCase()) )
    }

    return (
      <>
        <table>
          <thead>
            <tr>
              {['name', 'air_date', 'episode'].map((fieldname) => (
                <th key={fieldname}>
                  {fieldname}
                </th>
              ) )
              }
            </tr>
          </thead>
          <tbody>
            {preparedEpisodes.map((episode) => (
              <tr key={episode.id}>
                <td>
                  {episode.name}
                </td>
                <td>
                  {episode.air_date}
                </td>
                <td>
                  {episode.episode}
                </td> 
              </tr>
            ))
            }
          </tbody>
            
        </table>
        <Filter 
          filters={['name']}
          onFilterApply={this.applyFilter}
        />
        <Pagination 
          currentPage={page}
          onPageChange={this.changePage}
          totalPages={totalPages}
        />
      </>
    )
  }
}
import React from 'react';

export class Pagination extends React.Component {
  state = {
    test: 1,
  }

  render() {
    const onPageChange = this.props.onPageChange;
    const currentPage = this.props.currentPage;
    const totalPages = this.props.totalPages;

    return (
      <>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button>{currentPage} of {totalPages}</button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </>
    )
  }
}
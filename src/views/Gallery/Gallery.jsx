import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import PropTypes from 'prop-types';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  ClearRefinements,
  RefinementList,
} from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  'YZO5WZ7G6C', // Key App
  '1ec2ab36e6b367aabed0d3c493ac4006' // Key API db
);

const Gallery = () => {
  return (
    <div className="gallery">
    <InstantSearch searchClient={searchClient} indexName="atlasdao">
        <h2>Search by parameters</h2>
        <div className=''>
          <div className='refinement-block'>
            <h3>Country</h3>
            <RefinementList attribute={"hand"}/>
          </div>
          <div className='refinement-block'>
            <h3>Hold</h3>
            <RefinementList attribute={"hold"}/>
          </div>
        </div>
          
        <SearchBox 
        searchAsYouType={true}/>
          <Hits hitComponent={HitComponent}/>
          <Pagination/>
      </InstantSearch>
    </div>
  );
};


function HitComponent(props) {
  const url = props.hit.url;
  const id = props.hit.id;

  return (
    <div className="HitComponent">
      <img src={url}/>
      <p>Sky Monk #{id}</p>
    </div>
  );
};

HitComponent.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Gallery;

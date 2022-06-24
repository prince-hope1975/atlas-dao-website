import React, { Component, useState, useEffect } from 'react';
import algoliasearch from 'algoliasearch/lite';
import PropTypes from 'prop-types';
import {
  InstantSearch,
  Hits,
  Pagination,
  ClearRefinements,
  RefinementList,
} from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  'YZO5WZ7G6C', // Key App
  '1ec2ab36e6b367aabed0d3c493ac4006' // Key API db
);

const properties = [
  "Background",
  "Backlight",
  "Body",
  "Shape",
  "Outfit",
  "Head",
  "Hold",
  "Hand"
  ]

const Gallery = () => {
  const [property, setProperty] = useState(null);
  
  return (
    <div className="gallery">
      <h1>Gallery</h1>
    <InstantSearch searchClient={searchClient} indexName="atlasdao">
        <div className='gallery-container'>

        <div className='refinements'>
            {
              properties.map((value) => {
                return(
                  <>
                    <div className='refinement-block'>
                      <h3 onClick={() => {
                        console.log(property, value);
                        if (property != value){
                          setProperty(value);
                          document.getElementById("Background").style.visibility = "hidden";
                          document.getElementById("Backlight").style.visibility = "hidden";
                          document.getElementById("Body").style.visibility = "hidden";
                          document.getElementById("Shape").style.visibility = "hidden";
                          document.getElementById("Outfit").style.visibility = "hidden";
                          document.getElementById("Head").style.visibility = "hidden";
                          document.getElementById("Hold").style.visibility = "hidden";
                          document.getElementById("Hand").style.visibility = "hidden";
                          document.getElementById(value).style.visibility = "visible";
                        }
                        else{
                          setProperty(null);
                          document.getElementById(value).style.visibility = "hidden";
                        };
                        }}>{value}</h3> 
                      {
                      <div id={value} style={{visibility:"hidden", "height":"0vh"}}>
                        <RefinementList 
                          id = {value}
                          showMoreLimit={20}
                          limit={25}
                          attribute={value}
                          />
                      </div>
                        }
                    </div>
                  </> 
                )
              })
            }
            <ClearRefinements/>
        </div>
          <Hits hitComponent={HitComponent}/>
        </div>
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

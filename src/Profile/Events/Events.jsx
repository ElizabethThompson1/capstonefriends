import React,{useState,useEffect} from 'react';
import axios from 'axios';


const EventDisplay = (props) => {
    let urlLink = `https://www.youtube.com/embed/${props.eventId}?autoplay=1&origin=http://example.com`
    return(
    <iframe className= "video" id="ytplayer" type="text/html" width="640" height="360"
    src= {urlLink}
    frameBorder="0">
    </iframe>
    )
}
import React,{useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import SelectedVideo from './SelectedVideo';
import VideoList from "./VideoList";
import youtube from '../api/youtube';

const App = () => {

  const[videos, setVideos] = useState([]);
  const[selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onSearchSubmit("cookies");
  }, []);

  const onSearchSubmit = async(term) => {
    //console.log("this is the term in app: " + term);
    const response = await youtube.get( "/search", {
      params : {
        q: term
      }
    })
    console.log(response);
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  }

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  }

  return(
    <div className = "ui container">
        <SearchBar
          onSearchSubmit = {onSearchSubmit}
        />
        <div className = "ui grid">
          <div className = "ui row">
            <div className = "eleven wide column">
              <SelectedVideo
                selectedVideo = {selectedVideo}
              />
            </div>
            <div className = "five wide column">
            <VideoList
                videos = {videos} 
                onVideoSelect = {onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
  )
}
export default App;

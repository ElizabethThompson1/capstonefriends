import react from "react";

function Profile (){
    const [event,setEvent] = useState(null);
    const [searchTerm,setSearchTerm] =useState("swimming")
    const [eventId,setEventId] = useState("")

    useEffect(() => {
        getEvents();
    }, [])
    
    //need to chnage the url to the events url
   async function getEvents(){
    const response = await axios.get (`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBYDM03FFHGen7v_d4NCi2TOLMDtWLhPrk&maxResults=30&q=${searchTerm}&type=video`);
    console.log(response.data);
    setEvent(response.data.items);
    setEventId(response.data.items[0].id.eventId)
    } 

    return(
        <div className = "app">
            {youTubeData &&
                <div className ="app">
                    <SearchBar value = {setSearchTerm}/>
                    <VideoDisplay eventId = {eventId} />
                    {/* <CommentDisplay commentId= {commentId} postComment={postComment}/> */}
                        {/* <ul>
                            {comments.map((comment)=> (comment.videoId===videoId)?<li>{comment.text}<ul> {comment.replies.map((reply)=> <li>{reply.text}</li>)}</ul></li>:null)}
                        </ul> */}
                    {/* <OtherVideos videos = {searchTerm}/> */}
                    
           
                </div>
            }
        </div>
    );
}

export default Profile;

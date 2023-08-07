import React from "react"

export default function Drumpad(props){
    function playAudio(){
        const audio = document.getElementById(props.id)
        audio.play();
        props.changeDisplay(props.description)
    }

    React.useEffect(() => {
        function handleKeyPress(event) {
          if (event.key.toUpperCase() === props.id.toUpperCase()) {
            playAudio();
          }
        }
        window.addEventListener("keydown", handleKeyPress);
        return () => {
          window.removeEventListener("keydown", handleKeyPress);
        };
    }, [props.id]);
    
    return (
        <div className="drum-pad" onClick={playAudio}>
            {props.id}
            <audio id={props.id} class="clip" src={props.src}></audio>
        </div>
    )
}
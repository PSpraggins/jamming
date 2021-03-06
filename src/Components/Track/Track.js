import React from 'react';
import './Track.css';

class Track extends React.Component {
    constructor(props){
        super(props);
        
        this.renderAction = this.renderAction.bind(this);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }
   
    addTrack(event){
        this.props.onAdd(this.props.track);
    }
    removeTrack(event){
        this.props.onRemove(this.props.track);
    }
    renderAction () {
        if(this.props.isRemoval){
            return <button className="Track-action" onClick = {this.removeTrack}>-</button>;
        } else {
            return <button className="Track-action" onClick = {this.addTrack}>+</button>;
        }
    }
    render() {
        return (<div className="Track">
            <div className="Track-information">
                <h3>
                    {this.props.track.name}
                </h3>
                <p>
                    {this.props.track.artist} | {this.props.track.album}
                </p>
            </div>
            <audio controls className = "Track-audio">
                <source src={this.props.track.preview} type="audio/mpeg" />
            </audio>
            {this.renderAction()}
        </div>
        );
    }
}

export default Track;

import React, {useState} from "react";
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({title, items}) =>{

    const [scrollX, setscrollX] = useState(0)

    const hanleleftArrow = () =>{
            let x = scrollX + Math.round(window.innerWidth / 2)
            if(x>0){
                x=0
            }
            setscrollX(x)
    }

    const hanlerighttArrow = () =>{
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listW = items.results.length * 150
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60
        }
        setscrollX(x)
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={hanleleftArrow}>
                    <NavigateBeforeIcon style={{fontSize:50}} />
            </div>
                {/* movie--right */}
            <div className="movieRow-right" onClick={hanlerighttArrow}>
                    <NavigateNextIcon style={{fontSize:50}}/>
            </div>

            <div className="movieRow--listarea">
                    <div className="movieRow--list" 
                    style={{marginLeft:scrollX, width: items.results.length *150}}>
                    {items.results.length >0 && items.results.map((item, key)=>(
                    <div key={key} className="movieRow--item">
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}></img>
                    </div>
                        
                ))}
                    </div>
              
            </div>
        </div>
    )
}
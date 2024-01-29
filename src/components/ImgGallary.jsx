import { Component } from "react";

class imgGallary extends Component{
    render(){
        const imageData = this.props.Data;
        return(
            <div>
                {
                  imageData.map(image=>{
                    return(
                      <div key={image.id} className="column">
                        <img src={image.img} alt=""></img>
                      </div>
                    )
                  })
                }
              </div>
          )
    }
}

export default imgGallary;
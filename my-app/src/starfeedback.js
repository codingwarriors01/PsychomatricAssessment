import {React,useState} from "react";
<<<<<<< HEAD
import "./starfeedback.css";
import {FaStar} from "react-icons/fa";


=======
// import "./starfeedback.css";
import {FaStar} from "react-icons/fa";

>>>>>>> de77fb0a7f24d5f5adb422d541dca069fecae1ff
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

const labels = {
    1: 'Useless',
    2: 'Poor',
    3: 'Ok',
    4: 'Good',
    5: 'Excellent',
  };

function Rating() {
    const [currentValue, setCurrentValue] = useState(2);
    const [hoverValue, setHoverValue] = useState(-1);
    const stars = Array(5).fill(0)
  
    const handleClick = value => {
      setCurrentValue(value)
    }
  
    const handleMouseOver = newHoverValue => {
      setHoverValue(newHoverValue)
    };
  
    const handleMouseLeave = () => {
      setHoverValue(undefined)
    }
  
  
    return (
      <div style={styles.container}>
        <h2> Feedback </h2>
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={44}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                style={{
                  marginRight: 10,
                  cursor: "pointer"
                }}
              />
            )
          })}
        </div>
        <textarea
          placeholder="What's your experience?"
          style={styles.textarea}
        />
  
        <button
          style={styles.button}
          className="btn btn-primary"
        >
          Submit
        </button>
        
      </div>
    );
  };
  
  
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
      marginTop:"50px"
    },
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 300
    },
    button: {
      backgroundColor:"blue",
      color:"#fff",
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      width: 300,
      padding: 10,
    }
  
  };
export default Rating
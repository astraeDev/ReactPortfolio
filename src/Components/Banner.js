import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../Assets/img/header-img.svg";

export const Banner = () => {
    //  words we want to be displayed 
    const dynamicWords = ["Web Developper", "Web Designer", "UI/UX Designer"]; 

    // indicate which word is being displayed
    const [loopNum, setLoopNum] = useState(0);
    
    // indicate portion of the word being displayed 
    const [text, setText] = useState(''); 

    // how fast one letter comes after one is typed  
    const [delta, setDelta] = useState(300 - Math.random() * 100);  

    //  indicate time between typing
    const period = 2000; 

    // does the word is being typed out or deleted 
    const [isDeleting, setIsDeleting] = useState(false); 


    /* function responsible of typing/deleting running everytime the text is updated */
    useEffect (() => {  
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text]) 


    /* how updating is working (typing/deleting) */
    const tick = () => { 
        let i = loopNum % dynamicWords.length; 
        let fullText = dynamicWords[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2 )
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }


    return (
        <section className="banner" id="home">
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagLine"> Welcome to my Portfloio</span>
                    <h1> {"Hi i'm a webdecoded"}
                        <span className="wrap"> {text} </span>
                    </h1>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quae illum itaque voluptates eveniet eos amet error assumenda autem ullam iste, in distinctio quasi, laboriosam rem perferendis excepturi perspiciatis. Eveniet. </p>
                    <button onClick={() => console.log("connect")}> 
                        Let's connect <ArrowRightCircle size={25}/>
                    </button>
                </Col>
                <Col  xs={12} md={6} xl={5} >
                    <img src={headerImg} alt="Header img"></img>
                </Col>
            </Row>
        </section>

    )
}
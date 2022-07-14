import  {useState, useEffect} from "react";

const getWindowSize = ()=>{
    const {innerWidth, innerHeight} = window
    return {
        innerWidth,
        innerHeight
    }
}
const useDimension = () => {
    const [screenSize, setScreenSize] = useState(getWindowSize())
    useEffect(()=>{
    const handleSize = ()=>{
        setScreenSize(getWindowSize())
    }
    window.addEventListener('resize', handleSize)
    return ()=>{
        window.removeEventListener('resize', handleSize)
    }
    }, [])

  return screenSize ;
};

export default useDimension;

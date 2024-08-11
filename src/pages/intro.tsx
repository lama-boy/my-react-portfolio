import Box1 from "../components/box";

const Intro = ()=>{

    return (
    <div>
        <br></br>
        <br></br>
        <br></br>
        <h1>양승리</h1>
        <br></br>
        <h1>포트폴리오</h1>
        <br></br>
        <div className="row">
            <div className="col-md-4 container">
                <Box1 boxtitle='Frontend' imgName='front'/>
            </div>
            <div className="col-md-4 container">
                <Box1 boxtitle='Backend' imgName='back'/>
            </div>
            <div className="col-md-4 container">
                <Box1 boxtitle="deployment" imgName='skills'/>
            </div>
        </div>
    </div>
    )
    
}



export default Intro;




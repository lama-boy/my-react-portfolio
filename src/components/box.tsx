import frontImg from '../assets/front/1.png';
import backImg from '../assets/front/1.png';
import skillImg from '../assets/front/1.png';

const Box1 = (props:{boxtitle:string, imgName:string})=>{
    let imgType:string = '';
    switch(props.imgName){
        case 'front':imgType = frontImg;
            break;
        case 'back':imgType = backImg;
            break;
        case 'skills':imgType = skillImg;
            break;
    }

    return (
        <div>
            <h2>{props.boxtitle}</h2>
            <div>
            <img
             src={imgType} alt="htmlcssjs"
             style={{
                width:'100%',
                height:'100%'
             }} />
             </div>
        </div>
    )
}

export default Box1;
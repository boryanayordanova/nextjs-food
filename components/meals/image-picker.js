'use client';
import { useRef, useState } from 'react';

import classes from './image-picker.module.css';

export default function ImagePicker({label, name}){
    const [pickedImage, setPickedImage] = useState();
    const imageInput = useRef();


    function handlePickClick(){
        imageInput.current.click();
    }

    function handleImageChange(event){
        const file = event.target.files[0];

        if(!file){
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            
        };
        fileReader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>
                {label}
            </label>
            <div className={classes.controls}>
                <input 
                    className={classes.input}
                    type="file" 
                    id={name} 
                    accept="image/png, image/jped" 
                    name={name}
                    ref={imageInput}
                    onChange={handleImageChange}
                />
                <button className={classes.button} type="button" onCLilck={handlePickClick}>
                    Pick an Image
                </button>
            </div>
        </div>
    );
}
'use client';
import classes from './../meals/image-picker.module.css';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();

  function handlePickClick() {
    imageInputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
  setPickedImage(null);
  return;
}
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.control}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image Picked Yet</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by user"
                fill
              unoptimized
            />
          )}
        </div>
        <input
          onChange={handleImageChange}
          className={classes.input}
          ref={imageInputRef}
          type="file"
          id={name}
          accept="image/png,image/jpeg"
          name={name} 
          required
        />
        <button
          className={classes.button}
          onClick={handlePickClick}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}

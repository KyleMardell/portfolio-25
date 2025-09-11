"use client";
import { useEffect, useState } from "react";
import styles from "./FaceAnimation.module.css";

const frames = [
    "/images/face-animation/face1.png",
    "/images/face-animation/face2.png",
    "/images/face-animation/face3.png",
    "/images/face-animation/face4.png",
    "/images/face-animation/face5.png",
    "/images/face-animation/face6.png",
    "/images/face-animation/face7.png",
    "/images/face-animation/face8.png",
];

// Scrolls through frames to create an animation effect
// change interval value (currently 750) to adjust frame length

export default function FaceAnimation() {
    const [currentFrame, setCurrentFrame] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFrame((prev) => (prev + 1) % frames.length); // ensures the value of setCurrentFrame will always be between 1 and 8 using modulus %
        }, 750);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
            {/* maps the frames array and sets current frame styles class to active*/}
            {frames.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Animated face frame ${index + 1}`}
                    className={`${styles.frame} ${index === currentFrame ? styles.active : ""}`}
                />
            ))}
        </div>
    );
}
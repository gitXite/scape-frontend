import welcome from '../assets/welcome_2.mp4';


function VideoBackground() {
    return (
            <video
                className='absolute top-0 left-0 h-full w-full object-cover'
                src={welcome}
                autoPlay
                muted
                loop
                playsInline
                poster='src/assets/fallback_2.jpg'
            />
    );
}


export default VideoBackground;

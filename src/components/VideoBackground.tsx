import welcome from '../assets/welcome.mp4';


function VideoBackground() {
    return (
            <video
                className='absolute top-0 left-0 h-full w-full object-cover'
                src={welcome}
                autoPlay
                muted
                loop
                playsInline
            />
    );
}


export default VideoBackground;

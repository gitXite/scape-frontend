import welcome from '../assets/welcome.mp4';


function VideoBackground() {
    return (
        <div className='relative h-full w-full overflow-hidden'>
            <video
                className='absolute top-0 left-0 h-full w-full object-cover'
                src={welcome}
                autoPlay
                muted
                loop
                playsInline
            />
        </div>
    );
}


export default VideoBackground;

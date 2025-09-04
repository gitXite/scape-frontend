import Frame_Oak from '@/assets/frame_oak.avif';
import Frame_Dark_Oak from '@/assets/frame_darkoak.avif';
import Frame_White from '@/assets/frame_white.avif';
import Frame_Black from '@/assets/frame_black.webp';
import PassePartout_White from '@/assets/Passepartout_White.webp';
import PassePartout_Black from '@/assets/Passepartout_Black.webp';


function CustomizationPreview() {
    return (
        <div className='min-h-full w-full'>
            <div className='flex justify-center p-10'>
                <img src={Frame_Dark_Oak} alt='Preview Frame' className='z-3 w-[40%] absolute' />
                <img src={PassePartout_White} alt='Preview Passe-Partout' className='z-2 w-[40%] absolute' />
                {/* <img src='' alt='Preview Model' className='z-1 w-2/4 absolute' /> */}
            </div>
        </div>
    );
}


export default CustomizationPreview;

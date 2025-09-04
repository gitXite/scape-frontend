import Frame_Oak from '@/assets/frame_oak.avif';
import Frame_Dark_Oak from '@/assets/frame_darkoak.avif';
import Frame_White from '@/assets/frame_white.avif';
import Frame_Black from '@/assets/frame_black.webp';
import PassePartout_White from '@/assets/Passepartout_White.webp';
import PassePartout_Black from '@/assets/Passepartout_Black.webp';


type CustomizationPreviewProps = {
    frameType: 'oak' | 'walnut' | 'white' | 'black';
    passePartoutType: 'without' | 'white' | 'black';
};


function CustomizationPreview({ frameType, passePartoutType }: CustomizationPreviewProps) {
    return (
        <div className='min-h-full w-full'>
            <div className='flex justify-center p-10'>
                <img
                    src={frameType}
                    alt='Preview Frame'
                    className='z-3 w-[40%] absolute'
                />
                <img
                    src={passePartoutType}
                    alt='Preview Passe-Partout'
                    className='z-2 w-[40%] absolute'
                />
                {/* <img src='' alt='Preview Model' className='z-1 w-2/4 absolute' /> */}
            </div>
        </div>
    );
}


export default CustomizationPreview;
import Frame_Oak from '@/assets/frame_oak.avif';
import Frame_Dark_Oak from '@/assets/frame_darkoak.avif';
import Frame_White from '@/assets/frame_white.avif';
import Frame_Black from '@/assets/frame_black.webp';
import PassePartout_White from '@/assets/Passepartout_White.webp';
import PassePartout_Black from '@/assets/Passepartout_Black.webp';


type CustomizationPreviewProps = {
    frameType: string;
    passePartoutType: string;
};

const frameImages: Record<string, string> = {
    oak: Frame_Oak,
    walnut: Frame_Dark_Oak,
    white: Frame_White,
    black: Frame_Black,
};

const passePartoutImages: Record<string, string> = {
    white: PassePartout_White,
    black: PassePartout_Black,
    without: '',
};


function CustomizationPreview({
    frameType,
    passePartoutType,
}: CustomizationPreviewProps) {
    const frame = frameImages[frameType] ?? '';
    const passePartout = passePartoutImages[passePartoutType] ?? '';

    return (
        <div className='min-h-full w-full'>
            <div className='flex justify-center p-10'>
                {frameType && (
                    <img
                        src={frame}
                        alt='Preview Frame'
                        className='z-3 w-[40%] absolute'
                    />
                )}
                {passePartoutType && (
                    <img
                        src={passePartout}
                        alt='Preview Passe-Partout'
                        className='z-2 w-[40%] absolute'
                    />
                )}
                {/* <img src='' alt='Preview Model' className='z-1 w-2/4 absolute' /> */}
            </div>
        </div>
    );
}

export default CustomizationPreview;

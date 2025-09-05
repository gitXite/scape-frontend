import Frame_Oak from '@/assets/frame_oak.avif';
import Frame_Dark_Oak from '@/assets/frame_darkoak.avif';
import Frame_White from '@/assets/frame_white.avif';
import Frame_Black from '@/assets/frame_black.webp';
import PassePartout_White from '@/assets/Passepartout_White.webp';
import PassePartout_Black from '@/assets/Passepartout_Black.webp';
import { useEffect, useState } from 'react';


type CustomizationPreviewProps = {
    frameType?: string;
    passePartoutType?: string;
};


function CustomizationPreview({
    frameType,
    passePartoutType,
}: CustomizationPreviewProps) {
    const [frame, setFrame] = useState<string>('');
    const [passePartout, setPassePartout] = useState<string>('');

    useEffect(() => {
        switch (frameType) {
            case 'oak':
                setFrame(Frame_Oak);
                break;
            case 'walnut':
                setFrame(Frame_Dark_Oak);
                break;
            case 'white':
                setFrame(Frame_White);
                break;
            case 'black':
                setFrame(Frame_Black);
                break;
        }
        switch (passePartoutType) {
            case 'without':
                setPassePartout('');
                break;
            case 'white':
                setPassePartout(PassePartout_White);
                break;
            case 'black':
                setPassePartout(PassePartout_Black);
                break;
        }
    }, [frameType, passePartoutType]);

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

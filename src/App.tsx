import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from '@material-tailwind/react';

function App() {
    return (
        <Card className='flex flex-col w-96'>
            <CardHeader shadow={false} floated={false} className='h-96'>
                <img
                    src='https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80'
                    alt='card-image'
                    className='h-full w-full object-cover rounded-xl'
                />
            </CardHeader>
            <CardBody>
                <div className='mb-2 flex items-center justify-between p-5'>
                    <Typography color='blue-gray' className='font-medium'>
                        Apple AirPods
                    </Typography>
                    <Typography color='blue-gray' className='font-medium'>
                        $95.00
                    </Typography>
                </div>
                <Typography
                    variant='small'
                    color='gray'
                    className='font-normal opacity-75 pl-5 pr-5'
                >
                    With plenty of talk and listen time, voice-activated Siri
                    access, and an available wireless charging case.
                </Typography>
            </CardBody>
            <CardFooter className='pt-0 p-5 place-self-center'>
                <Button
                    ripple={false}
                    fullWidth={false}
                    className='p-1 border-1 shadow-none hover:scale-105 rounded focus:shadow-none active:scale-100 hover:cursor-pointer'
                >
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
}

export default App;

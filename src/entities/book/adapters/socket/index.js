import { socketHandler } from '@Middlwares/error-handler';
import Controller from '../../controller';

const StartSocketServer = (io, socket) => {
    console.log('StartSocketServer');
    socket.on('alguienTermino', socketHandler(async (msg) => {
        io.emit('alguienTermino', msg);
    }));

    socket.on('addAlumnos', socketHandler(async (msg) => {
        const data = await Controller.getAll();
        console.log('aaaaaaaaaaaaaaaa', data);
    }));
};

export default StartSocketServer;

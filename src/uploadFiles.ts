import * as admin from 'firebase-admin';
import * as fs from 'fs';
import { serviceAccount } from './config/escola-pedro-firebase-adminsdk-ikm2j-b8ca3b73fe';

const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  storageBucket: 'escola-pedro.appspot.com/',
};
admin.initializeApp(firebaseConfig);

export async function uploadFile(filePath: string, destinationPath: string): Promise<void> {
    const bucket = admin.storage().bucket();
    const fileReadStream = fs.createReadStream(filePath);
    const fileWriteStream = bucket.file(destinationPath).createWriteStream();

    return new Promise<void>((resolve, reject) => {
        fileReadStream.pipe(fileWriteStream)
          .on('finish', () => {
            console.log(`Arquivo enviado com sucesso para ${destinationPath}`);
            resolve();
        })
        .on('error', (error) => {
        console.error('Erro ao enviar o arquivo:', error);
        reject(error);
        });
    });
}
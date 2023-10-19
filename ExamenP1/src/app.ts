import { envs } from './config/envs'
import { PrismaClient } from '@prisma/client'
import { IRequest } from "../src/data/";

// 3. Función para crear elementos en la base de datos con Prisma
async function createRequestsWithPrisma(requests: IRequest[]) {
    const prisma = new PrismaClient();
    
    for (const request of requests) {
        await prisma.request.create({
            data: request
        });
    }
    
    await prisma.$disconnect();
}

createRequestsWithPrisma(requests);

// 4. Función para buscar y actualizar un elemento con Prisma
async function deleteRequestWithPrisma(id: number) {
    const prisma = new PrismaClient();
    
    const request = await prisma.request.update({
        where: { id },
        data: { status: 'ELIMINADO' }
    });
    
    console.log(request);
    
    await prisma.$disconnect();
}

deleteRequestWithPrisma(1);
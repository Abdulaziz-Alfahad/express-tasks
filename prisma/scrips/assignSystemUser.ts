import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () =>{
    const systemUser = await prisma.user.upsert({
        where: {username: "System"},
        update: {},
        create: {
            username: "System",
            password: "azoz1430",
            email: "abdulazizx0x1430@gmail.com",
            firstName: "System",
        }
    });
    const updatedTasks = await prisma.task.updateMany({
        where: {userId: null},
        data: {
            userId: systemUser.id
        }
    })
    console.log(`Created/updated System user with id ${systemUser.id}`);
    console.log(`Assigned ${updatedTasks.count} tasks to System user`);
}

main()
    .catch((e) =>{
        console.error(e);
        process.exit(1);
    }).finally(async() =>{
        await prisma.$disconnect();
    })
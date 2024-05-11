const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {

    try {
        await database.category.createMany({
            data: [
                { name: "Computer Science" },
                { name: "Accounting" },
                { name: "Photography" },
                { name: "Art" },
                { name: "Engineering" },
                { name: "IGCSE" },
            ]
        });

        console.log("Success")

    } catch (error) {
        console.log("Error seeding the database categories ", error)
    } finally {
        await database.$disconnect()
    }
}


main();
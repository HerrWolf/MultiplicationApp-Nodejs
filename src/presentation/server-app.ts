import { CreateTable } from "../domain/use-cases/create-table.use-case";
import {SaveFile} from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    fileName: string;
    destination: string;
}

export class ServerApp {

    static run({ base, limit, showTable, fileName, destination }: RunOptions) {
        console.log('ServerApp is running...');

        const table = new CreateTable()
            .execute({ base, limit });

        const wasCreated = new SaveFile()
            .execute({
                fileContent: table,
                fileName,
                destination
            })

        if(showTable) console.log(table);
        (wasCreated)
            ? console.log('The file was created successfully')
            : console.log('The file could not be created');
    }

}
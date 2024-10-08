import fs from "fs"
import { input } from '@inquirer/prompts';
import rambles from "../content/rambles.json" with {type: "json"}
import { Ramble } from "../types/Ramble";

try {
    const content = await input({ message: 'Ramble:' });
    const date = new Date()

    const typedRambles = rambles as unknown as Ramble[]

    const updatedRambles: Ramble[] = typedRambles.concat({ content: content, date: date.toISOString() })
    fs.writeFileSync("src/content/rambles.json", JSON.stringify(updatedRambles))
} catch (e) {
    console.log(e)
}



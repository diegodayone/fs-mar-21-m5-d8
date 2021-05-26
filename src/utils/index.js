import fs from "fs-extra"
import { fileURLToPath} from "url"
import { dirname, join} from "path"

const { readJSON } = fs

const readFileJSON = async(folderName, filename) => {
    const folder = join(dirname(fileURLToPath(import.meta.url)), folderName)
    const filePath = join(folder, filename)
    return await readJSON(filePath)
}

const appendToJSON = async(folderName, filename, obj) => {
    const folder = join(dirname(fileURLToPath(import.meta.url)), folderName)
    const filePath = join(folder, filename)
    const array = await readJSON(filePath)
    array.push(obj)
    await fs.writeFile(filePath, JSON.stringify(array))
}

export {
    readFileJSON,
    appendToJSON
}
import fs from "fs/promises";

try {
    await fs.writeFile("Hello.txt", "This is the file I just created");

    await fs.appendFile("Hello.txt", "\nAjay");

    const data = await fs.readFile("Hello.txt", "utf-8");

    console.log(data);

} catch (err) {
    console.log(err);
}
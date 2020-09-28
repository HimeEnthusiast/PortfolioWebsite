import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const projectDir = path.join(process.cwd(), 'projectFiles');
// const projectDir = '../projects'

export function getProjects() {
    //get file names
    const fileNames = fs.readdirSync(projectDir);

    const projectData = fileNames.map(fileName => {
        //Remove .md
        const id = fileName.replace(/\.md$/, '');

        //Read file as string
        const fullPath = path.join(projectDir, fileName);
        const fileContent = fs.readFileSync(fullPath, 'utf-8');

        //Parse file
        const matterResult = matter(fileContent);

        //Combine data with id
        return {
            id,
            ...matterResult.data
        }
    })

    return projectData;
}


export function getAllPostIds() {
    const fileNames = fs.readdirSync(projectDir)

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getProjectData(id) {
    const fullPath = path.join(projectDir, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    //Split content into Project Desc. and Lessons Learned
    const projectDescContent = matterResult.content.split("///")[0];
    const lessonsLearnedContent = matterResult.content.split("///")[1];

    // Use remark to convert markdown into HTML string
    const processedDesc = await remark()
        .use(html)
        .process(projectDescContent)

    const processedLessons = await remark()
        .use(html)
        .process(lessonsLearnedContent)

    const projectDesc = processedDesc.toString()
    const lessonsLearned = processedLessons.toString()

    // Combine the data with the id and contentHtml
    return {
        id,
        projectDesc,
        lessonsLearned,
        ...matterResult.data
    }
}

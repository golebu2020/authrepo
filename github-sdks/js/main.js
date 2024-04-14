// Octokit.js
// https://github.com/octokit/core.js#readme
import { Octokit, App} from "octokit";
console.log(`TOKEN = ${process.env.GH_TOKEN}`)
const octokit = new Octokit({
    auth: process.env.GH_TOKEN
  })
  
  await octokit.request('GET /repos/{owner}/{repo}/git/ref/{ref}', {
    owner: 'golebu2020',
    repo: 'authrepo',
    ref: 'refs/heads/sdks',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
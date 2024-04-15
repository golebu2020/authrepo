// Octokit.js
// https://github.com/octokit/core.js#readme
const  {Octokit, App} = require("octokit");
console.log(`TOKEN = ${process.env.GH_TOKEN}`)
const octokit = new Octokit({
    auth: process.env.GH_TOKEN
  })
  
  octokit.request('POST /repos/{owner}/{repo}/git/refs', {
    owner: 'golebu2020',
    repo: 'authrepo',
    ref: 'refs/heads/sdks',
    sha: '532b49c1c9581af09d1742b478ad295534f75969',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })


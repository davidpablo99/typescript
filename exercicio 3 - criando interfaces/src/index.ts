interface GithubUserResponse{
    id: number
    login: string
    name: string
    bio: string
    public_repos: number
    repos_url: string
    messege?: "Not Found"
}

interface GithubRepoResponse {
    name: string
    description: string
    fork: boolean
    stargazers_count: number
}

const users: GithubUserResponse[] = []

async function fetchUser(username:string) {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const user: GithubUserResponse = await response.json()

    if (user.messege) {
        console.log("Usuário não encontrado!")
    } else {
        users.push(user)
    }

    console.log (
        `O usuário ${user.login} foi salvo.\n` +
        `\nid: ${user.id}` +
        `\nlogin: ${user.login}` +
        `\nNome: ${user.name}` +
        `\nBio: ${user.bio}` +
        `\nRepositórios públicos: ${user.public_repos}`
    )
}

async function showUser(username:string) {
    const user = users.find(user => user.login === username)

    if (typeof user === 'undefined') {
        console.log("Usuário não encontrado!")
    } else {
        const response = await fetch(user.repos_url)
        const repos: GithubRepoResponse[] = await response.json()

        let message = `id: ${user.id}\n` +
            `\nlogin: ${user.login}` +
            `\nNome: ${user.name}` +
            `\nBio: ${user.bio}` +
            `\nRepositórios públicos: ${user.public_repos}`

        repos.forEach(repo => {
            message += `\nNome: ${repo.name}` +
                `\nDescrição: ${repo.description}` +
                `\nEstrelas: ${repo.stargazers_count}` +
                `\nÉ um fork: ${repo.fork ? 'Sim' : 'Não'}\n`
            })

        console.log(message)
    }
}

function showAllUsers(){
    let message = 'Usuários:\n'

    users.forEach(user => {
        message += `\n- ${user.login}`
    })
    console.log(message)

}
function showReposTotal() {
    const reposTotal = users.reduce((accumulator, user) => accumulator+ user.public_repos, 0)
    console.log((`O grupo possui um total de ${reposTotal} repositórios públicos!`))
}

function showTopFive() {
    const topFive = users.slice().sort((a, b) => b.public_repos - a.public_repos).slice(0, 5)

    let message = 'Top 5 usuários com mais repositórios públicos:\n'
    console.log(message)
}
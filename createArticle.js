let createArticle = (name,username,email) =>{
    return` 
        <article class="user__article">
            <p class="firstname">FrstName: ${name}</p>                    <p class="user__name">UserName: ${username}</p>
            <p class="email">Email: ${email}</p>
        </article>
    `
}
export default createArticle;
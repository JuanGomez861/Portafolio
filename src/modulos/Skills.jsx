import './skills.css'
export function Skills(){
    return(
        <section className='container_skills'>
        <section className='skills'>
            <span className="subtitle">Mis Habilidades</span>
            <h2>Tecnologia con las que he trabajado</h2>
            <p>Tome varios curso en linea de manera autodidacta, actualmente trabajo con <strong>react Js</strong> en especial, aqui las tecnologias con ls que he estado trabajando recientemente</p>
            <ul className='skills_list'>
                <li className='skill_item'>HTML <img src="../assets/html-5.png" alt="" className='skill_icon'/></li>
                <li className='skill_item'>CSS <img src="../assets/css-3.png" alt="" className='skill_icon'/></li>
                <li className='skill_item'>JavaScript <img src="../assets/js.png" alt="" className='skill_icon'/></li>
                <li className='skill_item'>React <img src="../assets/react.svg" alt="" className='skill_icon'/></li>
                <li className='skill_item'>Sass <img src="../assets/icons8-sass-144.png" alt="" className='skill_icon'/></li>
                <li className='skill_item'>Tailwind <img src="../assets/icons8-tailwind-css-240.png" alt="" className='skill_icon'/></li>
                <li className='skill_item'>React Native <img src="../assets/react.svg" alt="" className='skill_icon'/></li>
                <li className='skill_item'>Git <img src="../assets/icons8-git-240.png" alt="" className='skill_icon'/></li>
                <li className='skill_item'>TypeScript<img src="../assets/icons8-typescript-240.png" alt="" className='skill_icon'/></li>
                <li className='skill_item'>Redux <img src="../assets/icons8-redux-240.png" alt="" className='skill_icon'/></li>
            </ul>
        </section>
        </section>
    )
}
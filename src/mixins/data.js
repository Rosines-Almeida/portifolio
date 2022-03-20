const contatos = [
    {
        midiaSocial: '/rosines-almeida',
        link: 'https://www.linkedin.com/in/rosines-almeida/',
        icon: 'icon ic_linkedin',
    },
    {
        midiaSocial: 'rosines.almeida@gmail.com',
        link: 'mailto:rosines.almeida@gmail.com',
        icon: 'icon ic_email',
    },
    {
        midiaSocial: '/Rosines-Almeida',
        link: 'https://github.com/Rosines-Almeida',
        icon: 'icon ic_gitHub',
    },

]

const experiences = [
    {
        year: '2022',
        description: 'Atuo no projeto novas implemantações e melhorias',
        title: 'Analista de desenvolvimento  Front-end Pleno',
        skills: ['TypeScript', 'VueJS', 'SCSS']
    },
    {
        year: '2021',
        description: 'Atei no projeto com melhorias e nova simplemantações atuando com typescriprt, vue, scss, html',
        title: 'Analista de desenvolvimento  Front-end Junior',
        skills: ['VueJS', 'SCSS', 'TypeScript']
    },
]
const formacao = [
    {

        tipo: 'Bootcamp',
        formacao: 'Desenvolvimento Front End',
        instituicao: 'Laboratória'
    },
    {
        tipo: 'Graduação',
        formacao: 'Farmácia',
        instituicao: 'Universidade de Santo Amaro'
    }
]

const certificacao = [
    {
        formacao: 'Exam 480:  <br> Programming in HTML5  <br> with JavaScript and CSS3',
        instituicao: 'Microsoft',
        link: 'https://www.credly.com/badges/ff46d960-ee37-4ad3-9f44-b04488642a9c?'
    },
    {
        formacao: 'Scrum Fundamentals Certified',
        instituicao: 'SCRUMstudy',
        link: 'https://www.credly.com/badges/72421ff8-e184-4394-a0c1-b2005649a7af/public_url'
    }
]

const cursos = [
    {
        formacao: 'Vue.js Completo',
        instituicao: 'Origamid',
        horas: '44 horas',
        link: 'https://www.origamid.com/certificate/640536ee/'
    },
    {
        formacao: 'TypeScript I: Evoluindo seu JavaScript',
        instituicao: 'Alura',
        horas: '8 horas',
        link: 'https://cursos.alura.com.br/certificate/6a291bd8-2c79-40c5-be23-42b741362ee2'
    },
    {
        formacao: 'TypeScript II: Mais técnica e boas práticas',
        instituicao: 'Alura',
        horas: '10 horas',
        link: 'https://cursos.alura.com.br/certificate/6a291bd8-2c79-40c5-be23-42b741362ee2'
    },
    {
        formacao: 'React Completo',
        instituicao: 'Origamid',
        horas: '36 horas',
        link: 'https://www.origamid.com/certificate/3f6559e6/'
    }
]

const projetos = [
    {
        link: 'https://dogs-nu.vercel.app',
        skills: ['React', 'Redux', 'HTML', 'JavaScript'],
        src: 'projeto_dog.4d0ba41e.gif'
    },
    {
        link: 'https://techno-vue.vercel.app',
        skills: ['VueJs', 'HTML', 'CSS', 'JavaScript'],
        src: 'projeto_tecno.62c37cc2.gif'
    },
    {
        link: 'https://alura-quiz-react-rosines-almeida.vercel.app',
        skills: ['React', 'HTML', 'CSS', 'JavaScript'],
        src: 'projeto_quiz.91a1c48c.gif'
    },

]
export default { contatos, experiences, formacao, certificacao, cursos, projetos };
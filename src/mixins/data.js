const contatos = [
    {
        midiaSocial: '/rosines-almeida',
        link: 'https://www.linkedin.com/in/rosines-almeida/',
        icon: 'icon ic_linkedin',
    },
    {
        midiaSocial: 'mailto:rosines.almeida@gmail.com',
        link: 'mailto:rosines.almeida@gmail.com',
        icon: 'icon ic_email',
    },
    {
        midiaSocial: '/Rosines-Almeida',
        link: 'https://github.com/Rosines-Almeida',
        icon: 'icon ic_gitHub',
    },

]

const experiencias = [
    {
        year: '2021',
        description: 'Atuo no projeto com melhorias e nova simplemantações atuando com typescriprt, vue, scss, html',
        title: 'Analista de desenvolvimento  Front-end Pleno',
        skills: ['TypeScript', 'VueJS', 'SCSS']
    },
    {
        year: '2022',
        description: 'Atuo no projeto com melhorias e nova simplemantações atuando com typescriprt, vue, scss, html',
        title: 'Analista de desenvolvimento  Front-end Plen',
        skills: ['TypeScript', 'VueJS', 'SCSS']
    }
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
        formacao: 'Exam 480: Programming in HTML5 with JavaScript and CSS3',
        instituicao: 'Microsoft',
        link: 'https://www.credly.com/badges/ff46d960-ee37-4ad3-9f44-b04488642a9c?'
    },
    {
        formacao: 'Scrum Fundamentals Certified',
        instituicao: 'SCRUMstudy'
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
        link: 'https://alura-quiz-react-rosines-almeida.vercel.app/ ',
        techs: ['React',],
        src: '/img/projeto_dog.gif'
    },
    {
        link: 'https://dogs-nu.vercel.app/',
        techs: ['React', 'Redux'],
        src: '../assets/projeto_dog.gif'
    },
    {
        link: 'techno-vue.vercel.app ',
        techs: ['VueJs',],
        src: '../assets/projeto_tecno.gif'
    }
]
export default { contatos, experiencias, formacao, certificacao, cursos, projetos };
import '../assets/_colors.scss'

const theme = {
    light: {
        dark: false,
        backgroundColor: "#FFF",
        color: "#1C2833",
        hover: "#EEE",
        task: {
            backgroundColor: '#fff',
            border: '#fff',
            searchBorder: '#777',
            shadow: "rgba(0,0,0,0.75)"
        },
        hamburger: {
            crossColor: '#232323',
            buttonColor: '#999'
        },
        sidebar: {
            backgroundColor: '#F8F8F8'
        },
        card: {
            backgroundColor: "#FBFBFB",
            borderColor: "#D6D6D6"
        },
    },
    dark: {
        dark: true,
        backgroundColor: "#371238",
        color: "#FFF",
        hover: "#4E254E",
        task: {
            backgroundColor: "#350635",
            border: "#DEDEDE",
            shadow: "rgba(220,220,220,0.75)"
        },
        hamburger: {
            crossColor: '#FFF',
            buttonColor: '#CACACA'
        },
        sidebar: {
            backgroundColor: '#320332'
        },
        card: {
            backgroundColor: "",
            borderColor: ""
        },
    }
};
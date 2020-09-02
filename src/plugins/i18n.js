import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
    locale: 'en',
    fallback: 'pl',
    messages:{
        en: {
            welcomeMsg: "Welcome in our app",
            Forum: "Forum",
            Ecosystem: "Ecosystem",
            EssentialLinks: "Essential Links",
            
        },
        ru:{
            welcomeMsg: "Добро пожаловать в наше приложение",
            Forum: "Форум",
            Ecosystem: "Экосистема",
            EssentialLinks: "Основные Ссылки"
        },
        pl:{
            welcomeMsg: "Witaj w naszej aplikacji",
            Forum: "Forum",
            Ecosystem: "Ekosystem",
            EssentialLinks: "Główne linki"
        },
        de:{
            welcomeMsg: "Willkommen in unserer App",
            Forum: "Forum",
            Ecosystem: "Ökosystem",
            EssentialLinks: "Wichtige Links"
        }
    }
})
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Step } from '../models/step.model';

@Injectable({
    providedIn: 'root'
})
export class StepsService {

    subject = new Subject<number>();

    constructor(private httpClient: HttpClient) { }

    getStepById(id: number): Step | null {
        let step: Step | null = null;
        this.steps.forEach((element: Step) => {
            if (element.id === id) step = element;
        });
        return step;
    }

    getAPISteps(): Observable<Object> {
        return this.httpClient.get('https://localhost:7027/api/Steps');
    }

    getAPIStep(id: number): Observable<Object> {
        return this.httpClient.get(`https://localhost:7027/api/Steps/${id}`);
    }

    getAPIChoice(id: number): Observable<Object> {
        return this.httpClient.get(`https://localhost:7027/api/Choices/${id}`);
    }

    getAPITheme(id: number): Observable<Object> {
        return this.httpClient.get(`https://localhost:7027/api/Themes/${id}`);
    }

    getAPIIcon(id: number): Observable<Object> {
        return this.httpClient.get(`https://localhost:7027/api/Icons/${id}`);
    }

    getAPIUser(id: number): Observable<Object> {
        return this.httpClient.get(`https://localhost:7027/api/Users/${id}`);
    }

    steps: Step[] = [
        {
            id: 1,
            death: "",
            safe: "",
            additional: "",
            story: "Driiiiing ! Driiiiing ! Vous entendez le réveil sonner, ce qui annonce le début de la journée. Vous allumez la lumière, vous vous levez. Vous effectuez votre rituel du matin, tout se passe comme d'habitude. Mais aujourd'hui est une journée unique: vous commencez votre formation à Simplon, à Lille. Que faites-vous pour préparer cette journée ?",
            hour: new Date("November 22, 2021 07:00:00"),
            theme: {
                name: "night",
                background: "../../../assets/img/backgrounds/night.jpg",
                icon: {
                    src: "../../assets/img/icons/night.png",
                    alt: "Icône de lune",
                    author: "Made by Vectors Market from www.flaticon.com"
                }
            },
            choices: [
                {
                    id: 1,
                    text: "Je me rendors un peu, pour être au top de ma forme pour cette magnifique journée qui s'annonce."
                },
                {
                    id: 2,
                    text: "Je vérifie mes affaires et me prépare à partir après avoir pris un petit déjeuner."
                },
                {
                    id: 3,
                    text: "Flemme d'y aller au final, je préfére continuer à passer mes journées à jouer."
                }
            ]
        },
        {
            id: 2,
            death: "Vous êtes radié de Pole Emploi et vous passez à côté d'une très bonne formation, dans laquelle vous auriez rencontrer des personnes très sympa.",
            safe: "Au dernier moment, vous vous reprenez en main et vous décidez d'y aller quand même. ",
            additional: "Vous vous rendormez, vous avez une grande confiance en vous et vous ne mettez pas de réveil. Seulement, au lieu de se rendormir 10 minutes, vous vous réveillez ... 30 minutes plus tard. En panique, vous vous ruez vers votre voiture avec vos affaires pour prendre le volant au plus vite pour ne pas arriver en retard. ",
            story: "Vous êtes sur la route. La météo n'est pas à votre avantage: pluie, vent, tout est fait en sorte de vous ralentir. En plus de ca, il y a quelques embouteillages. Vous commencez à stresser car vous n'avez pas envie d'arriver en retard. Que faites-vous?",
            hour: new Date("November 22, 2021 08:00:00"),
            theme: {
                name: "rain",
                background: "../../assets/img/backgrounds/rain.jpg",
                icon: {
                    src: "../../assets/img/icons/rain.png",
                    alt: "Icône de pluie",
                    author: "Made by Konkapp from www.flaticon.com"
                }
            },
            choices: [
                {
                    id: 1,
                    text: "Je change d'itinéraire pour essayer d'arriver au plus vite."
                },
                {
                    id: 2,
                    text: "Vous prenez votre temps, prudence est mère de sureté."
                },
                {
                    id: 3,
                    text: "Vous accélérez, en essayant de slalomer sur les voies pour ne pas rater le début de la formation."
                }
            ]
        },
        {
            id: 3,
            death: "Vous faites de l'aquaplanning à cause de la pluie et avec la vitesse, vous provoquez un accident. Votre voiture est une épave, mais heureusement, vous vous en sortez indemne. Vous loupez donc l'opportunité de suivre la formation de Simplon, mais au moins vous êtes en vie.",
            safe: "Vous êtes un vrai pilote et vous réussissez à slalomer entre les véhicules. ",
            additional: "Vous essayez de prendre des petits chemins moins embouteillés, mais vous n'êtes pas le seul à avoir eu cette idée. En plus de prendre une route plus longue elle est embouteillée. ",
            story: "Vous arrivez enfin devant Simplon. Maintenant, le plus dur reste à faire : trouver une place pour se garer. Vous passez à côté d'une place libre à 100m de la porte. Que faites-vous ?",
            hour: new Date("November 22, 2021 08:55:00"),
            theme: {
                name: "dark_clouds",
                background: "../../assets/img/backgrounds/dark_clouds.jpg",
                icon: {
                    src: "../../assets/img/icons/dark_clouds.png",
                    alt: "Icône de nuages sombres",
                    author: "Made by Freepik from www.flaticon.com"
                }
            },
            choices: [
                {
                    id: 1,
                    text: "Je continue mon chemin pour trouver une place libre plus proche de la porte."
                },
                {
                    id: 2,
                    text: "Je me gare directement à cette place."
                },
                {
                    id: 3,
                    text: "J'attend que LA place la plus proche de Simplon se libère, flemme de marcher."
                }
            ]
        },
        {
            id: 4,
            death: "Vous attendez toute la journée, jamais elle ne se libère. Vous repartez chez vous, dégouté de ne pas avoir réussi à avoir LA place.",
            safe: "Vous avez beaucoup de chance aujourd'hui: la place se libère juste devant vous. ",
            additional: "Vous faites plusieurs fois le tour du quartier, pour finalement vous garer sur la place libre que vous aviez vu car il n'y a aucune autre place de libre. ",
            story: "Vous prenez votre café, mais vous arrivez un peu en retard dans la salle. Johann, le formateur, se tient devant vous, bras croisé, et vous demande la raison de votre retard. Que lui répondez-vous ?",
            hour: new Date("November 22, 2021 09:00:00"),
            theme: {
                name: "school",
                background: "../../assets/img/backgrounds/school.jpg",
                icon: {
                    src: "../../assets/img/icons/school.png",
                    alt: "Icône d'écran d'ordinateur",
                    author: "Made by Kerismaker from www.flaticon.com"
                }
            },
            choices: [
                {
                    id: 1,
                    text: "Je lui propose un café."
                },
                {
                    id: 2,
                    text: "Je m'excuse de mon retard en disant que c'est à cause des embouteillages sur la route."
                },
                {
                    id: 3,
                    text: "Je lui propose un combat de MMA."
                }
            ]
        },
        {
            id: 5,
            death: "Malheureusement, il vous défonce en 5 secondes, vous avez trop pris la confiance et vous le regrettez. Vous finissez à l'hopital.",
            safe: "Miraculeusement, vous arrivez à vous en sortir vivant. ",
            additional: "Malheureusement, il ne boit pas de café. Après un petit sermont, vous vous mettez au travail. ",
            story: "Toute votre matinée se passe plutôt bien. Vous apprenez à connaître les personnes qui vous entourent, et pour cela, rien de mieux qu'un repas avec tout le monde autour de la table. Qu'avez-vous pris à manger?",
            hour: new Date("November 22, 2021 12:00:00"),
            theme: {
                name: "sandwich",
                background: "../../assets/img/backgrounds/sandwich.jpg",
                icon: {
                    src: "../../assets/img/icons/sandwich.png",
                    alt: "Icône de sandwich",
                    author: "Made by Freepik from www.flaticon.com"
                }
            },
            choices: [
                {
                    id: 1,
                    text: "Un tupperware préparé la veille au soir"
                },
                {
                    id: 2,
                    text: "Un sandwich du p'tit Louis"
                },
                {
                    id: 3,
                    text: "Un sandwich triangle du carrefour city"
                }
            ]
        },
        {
            id: 6,
            death: "Vous trouvez un cheveu dans votre sandwich triangle. Vous trouvez ca dégoutant, vous ne manger donc pas. Vous avez mal au ventre toute l'après-midi, ce qui fait que vous n'êtes pas du tout productif et vous rentrez chez vous.",
            safe: "C'était pas ouf, mais ça vous suffit, vous mangerez mieux ce soir. ",
            additional: "Quel dommage, tous les micro-ondes sont tombés en panne. Vous allez donc chercher un sandwich au p'tit Louis. ",
            story: "Le ventre rempli, vous êtes dans de bonnes conditions pour travailler. Vous commencez un site web qui parle de votre passion. Que choisissez-vous comme sujet ?",
            hour: new Date("November 22, 2021 15:00:00"),
            theme: {
                name: "sun",
                background: "../../assets/img/backgrounds/sun.jpg",
                icon: {
                    src: "../../assets/img/icons/sun.png",
                    alt: "Icône de soleil",
                    author: "Made by Freepik from www.flaticon.com"
                }
            },
            choices: [
                {
                    id: 1,
                    text: "Les chats"
                },
                {
                    id: 2,
                    text: "Les canards"
                },
                {
                    id: 3,
                    text: "Les armes à feu"
                }
            ]
        },
        {
            id: 7,
            death: "Ce sujet étant très sensible, votre passion pour les armes vous fait passer pour une personne dangereuse et vous vous faites virez de Simplon.",
            safe: "Vous arrivez à expliquer votre passion en rassurant les gens, en disant que votre collection est entièrement légale et démilitarisée. ",
            additional: "Ça manque un peu d'originalité, mais votre background rose uni fait son effet. ",
            story: "Votre site est très apprécié, et vous finissez votre journée de formation sur cette présentation. Vos collègues vous proposent d'aller boire une bière en ville pour décompresser de cette journée intense, que faites-vous ?",
            hour: new Date("November 22, 2021 17:00:00"),
            theme: {
                name: "duck",
                background: "../../assets/img/backgrounds/duck.jpg",
                icon: {
                    src: "../../assets/img/icons/duck.png",
                    alt: "Icône de canard",
                    author: "Made by Smashingstocksfrom www.flaticon.com"
                }
            },
            choices: [
                {
                    id: 1,
                    text: "Je leur dis que je les rejoins un peu plus tard."
                },
                {
                    id: 2,
                    text: "J'accepte volontiers, vive la bière."
                },
                {
                    id: 3,
                    text: "Je refuse en leur disant que la bière est la pire boisson du monde."
                }
            ]
        },
        {
            id: 8,
            death: "Vous avez insultez la sainte boisson qu'est la bière, vous êtes viré de ce groupe et vous rentrez chez vous boire tout seul votre bouteille d'eau.",
            safe: "Ils ne sont pas d'accord avec vous, mais ils choisissent un bar qui ne sert pas QUE de la bière pour que vous puissiez venir. ",
            additional: "Petit soucis: vous n'avez pas demandé dans quel bar ils allaient. Vous loupez donc la première pinte, le temps de trouver le bar dans lequel ils sont allés. ",
            story: "Vous buvez un verre avec vos collègues. L'ambiance est très bonne, mais l'heure de rentrer arrive à grand pas.Vous reprenez votre voiture (vous n'avez bu qu'une bière, vous n'êtes plus jeune conducteur, la consommation excessive d'alcool est dangereuse pour la santé). Vous arrivez au rond point qui est complétement embouteillé, que faites-vous ?",
            hour: new Date("November 22, 2021 19:00:00"),
            theme: {
                name: "highway",
                background: "../../assets/img/backgrounds/highway.jpg",
                icon: {
                    src: "../../assets/img/icons/highway.png",
                    alt: "Icône de voiture",
                    author: "Made by Freepik from www.flaticon.com"
                }
            },
            choices: [
                {
                    id: 1,
                    text: "Vous attendez la bonne occasion pour vous insérer."
                },
                {
                    id: 2,
                    text: "Vous forcez le passage, tout en essayant de ne pas percuter de voiture."
                },
                {
                    id: 3,
                    text: "Vous essayez de faire demi tour."
                }
            ]
        },
        {
            id: 9,
            death: "En manoeuvrant, vous tappez la voiture derrière vous qui vous collait au cul. Votre journée se finit donc en faisant un constat. ",
            safe: "Au moment où vous commencez à faire demi-tour, vous avez une voiture qui vous laisse passer, donc vous pouvez vous insérer. ",
            additional: "Vous arrivez à vous insérer ... au bout de 5 bonnes minutes. Vous vous faites klaxonnez en boucle. ",
            story: "Tant bien que mal, vous accomplissez l'exploit de franchir ce rond point de la mort. Vous arrivez enfin à votre domicile, fatigué. Vous mangez, puis vous hésitez. Demain, vous commencez le C#. Que décidez-vous de faire ?",
            hour: new Date("November 22, 2021 20:30:00"),
            theme: {
                name: "night_studying",
                background: "../../assets/img/backgrounds/night_studying.jpg",
                icon: {
                    src: "../../assets/img/icons/night_studying.png",
                    alt: "Icône de livres avec lampe de chevet",
                    author: "Made by Prosymbols from www.flaticon.com"
                }
            },
            choices: [
                {
                    id: 1,
                    text: "Je fais une petite sieste, et je m'y met."
                },
                {
                    id: 2,
                    text: "Je vais faire le tuto open classroom et me renseigner sur le language en regardant des vidéos youtube."
                },
                {
                    id: 3,
                    text: "J'ai déjà assez bosser aujourd'hui, flemme de continuer."
                }
            ]
        },
        {
            id: 10,
            death: "Vous allez vous planter demain, et vous allez prendre du retard sur la formation juste parce que vous n'avez pas consacré quelques dizaines de minutes.",
            safe: "Vous avez déjà pas mal de connaissance, ça devrait bien se passer. ",
            additional: "Vous êtes moins fatiguée, seulement vous avez une grosse baisse de motivation. Vous regardez la vidéo la plus courte sur le language pour avoir les bases, vous apprendrez le reste sur place demain. ",
            story: "Après vos recherches, vous êtes confiant pour demain. Vous avez hâte de continuer la formation, mais il est maintenant l'heure de dormir pour être en forme pour demain. A quelle heure mettez-vous votre réveil ?",
            hour: new Date("November 22, 2021 22:00:00"),
            theme: {
                name: "night",
                background: "../../assets/img/backgrounds/night.jpg",
                icon: {
                    src: "../../assets/img/icons/night.png",
                    alt: "Icône de lune",
                    author: "Made by Vectors Market from www.flaticon.com"
                }
            },
            choices: [
                {
                    id: 1,
                    text: "7h30, ca passe tout pile, je serais pile à l'heure, en espérant qu'il n'y ai pas d'imprévu."
                },
                {
                    id: 2,
                    text: "7h, ca me laisse du temps au cas où un imprévu se pointe."
                },
                {
                    id: 3,
                    text: "8h30, j'ai pas besoin de beaucoup de temps pour me préparer, ca passe."
                }
            ]
        },
        {
            id: 11,
            death: "",
            safe: "",
            additional: "",
            story: "Le réveil est mis. Maintenant, vous pouvez vous endormir sereinement, et vous vivrez demain de nouvelles péripéties. Lesquelles ? Rendez-vous au prochain épisode.",
            hour: new Date("November 22, 2021 22:00:00"),
            theme: {
                name: "night",
                background: "../../assets/img/backgrounds/night.jpg",
                icon: {
                    src: "../../assets/img/icons/night.png",
                    alt: "Icône de lune",
                    author: "Made by Vectors Market from www.flaticon.com"
                }
            },
            choices: []
        },
        {
            id: 666,
            death: "",
            safe: "",
            additional: "",
            story: "",
            hour: new Date("November 22, 2021 22:00:00"),
            theme: {
                name: "death",
                background: "../../assets/img/backgrounds/death.jpg",
                icon: {
                    src: "../../assets/img/icons/death.png",
                    alt: "Icône de mort",
                    author: "Made by Freepik from www.flaticon.com"
                }
            },
            choices: []
        }
    ];
}
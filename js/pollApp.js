const questionsList = [
    {
        question: '01. Как бы вы описали свое утро?',
        answerList: [
            {
                letter: "A",
                text: 'Время для себя. Люблю спокойно посидеть за чашечкой кофе.',
                type: 'H'
            },
            {
                letter: "Б",
                text: 'Главное — активность: каждый день начинаю со спорта.',
                type: 'E'
            },
            {
                letter: "В",
                text: 'Встаю по будильнику, чтобы не опоздать на работу.',
                type: 'I'
            },
            {
                letter: "Г",
                text: 'Ранний подъем не моё. Ложусь поздно и сплю до обеда.',
                type: 'F'
            },
        ]
    },

    {
        question: '02. Ваш любимый напиток на завтрак:',
        answerList: [
            {
                letter: "A",
                text: 'Крепкий чёрный кофе',
                type: 'G'
            },
            {
                letter: "Б",
                text: 'Капучино или латте',
                type: 'A'
            },
            {
                letter: "В",
                text: 'Черный или зеленый чай',
                type: 'B'
            },
            {
                letter: "Г",
                text: 'Вода или сок',
                type: 'E'
            },
        ]
    },
    {
        question: '03. Какой день недели самый любимый:',
        answerList: [
            {
                letter: "A",
                text: 'Понедельник. Да, я не шучу.',
                type: 'G'
            },
            {
                letter: "Б",
                text: 'Среда, ведь это маленькая пятница',
                type: 'F'
            },
            {
                letter: "В",
                text: 'Пятница — ведь впереди выходные',
                type: 'C'
            },
            {
                letter: "Г",
                text: 'Суббота — любимый выходной',
                type: 'D'
            },
        ]
    },
    {
        question: '04. Что для вас завтрак?',
        answerList: [
            {
                letter: "A",
                text: 'Главный прием пищи. Остальную еду — отдаю врагам.',
                type: 'E'
            },
            {
                letter: "Б",
                text: 'Заставляю себя есть, чтобы зарядиться энергией на день',
                type: 'D'
            },
            {
                letter: "В",
                text: 'Это приятный способ провести утро',
                type: 'B'
            },
            {
                letter: "Г",
                text: 'Предпочитаю другие приемы пищи',
                type: 'I'
            },
        ]
    },
    {
        question: '05. Ваше любимое блюдо на завтрак:',
        answerList: [
            {
                letter: "A",
                text: 'Сэндвич или бутерброд',
                type: 'D'
            },
            {
                letter: "Б",
                text: 'Омлет или яичница',
                type: 'A'
            },
            {
                letter: "В",
                text: 'Каша или мюсли с молоком',
                type: 'B'
            },
            {
                letter: "Г",
                text: 'Йогурт или творог',
                type: 'E'
            },
        ]
    },
    {
        question: '06. Где вы предпочитаете завтракать?',
        answerList: [
            {
                letter: "A",
                text: 'В постели или дома на диване',
                type: 'F'
            },
            {
                letter: "Б",
                text: 'За столом на кухне или в столовой',
                type: 'I'
            },
            {
                letter: "В",
                text: 'В кафе или кофейне',
                type: 'C'
            },
            {
                letter: "Г",
                text: 'В офисе',
                type: 'G'
            },
        ]
    },
    {
        question: '07. Как у вас с кулинарными способностями?',
        answerList: [
            {
                letter: "A",
                text: 'Люблю и умею готовить, изучаю новые рецепты',
                type: 'F'
            },
            {
                letter: "Б",
                text: ' Я хорошо готовлю, но только под настроение',
                type: 'H'
            },
            {
                letter: "В",
                text: 'Лучше всего я разогреваю полуфабрикаты',
                type: 'I'
            },
            {
                letter: "Г",
                text: 'Зачем готовить, если можно заказать еду на дом?',
                type: 'G'
            },
        ]
    },
    {
        question: '08. Какой фильм вы бы сейчас посмотрели?',
        answerList: [
            {
                letter: "A",
                text: 'Завтрак у Тиффани',
                type: 'A'
            },
            {
                letter: "Б",
                text: 'Сериал «Кухня»',
                type: 'C'
            },
            {
                letter: "В",
                text: 'Шоколад',
                type: 'H'
            },
            {
                letter: "Г",
                text: 'Ешь, молись, люби',
                type: 'D'
            },
        ]
    },
    {
        question: '09. С кем бы вам хотелось провести идеальный завтрак?',
        answerList: [
            {
                letter: "A",
                text: 'С родными и семьей',
                type: 'B'
            },
            {
                letter: "Б",
                text: 'Со знаменитостью',
                type: 'H'
            },
            {
                letter: "В",
                text: 'С близкими друзьями',
                type: 'C'
            },
            {
                letter: "Г",
                text: 'С любимым человеком',
                type: 'A'
            },
        ]
    }
]
const testResult = {
    "A": {
        resType: 'Романтик.',
        resTitle: 'Вам подойдет неспешный уютный завтрак вдвоем с любимым человеком. Приготовьте ему бриошь с творожным сыром со вкусом овощей гриль и помидорами. И подайте в постель вместе с фруктами и ароматным кофе.',
        ingredients: [
            {
                name: 'Бриошь',
                count: '4 ломтика (можно заменить на обычный хлеб для тостов)'
            },
            {
                name: 'Сыр творожный Hochland со вкусом «овощи-гриль»',
                count: '200 г'
            },
            {
                name: 'Молоко',
                count: '200 мл.'
            },
            {
                name: 'Яйцо',
                count: '1 шт.'
            },
            {
                name: 'Чеснок',
                count: '2 зубчика'
            },
            {
                name: 'Оливковое масло',
                count: '3 ст.л.'
            },
            {
                name: 'Помидор',
                count: '1 шт. (или помидоры черри'
            },
            {
                name: 'Руккола',
                count: '70 г'
            },
            {
                name: 'Соль, перец',
                count: 'по вкусу'
            },
        ],
        cookingProcess: [
            "Взбейте яйцо с молоком, посолите.",
            "В яичную смесь добавьте бриоши или тосты.",
            "Обжарьте на горячей сковороде с маслом.",
            "Нарежьте помидор кружочками.",
            "В творожный сыр выдавите чеснок, перемешайте.",
            "На готовые бриоши нанесите творожный сыр со вкусом «овощи гриль» с добавлением чеснока, добавьте руколу и помидоры."
        ]
    },
    "B": {
        resType: 'Примерный семьянин.',
        resTitle: 'Вам подойдет традиционный завтрак со вкусными и сытными блюдами, которые понравятся всем членам семьи. Попробуйте приготовить в выходные пикантные панкейки на творожном сыре со вкусом маринованных огурчиков',
        ingredients: [
            {
                name: 'Мука',
                count: '120 г'
            },
            {
                name: 'Молоко',
                count: '300 мл'
            },
            {
                name: 'Творожный сыр Hochland со вкусом маринованных огурчиков',
                count: '100 гр'
            },
            {
                name: 'Большое яйцо',
                count: '1 шт.'
            },
            {
                name: 'Консервированная кукуруза',
                count: '150 г'
            },
            {
                name: 'Небольшая морковка',
                count: '1 шт.'
            },
            {
                name: 'Петрушка',
                count: '3 веточки'
            },
            {
                name: 'Сливочное масло',
                count: '25 гр.'
            },
            {
                name: 'Соль',
                count: '1/2 ч. л.'
            },
        ],
        cookingProcess: [
            "Натрите морковь на мелкой терке. Мелко нарежьте петрушку.",
            "Просейте муку с солью в миску. Добавьте яйцо и половину молока и хорошо перемешайте, пока у вас не получится гладкое, густое тесто.",
            "Вмешайте творожный сыр, а затем влейте оставшееся молоко и хорошо размешайте до однородности.",
            "Добавьте в тесто кукурузу, морковь, петрушку.",
            "Растопите сливочное масло. Разогрейте сковороду на среднем огне. Смажьте сковороду с помощью кисточки растопленным маслом и выкладывайте по 2–3 ст. л. теста. Жарьте по 1–2 мин. с каждой стороны. ",
            "Готовые панкейки перекладывайте на тарелку и прикрывайте фольгой, чтобы сохранить их теплыми. Подавайте со сметаной.",
        ]
    },
    "C": {
        resType: 'Душа компании.',

        resTitle: 'Вам определенно стоит устроить завтрак с друзьями в мексиканском стиле и удивить их потрясающей кесадильей с курицей и нашим новым творожным сыром с чесноком.',
        ingredients: [
            {
                name: 'Творожный сыр Hochland с чесноком',
                count: '80 гр'
            },
            {
                name: 'Тортилья пшеничная',
                count: '1 шт.'
            },
            {
                name: 'Петрушка ',
                count: '5 г'
            },
            {
                name: 'Томаты',
                count: '20 г'
            },
            {
                name: 'Репчатый лук',
                count: '15 г'
            },
            {
                name: 'Соль',
                count: '2 г'
            },
            {
                name: 'Куриная грудка',
                count: '40 г'
            },
            {
                name: 'Масло растительное',
                count: '10 мл'
            },
            {
                name: 'Кетчуп',
                count: '30 мл'
            },
            {
                name: 'Масло сливочное',
                count: '10 г'
            },
        ],
        cookingProcess: [
            'Предварительно обжарить на растительном масле куриную грудку, остудить, нарезать кубиками.',
            'На тарелку положить лепешку, смазать творожным сыром, по всей поверхности посыпать нарезанными томатами, жареным луком, куриной грудкой и мелкорубленной петрушкой.',
            'Тортилью сложить пополам, обжарить на сливочном масле с 2 сторон до золотистого цвета.',
            'Готовую тортилью переложить на доску и порезать на 3 равные части. Кесадилья готова. Подавать с кетчупом.'
        ]
    },
    "D": {
        resType: 'Искатель приключений.',
        resTitle: 'Такие люди не могут долго сидеть на одном месте — всегда стремятся к новому. Долгий завтрак не для вас. Попробуйте приготовить брускетты с творожным сыром со вкусом овощей гриль, черри и маслинами. И вкусно, и сытно, и можно взять с собой, чтобы отправиться на поиски свежих впечатлений.',
        ingredients: [
            {
                name: 'Творожный сыр Hochland «овощи-гриль»',
                count: '200 г'
            },
            {
                name: 'Xлеб чиабатта классическая',
                count: '300 г'
            },
            {
                name: 'Томаты черри',
                count: '80 г'
            },
            {
                name: 'Чеснок',
                count: '1 зубчик'
            },
            {
                name: 'Масло ол.',
                count: '30 г'
            },
            {
                name: 'Маслины',
                count: '30 г'
            },
            {
                name: 'Лук зелёный',
                count: '20 г'
            },
            {
                name: 'Базилик',
                count: '20 г'
            },
            {
                name: 'Соль, перец',
                count: 'по вкусу'
            },
        ],
        cookingProcess: [
            'Хлеб (4 ломтика) обжариваем на сковородке на оливковом масле или подсушиваем в тостере, а потом сбрызгиваем оливковым маслом.',
            'Готовую основу для будущих брускетт натираем с одной стороны чесноком.',
            'Зеленый лук и часть базилика мелко порубить, смешать с сыром Hochland, посолить и поперчить по вкусу.',
            'Готовую сырную массу намазываем толстым слоем на ломтики хлеба.',
            'Сверху положить нарезанные на половинки томаты черри и маслины. Сбрызнуть готовые брускетты оливковым маслом, украсить веточкой базилика и можно подавать к столу.'
        ]
    },
    "E": {
        resType: 'Фанат здоровья.',
        resTitle: "Вам важно питаться правильно и плодотворно начинать день, поэтому на завтрак вам подойдет легкий микс-салат с творожным сыром со вкусом маринованных огурчиков и куриной грудкой. Этот изысканный и красивый салат станет абсолютным хитом для тех, кто внимательно следит за своим здоровьем и хочет питаться вкусно и сбалансированно.",
        ingredients: [
            {
                name: 'Творожный сыр Hochland со вкусом маринованных огурчиков',
                count: '140 г'
            },
            {
                name: 'Микс салатных листьев',
                count: '1/2 стандартной упаковки'
            },
            {
                name: 'Отварная куриная грудка',
                count: '200 г'
            },
            {
                name: 'Огурчики',
                count: '2 шт.'
            },
            {
                name: 'Яйца, сваренные вкрутую',
                count: '2 шт.'
            },
            {
                name: 'Оливковое масло, лимон, хлопья чилийского перца, прованские травы, соль',
                count: 'по вкусу'
            },
        ],
        cookingProcess: [
            'Огурцы нарежьте лентами с помощью овощечистки или слайсера.',
            'Яйца заранее отварите, охладите, почистите и нарежьте.',
            'На микс свежих салатных листьев выкладываем порезанное кубиками куриное мясо, ленты свежих огурцов, четвертинки яиц, ну и, конечно, творожный сыр со вкусом маринованных огурчиков.',
            'Для заправки смешайте оливковое масло с лимонным соком, солью, прованскими травами и хлопьями чили. Заправьте салат этим соусом.'
        ]
    },
    "F": {
        resType: 'Творческая натура.',
        resTitle: 'Вам просто необходимо хорошее настроение и вдохновение с утра. Творческий завтрак в виде теплых оладушков с творожным сыром со вкусом овощей гриль и красной рыбой — идеальное решение. Этот завтрак добавит красок в жизнь. И, кстати, оладушки можно украсить максимально креативно. Еще и развлечение.',
        ingredients: [
            {
                name: 'Мука',
                count: '1 стакан'
            },
            {
                name: 'Разрыхлитель',
                count: '1 ч. л.'
            },
            {
                name: 'Соль',
                count: '1/4 ч. л.'
            },
            {
                name: 'Кефир',
                count: '1 стакан'
            },
            {
                name: 'Яйца',
                count: '1 шт.'
            },
            {
                name: 'Сахар',
                count: '1 ч. л.'
            },
            {
                name: 'Растопленное сливочное масло ',
                count: '2 ст. л.'
            },
            {
                name: 'Растительное масло',
                count: 'для жарения'
            },
            {
                name: 'Слабосоленая красная рыба (лосося, горбуши, форели)',
                count: '150 г - для начинки'
            },
            {
                name: 'Творожный сыр «Овощи-гриль» Hochland',
                count: '220 г'
            },
            {
                name: 'Ломтики огурца',
                count: 'для подачи'
            },
            {
                name: 'Укроп',
                count: 'для подачи'
            },
        ],
        cookingProcess: [
            'Просейте вместе муку, разрыхлитель и соль.',
            'В миске смешайте кефир, яйцо и сахар. Всыпьте мучную смесь и быстро размешайте. Оставьте тесто на 10 мин.',
            'Затем добавьте к тесту растопленное сливочное масло и перемешайте.',
            'Разогрейте сковороду с антипригарным покрытием и смажьте ее растительным маслом. Наливайте тесто столовой ложкой и выпекайте маленькие оладушки.',
            'Разложите оладушки на блюде. На каждый выложите по ложке творожного сыра и ломтику рыбы. Украсьте кружочком огурца и веточкой укропа и подавайте.'
        ]
    },
    "G": {
        resType: 'Карьерист.',
        resTitle: 'Вам важно быть сосредоточенным и продуктивным, ведь с самого утра все мысли уже на работе. В этом случае подойдет быстрый и питательный завтрак. Например, запеченный омлет с брокколи, ломтиками слабосоленого лосося и с творожным сыром со вкусом чеснока. Этот завтрак поможет начать день бодро и успешно.',
        ingredients: [
            {
                name: 'Творожный сыр Hochland с чесноком',
                count: '140 г (1-2 ст.л)'
            },
            {
                name: 'Брокколи ',
                count: '200 г'
            },
            {
                name: 'Яйца',
                count: '4 шт'
            },
            {
                name: 'Сливки 10%',
                count: '40-50 мл'
            },
            {
                name: 'Лосось слабосолёный',
                count: '100-150 г'
            },
            {
                name: 'Горсть салатного микса, оливковое масло, свежемолотый перец, соль',
                count: 'по вкусу'
            },
        ],
        cookingProcess: [
            'В глубокой миске смешать венчиком яйца со сливками, добавить по вкусу соль и перец.',
            'Форму для запекания смазать оливковым маслом.',
            'В форму выложить кусочки брокколи и залить их яичной смесью. Запекать омлет примерно 15–20 минут.',
            'На готовый омлет выложить ломтики рыбы, одну или две столовые ложки сыра и украсить блюдо салатным миксом. Подавать горячим и в форме для запекания.'
        ]
    },
    "H": {
        resType: 'Мечтатель.',
        resTitle: 'Вы не любите суету и предпочитаете проводить время наедине с собой. Вам важны гармония и красота во всем, и завтрак не должен стать исключением. Попробуйте приготовить пикантные тосты с авокадо. Это блюдо по-настоящему вдохновляет.',
        ingredients: [
            {
                name: 'Хлеб ',
                count: '4 ломтика'
            },
            {
                name: 'Авокадо ',
                count: ' 1 шт.'
            },
            {
                name: 'Лимонный сок',
                count: '20 мл.'
            },
            {
                name: 'Помидор',
                count: '1 шт.'
            },
            {
                name: 'Творожный сыр Hochland со вкусом «овощи-гриль»',
                count: '140 г'
            },
        ],
        cookingProcess: [
            'Почистить авокадо, нарезать кубиками, сбрызнуть лимонным соком.',
            'Помидор нарезать кубиками.',
            'Подогреть хлеб в тостере или на сухой сковороде.',
            'Поджаристый хлеб намазать сыром, выложить начинку. Украсить зеленью.',
        ]
    },
    "I": {
        resType: 'Белка в колесе.',
        resTitle: 'Белка в колесе. У вас всегда много дел, поэтому завтрак должен быть быстрым и  сытным. Уверены, что бутерброды уже надоели, поэтому предлагаем приготовить Рулет в лаваше. Времени на приготовление уйдет немного, зато вкусом насладиться успеете по полной. Даже если очень спешите.',
        ingredients: [
            {
                name: 'Творожный сыр Hochland со вкусом чеснока',
                count: '200 г'
            },
            {
                name: 'Сливки 20%',
                count: '50 мл'
            },
            {
                name: 'Лосось слабосоленый (тонкие ломтики)',
                count: '150 г'
            },
            {
                name: 'Нарезанные укроп и петрушка',
                count: '50 г'
            },
            {
                name: 'Огурец длинноплодный',
                count: '1 шт.'
            },
            {
                name: 'Лаваш',
                count: '1 шт.'
            },
        ],
        cookingProcess: [
            'Смешать лопаткой творожный сыр, сливки и зелень в однородную массу.',
            'Снять с огурца кожуру, нарезать его тонкими длинными ломтиками.',
            'Нанести на лаваш слой сырной массы с зеленью не более 0,5 см.',
            'Выложить на сырную массу ломтики огурца в один слой, поверх огурца выложить ломтики лосося.',
            'Свернуть из лаваша рулет, порезать на кусочки, нанизать на деревянные шпажки.'
        ]
    }
}

const pollApp = {
    data() {
        return {
            questionsList,
            testResult,
            currentQuestionIndex: 0,
            selectedAnswerLetter: '',
            answerList: [],
            showResult: false,
            resultType: null
        }
    },
    computed: {
        currentQuestion() {
            return this.questionsList[this.currentQuestionIndex] ? this.questionsList[this.currentQuestionIndex] : null;
        },
    },
    methods: {
        setAnswer() {
            if (this.selectedAnswerLetter == '') return;
            this.answerList.push(this.selectedAnswerLetter);
            this.selectedAnswerLetter = '';
            this.currentQuestionIndex++;
            if (this.currentQuestionIndex === this.questionsList.length) {
                this.resultType = this.testResult[this.findMostFrequentElement(this.answerList)];
            }
        },
        restartPoll() {
            this.currentQuestionIndex = 0;
            this.answerList = [];
            this.showResult = false;
            this.resultType = null;
            const appStartHtmlEl = document.querySelector('.poll-section');
            appStartHtmlEl.scrollIntoView({ block: "start", behavior: "smooth" })

        },
        findMostFrequentElement(arr) {
            const elementCount = {};
            let maxCount = 0;
            let mostFrequentElements = [];
            arr.forEach(element => (elementCount[element] = (elementCount[element] || 0) + 1) > maxCount ? maxCount = elementCount[element] : null);
            arr.forEach(element => elementCount[element] === maxCount ? mostFrequentElements.push(element) : null);
            return mostFrequentElements[Math.floor(Math.random() * mostFrequentElements.length)];
        }
    },
    watch: {
        resultType(newVal, oldVal) {
            if (newVal != null) {
                this.showResult = true;
            }
        }
    }
}

const app = Vue.createApp(pollApp);
app.mount('#poll-app');
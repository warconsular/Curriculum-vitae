import styled from '@emotion/styled';
import { Box } from "@chakra-ui/react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

const Bio = styled.p`
@font-face {
  font-family: 'Acme';
  src: url(../fonts/acme-latin-400-normal.woff) format('truetype');
}
font-family: 'Acme';
font-size: 20px;
`;


function Vitae() {

    return (
        <Box flexGrow={1} p={3} mb={2} textAlign="left" ml="33%" mr="30%">
            <Bio fontFamily='Acme'>
                <p style={{ marginBottom: '50px' }}>Меня зовут - Даниил. 24y.o. Junior разработчик. GEEK. Энтузиаст. Киноман.</p>
                <Accordion>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex={1} textAlign="center">
                                    Пролог 📕
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontStyle="italic">
                            <p>Ярко помню момент, когда впервые посмотрел фильм - "Назад в будущее". Меня настолько поразил этот фильм и образ жизни обычного человека, который создал машину времени, что в моей голове поселилась мысль о том, что я хочу быть таким же. Хочу изобретать что-то великое и гениальное. Тогда всё сублимировалось игральными конструкторами и прочим... Но из головы всегда не выходила одна мысль - изобрести или приложить руку к чему-то великому. Взрослея, эта детская мечта перешла в подсознание, временами всплывая, но я не придавал ей большого значения.

                                Благо, осознание пришло ко мне не так поздно, как могло бы. xD

                                Сейчас я прибываю в состоянии челоческой гармонии, когда ты прекрасно осознаешь чего хочешь, что ты из себя будешь представлять и к чему стремиться.</p>
                        </AccordionPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex={1} textAlign="center">
                                    О разработке 💻
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontStyle="italic">
                            <p>Интерес к программированию проявлял с средней школы(помню, как раздобыл диск с курсом от Евгения Попова по HTML и CSS - это было единственным инструментом изучения, интернет у меня поздно появился), однако сделать разработку своей профессией решил только в относительно недавнее время. Все мои знания и все проекты, которые были мной созданы - это результат моего интереса и энтузиазма только к некоторому количеству направлений, что говорит о том, что я лично для себя не ограничиваю горизонты технологий/проектов/языков с которыми в перспективе мог бы работать. Я люблю опыт, а еще больше работать и приносить своими умениями пользу.</p>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex={1} textAlign="center">
                                    Чего я хочу? 👨‍💻
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontStyle="italic">
                            <p> В первую очередь у меня стоит задача найти компанию, которая даст мне возможность улучшить мои навыки и получить безсеценный опыт в проектной разработке. Денежное вознаграждение меня не интересует от слова совсем. Я здесь не для того, чтобы заработать, а чтобы научиться-создать-улучшить. <p>Откровенно говоря, не хочу ассоциировать себя с нынешним племенем "войти в IT" и не потому что постыдно. Как правило, люди не знают причины, по которой это делают, мои же стремления четки и ясны. </p></p>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex={1} textAlign="center">
                                    Зачем вам я? 🦸‍♂️
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontStyle="italic">
                            <p>
                                <p>Попытаюсь донести мысль на простом примере.</p>
                                Моя прошлая работа имела достаточно интересный характер. Если я не даю результат, то я остаюсь, практически, не с чем, в денежном плане. И даже если я работаю целый месяц без выходных по 12 часов в день(временами даже оставаясь на ночь в офисе, чтобы сделать всё, что хотел) - тем не менее, это абсолютно не гарантирует успеха.
                                <p>Именно по-этому я привык работать на результат</p>
                                В первую очередь, я - это выгодная инвестиция. Любая компания вкладывает в своё будущее, а будущим являются - надежные сотрудники, под менторством которых вырастут новые. </p>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex={1} textAlign="center">
                                    SoftSkills 👥
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} fontStyle="italic">
                            <p style={{ marginBottom: '20px' }}>Самым главным качеством в командной работе считаю дружеский вайб и бесконечная моральная поддержка друг-друга.🏝 Много людей склонны к мыслям, что у них ничего не получится или они чего-то не могут, в команде такие фаталистические настроения необходимо с корнем удалять. Отрицать всё вокруг, быть цинником и критиком - проще всего, настоящая сила человека кроется в понимании того, что оказывается, стакан наполовину полон, цель очень даже достижима, а проблема и вовсе ею не является.
                                <p>Как говорится: "Ничего непредопределенно, всё в наших руках"</p>
                                <p>Также, хочу добавить, я резко негативно выступаю против гомофобии, трансфобии, расизма в любом виде.</p></p>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Bio>
        </Box>
    )
}

export default Vitae
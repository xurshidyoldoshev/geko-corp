import "./SinglePage.css";

import { useContext } from "react";
import { AppContext } from "../../context/context";
import SinglePageText from "../../components/SinglePageText/SinglePageText";
import AnyQuestion from "../../components/AnyQuestion/AnyQuestion";

const SinglePage = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useContext must be used within a ContextProvider");
  }

  const { blogCardData } = context;
  console.log(blogCardData);

  return (
    <>
      <section className="single__page">
        <div className="container blog__cards__container">
          <h2 className="blog__cards__title">Блог</h2>
          <h3 className="single__page__title">{blogCardData.text}</h3>
          <h4 className="single__page__date">20 декабря 2020</h4>
          <img
            className="single__page__img"
            src={blogCardData.img}
            alt="single img"
            width={1080}
            height={408}
          />
          <p className="single__page__text">
            Вы долго выбирали подходящий ноутбук, сравнивали цены, изучали
            характеристики и наконец совершили долгожданную покупку. Купили
            новый ноутбук, который должен стать вам верным помощником, другом и
            прослужить многие годы. Однако, чтобы ваша техника действительно
            прослужила вам долгий срок, необходимо о ней грамотно позаботиться.
            Далее вы как раз и прочтете главные правила по уходу за ноутбуком,
            которые помогут продлить ему жизнь.
          </p>
          <SinglePageText
            itemTitle="1. Температурный режим"
            itemText=" Данная техника крайне плохо переносит резкие перепады температур. То есть следует избегать условий сильной жары либо мороза. Естественно, это касается и слишком высокого уровня влажности. К примеру, в период сильных морозов, когда вам приходится носить ноутбук с собой по улице, при входе в помещение не включайте его сразу же. Дайте технике хотя бы 30–40 минут «на отогрев». В сильную жару используйте соответствующую вентиляционную подставку, чтобы дать вашему компьютеру немного «отдышаться». Кроме того, настоятельно рекомендуем примерно 1 раз в год проводить чистку ноутбука от пыли и замену термопасты. Это позволит ему не перегреваться, а значит значительно продлит жизнь ноутбуку."
          />
          <SinglePageText
            itemTitle="2. Внимание батарее"
            itemText="Не держите ваш ноутбук всегда подключенным к зарядному устройству. Технически вам вряд ли удастся перезарядить батарею до точки ее поломки. Но защищающий от данной проблемы контроллер может со временем испортиться, в результате чего излишний заряд приведет к порче, а в дальнейшем полному выходу батареи из строя."
          />
          <SinglePageText
            itemTitle="3. Ровная поверхность"
            itemText="Данному моменту по уходу за ноутбуком следует уделить особое внимание. Держать мобильный компьютер на коленях – это плохая идея. Это же актуально для расположения ноутбука на поверхности мягкого дивана, кровати, покрывала и прочего. Так вы серьезно мешаете работе вентиляторов и систем охлаждения, что приводит к перегреву устройства."
          />
          <SinglePageText
            itemTitle="4. Грамотная эксплуатация"
            itemText="Правильно открывайте ноутбук. Это следует делать, держась за центр верхней части устройства. Если периодически дергать экран по краям, то могут повредиться поворотные механизмы. При эксплуатации устройства ничего не должно делаться силой, всем движениям следует быть плавными. Например, резкое захлопывание крышки ноутбука выглядит, наверное, эффектно, но со временем непременно приводит к изнашиванию петель."
          />
          <SinglePageText
            itemTitle="5. Подходящая сумка"
            itemText=" Обеспечьте вашему ноутбуку должное место хранения и транспортировки. Если вы используете мобильный компьютер лишь у себя дома, то никаких особых мер не понадобится. Но при потребности периодически носить его с собой на работу, в учебное заведение, кафе и другие места не пожалейте денег на покупку подходящей и качественной сумки для транспортировки техники."
          />
          <SinglePageText
            itemTitle="6. Стабилизатор напряжения"
            itemText="Для стабильной и долгосрочной работы ноутбука, как и другой вашей техники, рекомендуется приобрести стабилизатор напряжения, что хорошо защитит ваши устройства от перепадов и скачков напряжения, что позволит избежать преждевременной поломки зарядного устройства ноутбука."
          />
          <SinglePageText
            itemTitle="7. Без еды"
            itemText="Отучитесь от привычки есть за ноутбуком, если такая имеется. Согласитесь, весьма неприятно, когда клавиатура и мышка испачканы жирными пятнами. Второй более важный момент заключается в том, что мелкие крошки и частички пищи могут проникнуть под клавиатуру и негативно отразиться на работе ноутбука."
          />
          <SinglePageText
            itemTitle="8. Об увлечении кофе"
            itemText="Следующая важная рекомендация, что схожа с предыдущим правилом – это не ставить чашку с кофе или чаем рядом с вашим ноутбуком. Одно неловкое движение – вас, членов вашей семьи или домашних животных и технику можно нести в ремонт. Причем не факт, что удастся все исправить. Хуже подобной ситуации может быть лишь та, когда вы пили сладкий сок, чай или кофе с большим количеством сахара – здесь для очистки потребуется куда больше усилий и времени. Это одна из наиболее распространенных причин поломки ноутбука, которая приводит к существенной трате денег. Порой эта сумма такова, что проще купить новый девайс."
          />
          <SinglePageText
            itemTitle="9. Бережное отношение"
            itemText="Одним из главных врагов любого ноутбука является тряска и вибрация. Прежде всего, различные резкие колебания наносят существенный ущерб жесткому диску, что на начальных этапах замедляет работу устройства, техника начинает «тормозить». При последующей небрежной эксплуатации вы можете потерять не только жесткий диск, но и всю ту информацию, что хранилась на вашем компьютере. Поэтому избежание тряски и вибрации поможет продлить жизнь ноутбуку и его компонентам."
          />
          <SinglePageText
            itemTitle="10. Используйте антивирусы"
            itemText="Современные программы-антивирусы часто не только защищают ваше устройство от вредоносных файлов или помогают найти имеющиеся проблемы, но и содержат в себе целый ряд полезных утилит для работы в сети, оптимизации производительности, очистки свободного места. Сами вирусы ваш компьютер может «подхватить» при работе в интернете (на сайтах сомнительного содержания), при скачивании пиратских, то есть взломанных программ, игр либо при использовании дисков и флэш-накопителей от ваших знакомых, на которые вручную записывали данные. В идеале, конечно, стоит приобрести платную версию, но вы можете воспользоваться рядом бесплатных программ: 360 Total; Avast; NOD32; Dr. Web и др. Такими оказались главные правила эксплуатации, которые помогут продлить жизнь ноутбуку. В ответ на бережное отношение мобильный компьютер отблагодарит вас множеством приятных часов и прослужит вам верно в течение многих лет."
          />
        </div>
      </section>
      <AnyQuestion />
    </>
  );
};

export default SinglePage;

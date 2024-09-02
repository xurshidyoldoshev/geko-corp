import '../../App.css'
import './WhenToCall.css'
import React from "react";
import { WhenToCallProfessionalButtonIcon } from "../../assets/icon";

interface WhenToCallItem {
  title: string;
  description: string;
}

const WhenToCallProfessional: React.FC = () => {
  const WhenToCallData: WhenToCallItem[] = [
    {
      title: "НЕ ВКЛЮЧАЕТСЯ МОНИТОР",
      description:
        "Убедитесь в исправности розетки и в том, что устройство к ней подключено. Возможно, не все провода или разъемы подключены корректно. Если вы все проверили и уверены, что проблема не в электропитании, поступающем к компьютеру, а в самом устройстве, вероятно монитор перестал работать по причине засорения комплектующих внутри блока. Требуется компьютерная помощь, ремонт и чистка устройства.",
    },
    {
      title: "СИСТЕМНЫЙ БЛОК ИЗДАЕТ СИЛЬНЫЕ ШУМЫ",
      description:
        'Слышно посторонние шумы из системного блока — значит, что он чем-то засорен. Важно вовремя почистить блок, чтобы избежать последствий накопления грязи и порчи блока компьютеров. Следует обратиться за услугой "компьютерная помощь" к профессионалам Секо. Мастер аккуратно очистит блок и не повредит находящиеся внутри важные комплектующие.',
    },
    {
      title: 'ПОЯВЛЕНИЕ "СИНЕГО ЭКРАНА СМЕРТИ"',
      description:
        'Неисправность операционной системы говорит о наличии вирусов в компьютере. Выход из строя системного блока также может являться причиной поломки и необходимости услуги "компьютерная помощь".',
    },
    {
      title: "КОМПЬЮТЕР НЕ РАБОТАЕТ И ИЗДАЕТ РЕЗКИЕ ЗВУКИ",
      description:
        "В таком случае признаком неполадки компьютеров является неисправность оперативной памяти или видеокарты. Старайтесь обращать внимание, когда устройство шумит и не игнорируйте эти звуки. Необходимо срочно обратиться к специалисту и провести ремонт. Если этого не сделать, в следующий раз комп может вовсе не включиться.",
    },
    {
      title: "ПРОПАЛО ИЗОБРАЖЕНИЕ С МОНИТОРА",
      description:
        "Дефекты, связанные с качеством изображений на сенсоре говорят о наличии повреждений во внутреннем чипе. О том, что неисправности в данном чипе все-таки есть, свидетельствуют посторонние объекты на экране, появившиеся полосы черного или белого цвета, а также полностью потемневший экран.",
    },
  ];

  return (
    <section className="when__to__call__professional">
      <div className="when__to__call__professional__container container">
        <h2 className="when__to__call__professional__title">
          КОГДА НУЖНО ВЫЗВАТЬ МАСТЕРА
        </h2>
        <ul className="when__to__call__professional__list">
          {WhenToCallData.map((item, index) => (
            <li key={index} className="when__to__call__professional__item">
              <h3 className="when__to__call__professional__item__title">
                {item.title}
              </h3>
              <p className="when__to__call__professional__item__description">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
        <p className="when__to__call__professional__text">
          Здесь представлены не все неисправности, которые могут встретиться во
          время использования компьютера. Пользователи также сталкиваются с
          проблемой неработающей клавиатуры, не запускающихся программ,
          невозможностью подключиться к интернету, неполадками, связанными с
          жестким диском или USB-устройством итд. Компьютерная помощь от
          компании Geko гарантирует быстрое решение проблем!
        </p>
        <div className="when__to__call__professional__button__block">
          <button className="CustomButton when__to__call__professional__button">
            <span className="when__to__call__professional__button__text">
              получить консультацию
            </span>
            <WhenToCallProfessionalButtonIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhenToCallProfessional;

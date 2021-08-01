let rules = [
  {
    title: 'Первое правило Бойцовского клуба.',
    body: 'Никому не рассказывать о Бойцовском клубе.'
  },
  {
    title: 'Второе правило Бойцовского клуба.',
    body: 'Никогда никому не рассказывать о Бойцовском клубе.'
  },
  {
    title: 'Третье правило Бойцовского клуба.',
    body: 'В схватке участвуют только двое.'
  },
  {
    title: 'Четвертое правило Бойцовского клуба.',
    body: 'Не более одного поединка за один раз.'
  },
  {
    title: 'Пятое правило Бойцовского клуба.',
    body: 'Бойцы сражаются без обуви и голые по пояс.'
  },
  {
    title: 'Шестое правило Бойцовского клуба.',
    body: 'Поединок продолжается столько, сколько потребуется.'
  },
  {
    title: 'Седьмое правило Бойцовского клуба.',
    body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
  },
  {
    title: 'Восьмое и последнее правило Бойцовского клуба.',
    body: 'Новичок обязан принять бой.'
  },

];

const wrap = document.createElement('div');
wrap.id = 'wrap';

let counter = 1;

rules.forEach((rule) => {
  let div = document.createElement('div');
  div.classList.add('rules');
  div.classList.add(`rule${counter}`)
  let title = document.createElement('h2')
  title.innerText = rule.title;
  let body = document.createElement('p');
  body.innerText = rule.body;
  div.append(title,body);
  wrap.appendChild(div);
  counter++;
})

document.body.appendChild(wrap);
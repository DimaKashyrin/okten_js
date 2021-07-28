//======================      Additional     ============
class Address {
  constructor(street, suite, city, zipcode, geoObj) {
    this.street = street;
    this.suite = suite;
    this.city = city;
    this.zipcode = zipcode;
    this.geo = geoObj;
  }
}
const addressGeo = {
  lat: '-37.3159',
  lng: '81.1496'
}
const address = new  Address(
  'Kulas Light',
  'Apt. 556',
  'Gwenborough',
  '92998-3874',
  addressGeo
)

class Company {
  constructor(name, catchPhrase, bs) {
    this.name = name;
    this.catchPhrase = catchPhrase;
    this.bs = bs;
  }
}

const company = new Company(
  'Romaguera-Crona',
  'Multi-layered client-server neural-net',
  'harness real-time e-markets'
)

class User {
  constructor(id, name, username, email, addressObj, phone, website, companyObj) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = addressObj;
    this.phone = phone;
    this.website = website;
    this.company = companyObj;
  }
}

const user = new User(
  1,
  'Leanne Graham',
  'Bret',
  'Sincere@april.biz',
  address,
  '1-770-736-8031 x56442',
  'hildegard.org',
  company
)

console.log(user);

console.log('=========================      next task      =====================')
//==============================     task 2      ================================

class Tag {
  constructor(name, action, attribute) {
    this.name = name;
    this.action = action;
    this.attribute = attribute;
  }
}

// noinspection JSUnfilteredForInLoop
class Attributes {
  constructor(name1, action1, name2, action2, name3, action3){
    this[name1] = action1;
    this[name2] = action2;
    this[name3] = action3;
  }
}

const aAttributes = new Attributes(
  'href',
  'Задает адрес документа, на который следует перейти.',
  'title',
  'Добавляет всплывающую подсказку к тексту ссылки.',
  'target',
  'Имя окна или фрейма, куда браузер будет загружать документ.'
)

const divAttributes = new Attributes(
  'align',
  'Задает выравнивание содержимого тега div.',
  'title',
  'Добавляет всплывающую подсказку к содержимому.',
  'style',
  'Применяется для определения стиля элемента с помощью правил CSS.'
)

const h1Attributes = new Attributes(
  'align',
  'Определяет выравнивание заголовка.',
  'class',
  'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.',
  'style',
  'Применяется для определения стиля элемента с помощью правил CSS.',
)
const spanAttributes = new Attributes(
  'class',
  'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.',
  'style',
  'Применяется для определения стиля элемента с помощью правил CSS.',
  'id',
  'Указывает имя стилевого идентификатора.',
)

const inputAttributes = new Attributes(
  'name',
  'Имя поля, предназначено для того, чтобы обработчик формы мог его идентифицировать.',
  'type',
  'Сообщает браузеру, к какому типу относится элемент формы.',
  'value',
  'Значение элемента.',
)
const formAttributes = new Attributes(
  'action',
  'Адрес программы или документа, который обрабатывает данные формы.',
  'method',
  'Метод протокола HTTP.',
  'autocomplete',
  'Включает автозаполнение полей формы.',
)
const optionAttributes = new Attributes(
  'disabled',
  'Заблокировать для доступа элемент списка.',
  'selected',
  'Заранее устанавливает определенный пункт списка выделенным.',
  'value',
  'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.',
)
const selectAttributes = new Attributes(
  'size',
  'Количество отображаемых строк списка.',
  'tabindex',
  'Определяет последовательность перехода между элементами при нажатии на клавишу Tab',
  'autofocus',
  'Устанавливает, что список получает фокус после загрузки страницы.',
)


//-----------------------------------------------------------------

const a = new Tag(
  'a',
  'Тег a является одним из важных элементов HTML и предназначен для создания ссылок.',
  aAttributes,
)
const div = new Tag(
  'div',
  'Элемент div является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
  divAttributes,
)
const h1 = new Tag(
  'h1',
  'Тег h1 представляет собой наиболее важный заголовок первого уровня.',
  h1Attributes,
)
const span = new Tag(
  'span',
  'Тег span предназначен для определения строчных элементов документа.',
  spanAttributes,
)
const input = new Tag(
  'input',
  'Тег input является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
  inputAttributes,
)
const form = new Tag(
  'form',
  'Тег form устанавливает форму на веб-странице.',
  formAttributes,
)
const option = new Tag(
  'option',
  'Тег option определяет отдельные пункты списка, создаваемого с помощью контейнера select.',
  formAttributes,
)
const select = new Tag(
  'select',
  'Тег select позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором.',
  formAttributes,
)



console.log(a,div,h1,span,input,form,option,select);

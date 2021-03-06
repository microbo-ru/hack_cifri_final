import YAML from "yaml";

const word_map = {
  паспортные_данные: "passport",
  фио: "name",
  телефон: "phone",
  адрес: "adress",
  имя_гражданина: "citizenName",
  пол: "sex"
};

const reverse_word_map = {
  passport: "паспортные_данные",
  name: "фио",
  phone: "телефон",
  adress: "адрес",
  citizenName: "имя_гражданина",
  sex: "пол"
};

const type_map = {
  Текст: "TextInput",
  Число: "NumberInput"
};

const reverse_type_map = {
  TextInput: "Текст",
  NumberInput: "Число"
};

const special_map = {
  name: { label: "введите фио", placeholder: "фио" },
  citizenName: { label: "введите фио", placeholder: "фио" },
  passport: {
    label: "введите паспортные данные",
    placeholder: "паспорт"
  },
  phone: {
    label: "введите свой номер телефона",
    minValue: 1000000
  },
  adress: {
    label: "введиете свой домашний адрес"
  },
  sex: {
    label: "Введите ваш пол"
  }
};

export default {
  yaml_to_json: (yaml, json_params = {}) => {
    let json = Object.assign({ schema: [] }, json_params);
    let yaml_parsed = YAML.parse(yaml);
    let i = 0;
    for (let field in yaml_parsed) {
      json.schema.push({
        name: word_map[field],
        fieldType: type_map[yaml_parsed[field]]
      });

      if (json.schema[i].name in special_map) {
        Object.assign(json.schema[i], special_map[json.schema[i].name]);
      }
      i++;
    }
    return json;
  },
  json_to_yaml: json => {
    console.log(json);
    let yaml_json = {};
    for (let item of json["schema"]) {
      if (item["name"] in reverse_word_map) {
        yaml_json[reverse_word_map[item["name"]]] =
          reverse_type_map[item["fieldType"]];
      }
    }
    return YAML.stringify(yaml_json);
  }
};

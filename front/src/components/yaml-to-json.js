import YAML from "yaml";

const word_map = {
  паспортные_данные: "passport_data",
  фио: "name"
};

const type_map = {
  Текст: "TextInput",
  Число: "NumberInput"
};

const special_map = {
  name: { label: "введите фио", placeholder: "фио" },
  passport_data: {
    label: "введите паспортные данные",
    placeholder: "паспорт"
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
  }
};

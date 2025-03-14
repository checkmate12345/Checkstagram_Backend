import dotenv from "dotenv";

dotenv.config();

function getEnvValue(key, defaultValue = undefined) {
  let value = process.env[key];
  return value || defaultValue;
}

export const config = {
  db: {
    url: getEnvValue("DATABASE_URL"),
    db_name: getEnvValue("DATABASE_NAME"),
  },
  hosting: {
    front_port: getEnvValue("FRONT_PORT"),
    back_port: getEnvValue("BACK_PORT"),
    model_port: getEnvValue("MODEL_PORT"),
  },
};
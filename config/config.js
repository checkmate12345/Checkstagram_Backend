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
	aws: {
		access_key: getEnvValue("AWS_ACCESS_KEY"),
		secret_key: getEnvValue("AWS_SECRET_KEY"),
		bucket_name: getEnvValue("AWS_BUCKET_NAME"),
		bucket_region: getEnvValue("AWS_BUCKET_REGION"),
		bucket_directory: getEnvValue("AWS_BUCKET_DIRECTORY")
	}
};
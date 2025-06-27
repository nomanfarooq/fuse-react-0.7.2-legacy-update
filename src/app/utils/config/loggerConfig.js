import logger from "loglevel";

// Set the log level based on the environment (development, production, etc.)
if (import.meta.env.MODE === "production") {
  logger.setLevel("info");
} else {
  logger.setLevel("debug");
}

export default logger;
